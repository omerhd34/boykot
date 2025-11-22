import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.js";
import { z } from "zod";

const appealSchema = z.object({
 brandId: z.string(),
 brandName: z.string().min(1),
 categorySlug: z.string().min(1),
 brandSlug: z.string().min(1),
 name: z.string().min(1, "İsim gereklidir"),
 email: z.string().email("Geçerli bir e-posta adresi giriniz"),
 message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

export async function POST(request) {
 try {
  const body = await request.json();

  // Validate input
  const validatedData = appealSchema.parse(body);

  // Create appeal
  const appeal = await prisma.appeal.create({
   data: {
    brandId: validatedData.brandId,
    brandName: validatedData.brandName,
    categorySlug: validatedData.categorySlug,
    brandSlug: validatedData.brandSlug,
    name: validatedData.name,
    email: validatedData.email,
    message: validatedData.message,
   },
  });

  return NextResponse.json(
   {
    success: true,
    message: "İtirazınız başarıyla gönderildi. İncelendikten sonra size dönüş yapılacaktır.",
    appeal: appeal
   },
   { status: 201 }
  );
 } catch (error) {
  if (error instanceof z.ZodError) {
   return NextResponse.json(
    {
     success: false,
     message: "Girdi hatası",
     errors: error.errors
    },
    { status: 400 }
   );
  }

  console.error("Appeal creation error:", error);
  return NextResponse.json(
   {
    success: false,
    message: "İtiraz gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz."
   },
   { status: 500 }
  );
 }
}

