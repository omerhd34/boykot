import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
 try {
  const body = await request.json();

  const {
   brandName,
   description,
   submitterName,
   submitterEmail,
  } = body;

  // Validasyon
  if (!brandName || !submitterName || !submitterEmail) {
   return NextResponse.json(
    { error: "Lütfen tüm zorunlu alanları doldurun." },
    { status: 400 }
   );
  }

  // Email formatı kontrolü
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(submitterEmail)) {
   return NextResponse.json(
    { error: "Geçerli bir e-posta adresi girin." },
    { status: 400 }
   );
  }

  // Veritabanına kaydet
  const suggestion = await prisma.brandSuggestion.create({
   data: {
    brandName: brandName.trim(),
    description: description?.trim() || null,
    submitterName: submitterName.trim(),
    submitterEmail: submitterEmail.trim().toLowerCase(),
    status: "pending",
   },
  });

  return NextResponse.json(
   {
    success: true,
    message: "Marka öneriniz başarıyla alındı.",
    id: suggestion.id,
   },
   { status: 201 }
  );
 } catch (error) {
  console.error("[Brand Suggestion API Error]:", error);
  return NextResponse.json(
   { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
   { status: 500 }
  );
 }
}

export async function GET(request) {
 try {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  const where = status ? { status } : {};

  const suggestions = await prisma.brandSuggestion.findMany({
   where,
   orderBy: {
    createdAt: "desc",
   },
  });

  return NextResponse.json({
   success: true,
   suggestions,
  });
 } catch (error) {
  console.error("[Brand Suggestions GET Error]:", error);
  return NextResponse.json(
   { error: "Bir hata oluştu." },
   { status: 500 }
  );
 }
}

