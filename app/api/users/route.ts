import { db } from '@/lib/db';

export async function GET(req: Request) {
  try {
    const users = await db.user.findMany();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
