import { Input } from '@/components/ui/input';
import { NextResponse } from 'next/server';

export async function makeError(error: string, status: number) {
  return NextResponse.json({ error, status }, { status });
}

export async function makeResponse(message: string, data: any, status: number) {
  return NextResponse.json({ data, message, status }, { status });
}

export function isObjectEmpty(objectName: any) {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
}

export const classNames = (...classes: Array<string>) => {
  return classes.filter(Boolean).join(' ');
};
