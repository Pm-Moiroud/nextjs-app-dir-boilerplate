'use client';

import React from 'react';

import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { User } from '@/models/user';
import { Input } from './ui/input';
import * as z from 'zod';

export default function UserAuthForm({
  initialValues,
  handleSubmit,
  title,
  schema,
}: {
  initialValues: User & { confirmPassword?: string };
  handleSubmit: (
    values: FormikValues,
    helpers: FormikHelpers<FormikValues>
  ) => void;
  title: string;
  schema: z.ZodObject<any>;
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={toFormikValidationSchema(schema)}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(props) => {
        return (
          <Form className='flex flex-col gap-y-8 min-w-[300px]'>
            <h1 className='text-lg font-semibold text-center capitalize'>
              {title}
            </h1>
            <div className='flex flex-col gap-y-3'>
              {Object.keys(initialValues).map((key) => {
                return (
                  <Input
                    key={key}
                    id={key}
                    name={key}
                    className='text-red-500'
                    type={
                      key === 'password' || key === 'confirmPassword'
                        ? 'password'
                        : 'text'
                    }
                    onChange={(e) => {
                      props.handleChange(e);
                      props.setFieldError(key, undefined);
                    }}
                    label={`${key}:`}
                    error={props.errors[key as keyof typeof props.errors]}
                  />
                );
              })}
            </div>
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='border border-lightgrey-500 px-2 py-1 rounded-lg w-1/2 hover:border-lightgrey-300'
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
