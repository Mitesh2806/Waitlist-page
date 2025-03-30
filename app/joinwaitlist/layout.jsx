import { Geist, Geist_Mono, Kodchasan} from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kodchasan = Kodchasan({
  subsets: ['latin'],
  weight: '400', 
});

export const metadata = {
  title: "CalAI",
  description: "Generate Courses, Quizzes and Animation in an instant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={kodchasan.className}
      >
        {children}
      </body>
    </html>
  );
}
