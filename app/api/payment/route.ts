import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    console.log("Received Amount:", amount);

    console.log(
      "RAZORPAY KEY:",
      process.env.RAZORPAY_KEY_ID
    );

    console.log(
      "SECRET STATUS:",
      process.env.RAZORPAY_KEY_SECRET
        ? "FOUND"
        : "MISSING"
    );


    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });


    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `portfolio_${Date.now()}`,
    });


    console.log(
      "ORDER CREATED:",
      order.id
    );


    return NextResponse.json({
      order,
    });


  } catch (error: any) {

    console.error(
      "RAZORPAY FULL ERROR:",
      error
    );


    return NextResponse.json(
      {
        error:
          error?.error?.description ||
          error?.message ||
          "Payment order creation failed",
      },
      {
        status: 500,
      }
    );
  }
}