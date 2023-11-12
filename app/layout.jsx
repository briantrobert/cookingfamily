import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='antialiased bg-gradient-to-br from-pink-200 via-gray-100 to-teal-300 h-screen'>
          <Navbar />
         
          {children}

      </body>
    </html>
  )
}
