import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="antialiased bg-cover bg-center p-6 sm:p-8 md:px-14 md:py:8"
      >
        {children}
      </body>
    </html>
  );
}
