"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
const apiUrl:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string

// Mock data for the table

interface Tpayment{
  AgentsId:string,
  Date:string,
  Amount:string,
}

interface Props{
  refreshPayments:boolean,
  setRefreshPayments:(refreshPayments:boolean)=>void,

}

export function PaymentTable({refreshPayments,setRefreshPayments}:Props) {
  const [payments,setPayments]=useState<Tpayment[]>([])


  useEffect(()=>{
    const getPayments= async ()=>{
      try{
          const Payments:Tpayment| any =  await fetch("api/fetchPayments").then((res)=>res?.json().then(data=>data.data))

          setPayments(Payments);
          
      }catch(error){
          console.log(error)
      }

  }

  getPayments()

  },[refreshPayments])


  return (
    <div className="rounded-md border">
      <ScrollArea className="h-[400px] w-full">
        <Table>
          <TableHeader className="sticky top-0 bg-white">
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Agent Code</TableHead>
              {/* <TableHead>Agent Name</TableHead> */}
              <TableHead className="text-right">Amount</TableHead>
              {/* <TableHead>Status</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.AgentsId}>
                <TableCell>{new Date(payment.Date).toLocaleString()}</TableCell>
                <TableCell>{payment.AgentsId}</TableCell>
                {/* <TableCell>{payment.agentName}</TableCell> */}
                <TableCell className="text-right">
                  ₦{Number(payment.Amount).toFixed(2)}
                </TableCell>
                {/* <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                    {payment.status}
                  </span>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}