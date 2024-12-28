import connectDB from "@/lib/mongoose";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";



export async function PUT(request, { params }) {
    const { id } = params;
    const { nameNew: name, emailNew: email} = await request.json();
    await connectDB();
    await User.findByIdAndUpdate(id, { name, email});
    return NextResponse.json({ message: "Users updated" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectDB();
    const users = await User.findOne({ _id: id })
    return NextResponse.json({users}, {status: 200})
}