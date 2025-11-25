import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma.js";

const contactSchema = z.object({
 name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
 email: z.string().email("Geçerli bir e-posta adresi giriniz"),
 subject: z.string().min(3, "Konu en az 3 karakter olmalıdır"),
 message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

export async function POST(request) {
 try {
  const body = await request.json();
  const validatedData = contactSchema.parse(body);

  const contactMessage = await prisma.contactMessage.create({
   data: {
    name: validatedData.name,
    email: validatedData.email,
    subject: validatedData.subject,
    message: validatedData.message,
   },
  });

  return NextResponse.json(
   {
    success: true,
    message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
    data: contactMessage,
   },
   { status: 201 }
  );
 } catch (error) {
  if (error instanceof z.ZodError) {
   return NextResponse.json(
    {
     success: false,
     message: "Girdi hatası",
     errors: error.errors,
    },
    { status: 400 }
   );
  }

  console.error("Contact form error:", error);
  return NextResponse.json(
   {
    success: false,
    message: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
   },
   { status: 500 }
  );
 }
}

