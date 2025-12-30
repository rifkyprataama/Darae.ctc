import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
    try {
        // 1. Terima data dari formulir depan
        const body = await request.json();
        const { name, email, message } = body;

        // 2. Masukkan ke Supabase
        const { data, error } = await supabase
        .from('messages') // Pastikan nama tabel ini sama persis dengan di Supabase
        .insert([
            { name, email, message },
        ])
        .select();

        // 3. Cek apakah ada error dari database
        if (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // 4. Berhasil!
        return NextResponse.json({ success: true, data }, { status: 200 });
        
    } catch (err) {
        console.error("Server Error:", err);
        return NextResponse.json({ error: "Gagal memproses data" }, { status: 500 });
    }
}