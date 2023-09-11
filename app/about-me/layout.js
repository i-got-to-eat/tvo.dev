import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contact Information for Tam Vo',
  description: 'Instagram, Youtube, Facebook, Twitter (X), Form Outreach',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
	  <div id="stars"/>
	  <div id="stars2"/>
	  <div id="stars3"/>
	  
	  <div>{children}</div></body>
	  </html>
  )
}
