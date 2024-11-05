

import { NextResponse } from "next/server"

const URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string

export async function GET(req: Request, res: Response){

    try{
        const response = await fetch(`${URL}getPayments`,{ cache: 'no-store' })
        const Payments = await response.json()
        
        return new Response(JSON.stringify(Payments))

    }catch(error){
        console.error("Error fetching data:", error);
    }


}
export const revalidate =0;