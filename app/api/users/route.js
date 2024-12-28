import connectDB from "@/lib/mongoose";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await connectDB()
        const users = await User.find()
        return NextResponse.json({users})
    } catch (error) {
        console.log(error);
    }
}

export async function POST(request) {
    try {
        const { name, email } = await request.json()
        await connectDB()
        await User.create({name, email})
        return NextResponse.json({message: 'new user created'}, {status: 201})
    } catch (error) {
        console.log(error);
    }
}

export async function DELETE(request) {
    try {
        console.log('to delete');
        const id = request.nextUrl.searchParams.get("id");
        await connectDB()
        await User.findByIdAndDelete(id)
        return NextResponse.json({message: 'user deleted'}, {status: 200})
    } catch (error) {
        console.log(error);
    }
}