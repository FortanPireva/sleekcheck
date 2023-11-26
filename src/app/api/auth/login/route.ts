
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {

  const { email, password } = await req.json();
  if (email === 'admin@gmail.com' && password === '12345678') {
    // Successful login
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } else {
    // Invalid credentials
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
};

