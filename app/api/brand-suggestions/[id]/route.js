import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(request, { params }) {
 try {
<<<<<<< HEAD
  const { id } = params;
=======
  const { id } = await params;
>>>>>>> 77835048519632a9186d7fd467a5ac180eae690d
  const body = await request.json();
  const { status, adminNotes } = body;

  if (!status || !["pending", "approved", "rejected"].includes(status)) {
   return NextResponse.json(
    { error: "Geçersiz durum değeri." },
    { status: 400 }
   );
  }

  const updatedSuggestion = await prisma.brandSuggestion.update({
   where: { id },
   data: {
    status,
    adminNotes: adminNotes || null,
    updatedAt: new Date(),
   },
  });

  return NextResponse.json({
   success: true,
   message: "Durum başarıyla güncellendi.",
   suggestion: updatedSuggestion,
  });
 } catch (error) {
  console.error("[Brand Suggestion Update Error]:", error);
  return NextResponse.json(
   { error: "Bir hata oluştu." },
   { status: 500 }
  );
 }
}

export async function DELETE(request, { params }) {
 try {
<<<<<<< HEAD
  const { id } = params;
=======
  const { id } = await params;
>>>>>>> 77835048519632a9186d7fd467a5ac180eae690d

  await prisma.brandSuggestion.delete({
   where: { id },
  });

  return NextResponse.json({
   success: true,
   message: "Öneri başarıyla silindi.",
  });
 } catch (error) {
  console.error("[Brand Suggestion Delete Error]:", error);
  return NextResponse.json(
   { error: "Bir hata oluştu." },
   { status: 500 }
  );
 }
}

