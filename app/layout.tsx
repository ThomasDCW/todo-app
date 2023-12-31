import Header from "./components/Header";
import { Providers } from "./redux/providers";
import "./globals.css";

export const metadata = {
  title: "TodoApp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.JSX.Element;
}) {
  return (
    <html lang='en' data-theme='corporate'>
      <body className='h-screen'>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
