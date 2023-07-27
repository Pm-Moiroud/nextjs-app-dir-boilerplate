'use client';

import React from 'react';

import logoSwoop from '../public/logo-swoop.svg';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { classNames } from '@/lib/utils';
import { blurEffect } from '@/styles/blurEffect';
import { useParams, useRouter, usePathname } from 'next/navigation';

type Props = {};

export default function Header({}: Props) {
  const { data: session } = useSession();

  const router = useRouter();
  const path = usePathname();

  return (
    <header
      className={classNames(
        'w-full h-header px-12 flex items-center justify-between',
        blurEffect
      )}
    >
      <div className='flex items-center gap-4' onClick={() => router.push('/')}>
        <Image src={logoSwoop} alt='swoop logo' width={50} height={50} />
        <h1 className='text-2xl'>Swoop</h1>
      </div>
      <div>
        {!session?.user ? (
          path !== '/login' && (
            <button
              className='bg-cyan-800 px-4 py-2 rounded-md text-white opacity-80'
              onClick={() => router.push('/login')}
            >
              Sign in
            </button>
          )
        ) : (
          <button
            className='bg-cyan-800 px-4 py-2 rounded-md text-white'
            onClick={() => signOut()}
          >
            Sign out
          </button>
        )}
      </div>
    </header>
  );
}
