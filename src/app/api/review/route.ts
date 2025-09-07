import { sendReviewEmail } from "@/app/config/nodemailer-config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email, review } = await req.json();
        console.log(name, email, review);
        if (!name || !email || !review) {
            return NextResponse.json({
                message: "All fields are required."
            }, { status: 400 });
        }

        await sendReviewEmail(name, email, review);

        return NextResponse.json({ message: "Message sent" }, { status: 200 });
    } catch (error) {
        console.error("Error in sending review:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
