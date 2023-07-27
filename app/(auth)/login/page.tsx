'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { classNames } from '@/lib/utils';
import { blurEffect } from '@/styles/blurEffect';
import UserAuthForm from '@/components/user-auth-form';
import { FormikHelpers, FormikValues } from 'formik';
import { userLoginSchema } from '@/lib/schemas/user';

export default function Login() {
  const handleSubmit = async (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    try {
      await signIn('credentials', {
        name: values.name,
        email: values.email,
        password: values.password,
        callbackUrl: '/',
      });
      formikHelpers.resetForm();
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
          }}
          handleSubmit={handleSubmit}
          title={'login'}
          schema={userLoginSchema}
        />
        <p className='mt-6 text-end'>
          No account yet ?{' '}
          <Link href='/register' className='underline'>
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
}
