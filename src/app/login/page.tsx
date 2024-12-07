'use client'

import React from "react";
import { Button, Input } from '@nextui-org/react';
import Link from "next/link";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import Password from "@default import route/components/passwordInput";

export default function Page() {
  
  return (
    <div className='flex-col flex gap-2 pt-10 items-center h-screen mt-16 al'>
      <Input className='max-w-xs' variant={"bordered"} name='email' label='Email' placeholder='Enter your email' />
      <Password register={function <TFieldName extends string = string>(name: TFieldName, options?: RegisterOptions<any, TFieldName> | undefined): UseFormRegisterReturn<TFieldName> {
        throw new Error("Function not implemented.");
      } } />
      <Button radius="full" className="bg-gradient-to-tr from-purple-400 to-purple-950  text-white shadow-lg px-32">
        Log In
      </Button>
      <Link href='/register' className="underline text-gray-300 text-sm">No account? Register</Link>
    </div>
  );
}
