import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";
import prisma from "@/lib/prisma.js";

const loginSchema = z.object({
  username: z.string().min(1, "Kullanıcı adı gereklidir"),
  password: z.string().min(1, "Şifre gereklidir"),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = loginSchema.parse(body);
    
    // Check if admin exists
    const admin = await prisma.admin.findUnique({
      where: { username: validatedData.username },
    });
    
    // If admin doesn't exist, create one with default credentials from env
    if (!admin) {
      const adminUsername = process.env.ADMIN_USERNAME || "admin";
      const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
      
      if (validatedData.username !== adminUsername || validatedData.password !== adminPassword) {
        return NextResponse.json(
          { success: false, message: "Kullanıcı adı veya şifre hatalı" },
          { status: 401 }
        );
      }
      
      // Create admin with correct username
      await prisma.admin.create({
        data: {
          username: adminUsername,
          password: adminPassword, // In production, hash this!
        },
      });
    } else {
      // Compare passwords (in production, use bcrypt)
      if (admin.password !== validatedData.password) {
        return NextResponse.json(
          { success: false, message: "Kullanıcı adı veya şifre hatalı" },
          { status: 401 }
        );
      }
    }
    
    // Create session cookie
    const cookieStore = await cookies();
    cookieStore.set("admin_session", validatedData.username, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    
    return NextResponse.json(
      { success: true, message: "Giriş başarılı" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Girdi hatası", errors: error.errors },
        { status: 400 }
      );
    }
    
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Giriş yapılırken bir hata oluştu" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  // Check if admin is logged in
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  
  if (!session) {
    return NextResponse.json(
      { success: false, authenticated: false },
      { status: 401 }
    );
  }
  
  return NextResponse.json(
    { success: true, authenticated: true, username: session.value },
    { status: 200 }
  );
}

