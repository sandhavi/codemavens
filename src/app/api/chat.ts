import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
    const { msg } = await request.json();

    try {
        const response = await axios.post('http://localhost:8000/get', { msg });
        return NextResponse.json({ answer: response.data });
    } catch (error) {
        console.error('Error communicating with the chatbot:', error);
        return NextResponse.json({ error: 'Error communicating with the chatbot' }, { status: 500 });
    }
}
