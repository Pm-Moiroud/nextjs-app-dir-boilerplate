import bcrypt from 'bcrypt';
import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { User } from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { makeError, makeResponse } from '@/lib/utils';

const registerUserSchema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
});

export async function POST(req: NextRequest, res: NextResponse) {
  const body: Partial<User> = await req.json();
  const { name, email, password } = registerUserSchema.parse(body);

  const user = await db.user.findUnique({
    where: { email },
  });

  if (user !== null) {
    return makeError('User already exists', 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return await makeResponse('User created successfully', newUser, 201);
}
