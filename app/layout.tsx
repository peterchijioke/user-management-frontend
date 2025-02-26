import "./globals.css";
import RootFile from "./_components/RootFile";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootFile>{children}</RootFile>
      </body>
    </html>
  );
}
