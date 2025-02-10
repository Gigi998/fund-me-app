import type { Metadata } from "next";
import "./globals.css";
import Header from "./(components)/Layout/Header/Header";
import Web3ContextProvider from "./web3/context/provider";

export const metadata: Metadata = {
  title: "FundMe",
  description: "Fund Me app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-invert min-h-screen flex flex-col max-w-7xl mx-auto'>
        <div className='min-h-full'>
          <Web3ContextProvider>
            <Header />
            {children}
          </Web3ContextProvider>
        </div>
      </body>
    </html>
  );
}
