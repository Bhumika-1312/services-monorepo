"use client";

import Navbar from "../cleaning-booking/components/Navbar";
import Footer from "../cleaning-booking/components/Footer";

export default function CarDetailingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}