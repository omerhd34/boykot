import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
 const cookieStore = await cookies();
 cookieStore.delete("admin_session");

 return NextResponse.json(
  { success: true, message: "Çıkış başarılı" },
  { status: 200 }
 );
}

