import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";

export async function POST(req) {
    try {
        await connectDB();
        
        // Parse JSON body
        let body = await req.json();

        // Check if Razorpay Order ID exists in server
        let p = await Payment.findOne({ oid: body.razorpay_order_id });
        if (!p) {
            return NextResponse.json({ 
                success: false, 
                message: "Order ID not found" 
            }, { status: 400 });
        }

        // Verify the payment
        let isValidPayment = validatePaymentVerification(
            {
                order_id: body.razorpay_order_id, 
                payment_id: body.razorpay_payment_id
            }, 
            body.razorpay_signature, 
            process.env.KEY_SECRET
        );

        if (isValidPayment) {
            const updatePayment = await Payment.findOneAndUpdate(
                { oid: body.razorpay_order_id }, 
                { done: "true" }, 
                { new: true }
            );

            return NextResponse.json({ 
                success: true, 
                redirectUrl: `${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentdone=true`
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Payment verification failed"
            }, { status: 400 });
        }
    } catch (error) {
        console.error('Payment verification error:', error);
        return NextResponse.json({
            success: false,
            message: "Internal server error",
            error: error.message
        }, { status: 500 });
    }
}