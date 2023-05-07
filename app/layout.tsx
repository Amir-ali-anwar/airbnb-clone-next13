import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './models/Modal'
const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Modal isOpen={true} title='hello' />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
