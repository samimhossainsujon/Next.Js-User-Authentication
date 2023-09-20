import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(requset:NextRequest) {
    try {
        const reqBody = await requset.json()
        const {email,password} = reqBody;
        console.log(reqBody);
        // cheak if user exists 

        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"user does not exist "}, {status:400})
        }
        // cheak password
        const validPassword= await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return NextResponse.json({error: "Invalid Password"}, {status:400})
        }

        // creact token data 
        const tokenData ={
            id: user._id, 
            username: user.username,
            email:user.email
        }

        // create token 
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!, {expiresIn:"4h"})

        const resposnse = NextResponse.json({
            message:'Login Successfull',
            success: true,
        })

        resposnse.cookies.set("token", token,{httpOnly:true,})

        return resposnse;


        
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})        
    }
    
}
