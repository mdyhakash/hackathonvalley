import CustomRootProvider from "@/providers/CustomRootProvider";
import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hackathon Valley",
  description: "Empowering innovation and technology,",
};

// const myFont = localFont({
//   src: "./cambria-font.ttf",
//   display: "swap",
// });

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/* <body className={myFont.className}> */}
      <body className={inter.className}>
        <CustomRootProvider session={session}>{children}</CustomRootProvider>
      </body>
    </html>
  );
}
