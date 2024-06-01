import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { NeynarAPIClient } from "@neynar/nodejs-sdk";

const apiKey = process.env.NEYNAR_API_KEY;
const client = new NeynarAPIClient(apiKey!)
export async function GET(req: NextRequest) {
    try {
        const addr  = req.nextUrl.searchParams.get('addr');
        const user = await client.fetchBulkUsersByEthereumAddress([addr!])
        console.log(user)
        return NextResponse.json([user])
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}


export const dynamic = 'force-dynamic';