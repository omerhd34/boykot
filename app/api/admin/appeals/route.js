import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma.js";

async function checkAdminAuth() {
 const cookieStore = await cookies();
 const session = cookieStore.get("admin_session");
 return !!session;
}

export async function GET(request) {
 try {
  // Check authentication
  const isAuthenticated = await checkAdminAuth();
  if (!isAuthenticated) {
   return NextResponse.json(
    { success: false, message: "Yetkisiz erişim" },
    { status: 401 }
   );
  }

  // Get query parameters
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const skip = (page - 1) * limit;

  // Build where clause
  const where = status && status !== "all" ? { status } : {};

  // Get appeals with pagination
  const [appeals, total] = await Promise.all([
   prisma.appeal.findMany({
    where,
    orderBy: { createdAt: "desc" },
    skip,
    take: limit,
    select: {
     id: true,
     brandName: true,
     categorySlug: true,
     brandSlug: true,
     name: true,
     email: true,
     message: true,
     status: true,
     adminNotes: true,
     createdAt: true,
     updatedAt: true,
    },
   }),
   prisma.appeal.count({ where }),
  ]);

  return NextResponse.json({
   success: true,
   appeals,
   pagination: {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
   },
  });
 } catch (error) {
  console.error("Get appeals error:", error);
  return NextResponse.json(
   { success: false, message: "İtirazlar getirilirken bir hata oluştu" },
   { status: 500 }
  );
 }
}

