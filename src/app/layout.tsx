import './globals.css'

export const metadata = {
  title: 'Google',
  description: 'Search in Google',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-zinc-700 text-zinc-50'>{children}</body>
    </html>
  )
}
