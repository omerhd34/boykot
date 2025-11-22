import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma.js";
import { z } from "zod";

async function checkAdminAuth() {
 const cookieStore = await cookies();
 const session = cookieStore.get("admin_session");
 return !!session;
}

const updateAppealSchema = z.object({
 status: z.enum(["pending", "reviewed", "resolved", "cancelled"]).optional(),
 adminNotes: z.string().optional(),
});

export async function PATCH(request, { params }) {
 try {
  // Check authentication
  const isAuthenticated = await checkAdminAuth();
  if (!isAuthenticated) {
   return NextResponse.json(
    { success: false, message: "Yetkisiz erişim" },
    { status: 401 }
   );
  }

  const { id } = await params;
  const body = await request.json();

  // Validate input
  const validatedData = updateAppealSchema.parse(body);

  // Update appeal
  const appeal = await prisma.appeal.update({
   where: { id },
   data: validatedData,
  });

  return NextResponse.json({
   success: true,
   message: "İtiraz başarıyla güncellendi",
   appeal,
  });
 } catch (error) {
  if (error instanceof z.ZodError) {
   return NextResponse.json(
    { success: false, message: "Girdi hatası", errors: error.errors },
    { status: 400 }
   );
  }

  if (error.code === "P2025") {
   return NextResponse.json(
    { success: false, message: "İtiraz bulunamadı" },
    { status: 404 }
   );
  }

  console.error("Update appeal error:", error);
  return NextResponse.json(
   { success: false, message: "İtiraz güncellenirken bir hata oluştu" },
   { status: 500 }
  );
 }
}

