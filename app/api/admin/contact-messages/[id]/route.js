import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma.js";

export async function PATCH(request, { params }) {
 try {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session) {
   return NextResponse.json(
    { success: false, message: "Yetkisiz erişim" },
    { status: 401 }
   );
  }

  const { id } = await params;
  const body = await request.json();

  const updatedMessage = await prisma.contactMessage.update({
   where: { id },
   data: {
    status: body.status,
    adminNotes: body.adminNotes,
    updatedAt: new Date(),
   },
  });

  return NextResponse.json(
   {
    success: true,
    message: "Mesaj başarıyla güncellendi",
    data: updatedMessage,
   },
   { status: 200 }
  );
 } catch (error) {
  console.error("Update contact message error:", error);
  return NextResponse.json(
   { success: false, message: "Mesaj güncellenirken bir hata oluştu" },
   { status: 500 }
  );
 }
}

export async function DELETE(request, { params }) {
 try {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session) {
   return NextResponse.json(
    { success: false, message: "Yetkisiz erişim" },
    { status: 401 }
   );
  }

  const { id } = await params;

  await prisma.contactMessage.delete({
   where: { id },
  });

  return NextResponse.json(
   { success: true, message: "Mesaj başarıyla silindi" },
   { status: 200 }
  );
 } catch (error) {
  console.error("Delete contact message error:", error);
  return NextResponse.json(
   { success: false, message: "Mesaj silinirken bir hata oluştu" },
   { status: 500 }
  );
 }
}

