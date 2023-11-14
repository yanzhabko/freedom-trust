"use server";

import { SendEmail } from "@/components/SendEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, lastName, email, phoneNumber, childName, age, dignos, stage } =
    await request.json();

  try {
    const data = await resend.emails.send({
      from: "FreedomTrust <onboarding@resend.dev>",
      to: ["zzabkopro@gmail.com"],
      subject: "Contact Information",
      react: SendEmail({
        name: name,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        childName: childName,
        age: age,
        dignos: dignos,
        stage: stage,
      }),
    });
    return NextResponse.json("Successfully");
  } catch (error) {
    return NextResponse.json({ error });
  }
}
