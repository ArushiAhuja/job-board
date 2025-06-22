import './globals.css';

export const metadata = {
  title: 'Job Board',
  description: 'Find and post jobs easily.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
