"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import store from "../redux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
};

export default RootLayout;
