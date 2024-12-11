'use client'

import React, { useState } from "react";
import { Button, Input } from '@nextui-org/react';
import Password from "../../components/passwordInput";
import Link from "next/link";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {register as registerUser} from '../../lib/api/auth';

const schema = yup
    .object({
      username: yup
        .string()
        .required('Username is required')
        .min(3, 'Username must have at least 3 characters')
        .max(50, 'Username must have less than 50 characters'),
      email: yup
        .string()
        .required('Email is required')
        .email('You must enter a valid email'),
      password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must have at least 8 characters'),
      passwordRep: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Passwords must match')
    })
    .required();

export default function Page() {
    const { handleSubmit, register, formState: {errors} } = useForm<yup.InferType<typeof schema>>({
      defaultValues: {
        username: '',
        password: '',
        email: '',
        passwordRep: ''
      },
      resolver: yupResolver(schema),
    });
  
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    async function onSubmit(data: any) {
      console.log(errors);
      await registerUser(data.email, data.username, data.password);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex-col flex gap-2 pt-10 items-center h-screen mt-14'>
      <Input {...register('username')} className='max-w-xs' variant={"bordered"} name='username' label='Username' placeholder='Enter a username' />
      <Input {...register('email')} className='max-w-xs' variant={"bordered"} name='email' label='Email' placeholder='Enter your email' />
      <Password register={register("password")} />
      <Input
        {...register('passwordRep')}
        name='passwordRep'
        label='Repeat Password'
        variant='bordered'
        placeholder='Repeat your password'
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
            {isVisible ? (
              <p className="fa-solid fa-eye text-gray-400"/> ) : (
              <p className="fa-solid fa-eye-slash text-gray-400"/>)}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="max-w-xs"
      />
      <Button onClick={handleSubmit(onSubmit)} radius="full" type="submit" className="bg-gradient-to-tr from-purple-400 to-purple-950  text-white shadow-lg px-32" >
        Register
      </Button>
      <Link href='/login' className="underline text-gray-300 text-sm">Already have an account? Log In</Link>
    </form>
  );
}

