import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// POST function for registering new user
export async function POST(request: Request) {
  try {
    // extract values from body
    const body = await request.json();
    const { email, name, password } = body;

    // check if body contains necessary info
    if (!email || !name || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }

    // encrypt password
    const hashedPassword = await bcrypt.hash(password, 12);

    // define user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
