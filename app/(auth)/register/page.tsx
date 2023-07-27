'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { classNames, isObjectEmpty } from '@/lib/utils';
import UserAuthForm from '@/components/user-auth-form';
import { FormikHelpers, FormikValues } from 'formik';
import { userRegisterSchema } from '@/lib/schemas/user';
import { blurEffect } from '@/styles/blurEffect';

export default function Register() {
  const handleSubmit = async (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });

      const { data } = await res.json();

      if (isObjectEmpty(data)) return null;

      await signIn('credentials', {
        name: data.name,
        email: data.email,
        password: values.password,
        callbackUrl: '/',
      });
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <section className='flex justify-center items-center full-height'>
      <div className={classNames('card-blur', blurEffect)}>
        <UserAuthForm
          initialValues={{
            email: '',
            name: '',
            password: '',
            confirmPassword: '',
          }}
          handleSubmit={handleSubmit}
          title={'Register'}
          schema={userRegisterSchema}
        />
      </div>
    </section>
  );
}
