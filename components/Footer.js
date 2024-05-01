import React from 'react';
import { getFullUrl } from '@/utils/utils';

const Footer = () => {
  return (
    <footer className="bg-[#1C2938] text-white px-6 py-8 sm:p-8 lg:px-14 xl:px-36 2xl:px-56 font-poppins">
      {/* Privacy Statement */}
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-center sm:space-x-4 text-center pb-9">
        <img
          src="/images/help-icon.png"
          alt="Life Vest Icon"
          className="h-20 w-20"
          // width={84}
          // height={84}
        />
        <p className="mb-2 text-xl font-semibold sm:pl-3 pt-2">
          Your information is safe with us. We respect your privacy and protect your data.
        </p>
      </div>

      {/* Contact Section */}
      <div className="text-left py-8 border-t border-[#FFF] border-opacity-20">
        <h5 className="text-white text-xl font-semibold mb-2">Have questions?</h5>
        <p className="mb-2 text-lg leading-8">
          Our friendly support team is here to help! Contact us at&nbsp;
          <a href="mailto:support@shipandplay.com" className="text-[#49C44F] hover:text-[#6ad687] underline break-words">
            support@shipandplay.com
          </a>
          &nbsp;or call <a className="text-[#49C44F] hover:text-[#6ad687] underline" href="tel:8557927529">(855) 792-7529</a>.</p>
      </div>

      {/* Main Footer Links */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-8 lg:justify-between py-8 border-t border-[#FFF] border-opacity-20 w-full">
        {/* First Section */}
        <div className="flex flex-row lg:flex-col justify-center lg:justify-around gap-8">
          {/* Column: Ship & Play */}
          <div className="flex flex-col flex-1">
            <h5 className="text-white text-[22px] sm:text-2xl lg:text-lg xl:text-[22px] font-semibold mb-4">Ship & Play</h5>
            <a href={getFullUrl("/")} className="hover:text-white mb-2">Home</a>
            <a href={getFullUrl("/ship")} className="hover:text-white mb-2">Ship</a>
            <a href={getFullUrl("/track")} className="hover:text-white mb-2">Track</a>
            <a href={getFullUrl("/giftcards")} className="hover:text-white mb-2">Gift Cards</a>
          </div>
          {/* Column: Help */}
          <div className="flex flex-col flex-1">
            <h5 className="text-white text-[22px] sm:text-2xl lg:text-lg xl:text-[22px] font-semibold mb-4">Help</h5>
            <a href={getFullUrl("/how-it-works")} className="hover:text-white mb-2">How it works</a>
            <a href={getFullUrl("/support")} className="hover:text-white mb-2">Support</a>
            <a href={getFullUrl("/claims")} className="hover:text-white mb-2">Claims</a>
            <a href={getFullUrl("/store-locator")} className="hover:text-white mb-2">Drop-off locator</a>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-row lg:flex-col flex-wrap justify-around gap-8 lg:justify-start">
          {/* Column: Partner with us */}
          <div className="flex flex-col flex-1">
            <h5 className="text-white text-[22px] sm:text-2xl lg:text-lg xl:text-[22px] font-semibold mb-4">Partner with us</h5>
            <a href={getFullUrl("/partners")} className="hover:text-white mb-2">Become a partner</a>
          </div>
          {/* Column: Account */}
          <div className="flex flex-col flex-1 lg:pt-24">
            <h5 className="text-white text-[22px] sm:text-2xl lg:text-lg xl:text-[22px] font-semibold mb-4">Account</h5>
            <a href={getFullUrl("/login")} className="hover:text-white mb-2">Login</a>
            <a href={getFullUrl("/register")} className="hover:text-white mb-2">Register</a>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col justify-between lg:justify-start">
          {/* Column: About us */}
          <div className="flex flex-col flex-1">
            <h5 className="text-white text-[22px] sm:text-2xl lg:text-lg xl:text-[22px] font-semibold mb-4">About us</h5>
            <a href={getFullUrl("/about")} className="hover:text-white mb-2">About Us</a>
            <a href={getFullUrl("/contact")} className="hover:text-white mb-2">Contact Us</a>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col flex-wrap lg:items-right gap-8">
          {/* Column: Get in touch */}
          <div className="flex flex-col lg:text-right">
            <h5 className="text-white text-[22px] sm:text-2xl lg:text-lg xl:text-[22px] font-semibold mb-4">Get in touch</h5>
            <p className="mb-2">324 Datura Street, Suite 400<br />West Palm Beach<br /> Florida 33401</p>
            <a className="mb-2" href="tel:8557927529">(855) 792-7529</a>
            <a className="hover:text-white mb-2" href="mailto:info@shipplay.com">info@shipplay.com</a>
          </div>
          {/* Column: Logo */}
          <div className="flex justify-center items-center lg:pt-8">
            <img
              src="/images/ship-play-clear-logo.png"
              alt="Ship & Play + Clear Logo"
              className="w-[28rem] xl:w-[474px]"
            />
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="flex flex-col lg:flex-row justify-between gap-5 items-center border-t border-[#FFF] border-opacity-20 pt-8">
        <div className='text-xs sm:text-sm lg:text-xs xl:text-sm hover:text-white flex flex-col lg:flex-row gap-4 lg:gap-0'>
          <div className="flex justify-center flex-nowrap">
            <a href={getFullUrl("/terms")} className="mr-2">Terms of Use</a>|
            <a href={getFullUrl("/privacy")} className="mx-2">Privacy Policy</a>|
            <a href={getFullUrl("/ccpa")} className="mx-2">CCPA Policy</a>
          </div>
          <div className="hidden lg:block">|</div>
          <div className="flex justify-center flex-nowrap ">
            <a href={getFullUrl("/cookies")} className="mx-2">Cookie Policy</a>|
            <a href={getFullUrl("/legal")} className="mx-2">Usage Right</a>|
            <a href={getFullUrl("/support")} className="mx-2">Support</a>|
            <a href={getFullUrl("/sitemap")} className="ml-2">Site Map</a>
          </div>
        </div>
        {/* Copyright */}
        <div>
          <p className="text-xs sm:text-sm lg:text-xs 2xl:text-sm">&copy; 2024 Ship & Play. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
