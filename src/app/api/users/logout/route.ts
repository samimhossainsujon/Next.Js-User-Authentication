import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await NextResponse.json({
      meassage: "Logout successfully",
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
