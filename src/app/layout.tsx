import { inter } from '@/ui/fonts';
import '../ui/globals.css';
import Navbar from '@/ui/navbar/Navbar';
import Footer from '@/ui/footer/Footer';
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.container}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
