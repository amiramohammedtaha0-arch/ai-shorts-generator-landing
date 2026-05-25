import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Shorts Batch Generator | Automated AI Video Editor',
  description: 'Turn your long videos into viral social media clips automatically. Best AI tool for YouTube Shorts, TikTok, and Instagram Reels.',
  keywords: ['AI video editor', 'YouTube Shorts tool', 'TikTok batch generator', 'Automated video cropping', 'AI content creation'],
  authors: [{ name: 'Amia MoTaha' }],
  openGraph: {
    title: 'AI Shorts Batch Generator',
    description: 'Transform long videos into engaging Shorts using AI.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}