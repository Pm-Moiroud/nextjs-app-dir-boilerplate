import React, { InputHTMLAttributes } from 'react';

type InputType = {
  error?: string;
  type:
    | 'color'
    | 'email'
    | 'hidden'
    | 'number'
    | 'decimal'
    | 'url'
    | 'text'
    | 'password';
  helpertext?: string;
  label?: string;
  endadornment?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;
export function Input(props: InputType) {
  return (
    <div>
      {props.label && (
        <label htmlFor={props.id} className='capitalize text-xs'>
          {props.label}
        </label>
      )}
      <div className='flex w-full'>
        <input
          {...props}
          type={props.type === 'decimal' ? 'number' : props.type}
          className='rounded-lg bg-transparent focus:ring-0 w-full placeholder:capitalize placeholder:text-sm text-sm'
          autoComplete={props.type === 'password' ? 'off' : 'on'}
          onChange={(event) => {
            if (props.onChange) {
              props.onChange(event);
            }
          }}
        />
      </div>
      {props.helpertext && !props.error && <p>{props.helpertext}</p>}
      {props.error && <p className='text-red-700 text-xs'>{props.error}</p>}
    </div>
  );
}
