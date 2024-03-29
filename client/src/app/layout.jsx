import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "./redux/provider";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap"
          rel="stylesheet"
        ></link>
      </head>
        <body className="">
      {/* <body className={inter.className}>{children}</body> */}
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}
