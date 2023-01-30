import './globals.css';
import Header from './Header';

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div className="p-2">
          {children}
        </div>
      </body>
    </html>
  )
}
