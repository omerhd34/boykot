import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma.js";

export async function GET(request) {
 try {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session) {
   return NextResponse.json(
    { success: false, message: "Yetkisiz erişim" },
    { status: 401 }
   );
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  const where = {};
  if (status && status !== "all") {
   where.status = status;
  }

  const messages = await prisma.contactMessage.findMany({
   where,
   orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(
   { success: true, messages },
   { status: 200 }
  );
 } catch (error) {
  console.error("Fetch contact messages error:", error);
  return NextResponse.json(
   { success: false, message: "Mesajlar yüklenirken bir hata oluştu" },
   { status: 500 }
  );
 }
}

