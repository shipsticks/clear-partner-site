import { useState, useRef } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';
import { getFullUrl } from "@/utils/utils";
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

const Navbar = () => {
  const menuRef = useRef();
  const closeButtonRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: 'Track', path: '/track' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'What can I ship?', path: '/what-can-i-ship' },
    { name: 'Guarantee', path: '/guarantee' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Ship now', path: '/ship', extraClasses: 'inline-block bg-[#49C44F] px-7 py-4 rounded-full hover:bg-green-600' }
  ];

  useOnClickOutside(menuRef, () => setIsMenuOpen(false), closeButtonRef);

  return (
    <nav className="relative z-10 border-b-[1px] border-gray-50 border-opacity-30 py-4">
      <div className="mx-auto flex justify-between items-center px-4 sm:px-8 py-3 lg:py-5 xl:px-40 2xl:px-60">
        <img src="/images/ship-play-nav-logo.png" alt="Ship & Play Logo" className="w-60 sm:w-64 md:w-80 lg:w-auto max-w-80" />

        <button ref={closeButtonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white lg:hidden">
          {isMenuOpen ? <XMarkIcon  className="h-8 w-8 sm:h-10 sm:w-10" /> : <Bars3Icon className="h-8 w-8 sm:h-10 sm:w-10" />}
        </button>

        {/* Menu Items for mobile */}
        <Transition
          ref={menuRef}
          show={isMenuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="absolute top-full left-0 right-0 lg:hidden shadow-md"
        >
          <ul className="flex flex-col bg-white text-right">
            {menuItems.slice(0, -1).map((item) => (
              <li key={item.name} onClick={() => window.location.href = getFullUrl(item.path)} className={`flex items-center justify-end text-black h-16 pr-4 text-base border-b-[1px] border-gray-200 hover:text-white hover:bg-[#49C44F] ${item.extraClasses || ''}`}>
                <a href={getFullUrl(item.path)}>{item.name}</a>
              </li>
            ))}
            <button onClick={() => window.location.href = menuItems[menuItems.length - 1].href} className="flex items-center justify-center bg-[#49C44F] text-white rounded-full py-2 px-4 my-6 h-[48px] w-3/4 max-w-72 mx-auto">
              <a href={menuItems[menuItems.length - 1].href}>{menuItems[menuItems.length - 1].name}</a>
            </button>
          </ul>
        </Transition>

        {/* Menu Items for desktop */}
        <ul className="hidden lg:flex items-center space-x-4">
          {menuItems.map((item) => (
            <li key={item.name} className={`text-white text-base hover:text-green-300 ${item.extraClasses || ''}`}>
              <a href={getFullUrl(item.path)}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
