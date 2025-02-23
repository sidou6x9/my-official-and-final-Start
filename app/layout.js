import { Providers } from "@/components/Providers";
import "../styles/globals.css";

export const metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Professional web development services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
