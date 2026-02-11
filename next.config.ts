import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Izin untuk merender SVG
    dangerouslyAllowSVG: true,
    // Keamanan tambahan untuk SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // TAMBAHKAN INI
      },
      {
        protocol: 'https',
        hostname: 'udhadcttplnmziifumit.supabase.co', 
      },
      // randomuser.me SUDAH DIHAPUS
    ],
  },
};

export default nextConfig;