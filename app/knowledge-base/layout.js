import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tam\'s Portfolio',
  description: 'The digital showcase for Tam\'s Experiences, Projects, and Knowledge. This website will serve as an evolving resource to be referenced back to.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
