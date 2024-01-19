import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark:bg-black dark:text-gray-50`} >
        {children}
      </body>
    </html>
  );
}
