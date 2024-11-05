

import { NextResponse } from "next/server"

const URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string

export async function GET(req: Request, res: Response){

    try{
        const response = await fetch(`https://script.google.com/macros/s/AKfycbwZFoHH5mB7l3gSyK9w_dG8TCAzctP9EdBCMtEoYuun302Rvt-6Fwr5h8RaksFSEHxB/exec?action=getPayments`,{ cache: 'no-store' })
        const Payments = await response.json()
        
        return new Response(JSON.stringify(Payments))

    }catch(error){
       
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
    }


}
export const revalidate =0;

