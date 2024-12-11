'use client'

import React, { useState } from "react";
import { Button, Input } from '@nextui-org/react';
import Password from "../../components/passwordInput";
import Link from "next/link";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {login, register as registerUser} from '../../lib/api/auth';

const schema = yup
    .object({
      email: yup
        .string()
        .required('Email is required')
        .email('You must enter a valid email'),
      password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must have at least 8 characters')
    })
    .required();

export default function Page() {
    const { handleSubmit, register, formState: {errors} } = useForm<yup.InferType<typeof schema>>({
      defaultValues: {
        password: '',
        email: ''
      },
      resolver: yupResolver(schema),
    });

    async function onSubmit(data: any) {
      console.log(errors);
      const userid= await login(data.email, data.password);
      if(userid!==null){
        localStorage.setItem("id", String(userid));
      }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex-col flex gap-2 pt-10 items-center h-screen mt-14'>
      
      <Input {...register('email')} className='max-w-xs' variant={"bordered"} name='email' label='Email' placeholder='Enter your email' />
      <Password register={register("password")} />
      
      <Button onClick={handleSubmit(onSubmit)} radius="full" type="submit" className="bg-gradient-to-tr from-purple-400 to-purple-950  text-white shadow-lg px-32" >
        Log in
      </Button>
      <Link href='/login' className="underline text-gray-300 text-sm">Already have an account? Log In</Link>
    </form>
  );
}

