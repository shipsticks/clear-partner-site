// import { Poppins } from "next/font/google";
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import SpecialOfferDescription from '../components/SpecialOfferDescription';
import Footer from '../components/Footer';
import OurServiceSection from "../components/OurServiceSection";

// const poppins = Poppins({ weights: [400, 500, 600, 700], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Exclusive Offer | Ship & Play</title>
        <meta name="description" content="Exclusive offer for Clear members by Ship & Play" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background image container with responsive height */}
      <div className="relative font-poppins bg-cover bg-center backgroundImage">
        <Navbar />
        <HeroSection />
      </div>

      <main className="flex flex-col items-center justify-between w-full font-poppins">
        <OurServiceSection />
        <BenefitsSection />
        <SpecialOfferDescription />
      </main>
      <Footer />
    </>
  );
}
