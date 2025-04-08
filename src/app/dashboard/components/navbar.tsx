'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faHome, faInfoCircle, faStar, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { SignedIn, SignedOut, UserButton, SignIn } from '@clerk/clerk-react';
import Link from 'next/link';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const openSignIn = () => {
        setIsSignInOpen(true);
    };


    const menuItems = [
        { name: 'Home', href: '/dashboard', icon: faHome },
        { name: 'Appointments', href: '/appointment', icon: faInfoCircle },
        { name: 'My Documents', href: '/document', icon: faStar },
        { name: 'Baby Charts', href: '/chart', icon: faStar },
        { name: 'Chat', href: '/chat', icon: faQuestionCircle }
    ];

    return (
        <header className="fixed w-screen min-h-auto bg-slate-50/90 text-lg font-inter tracking-wide text-gray-500 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8 relative">
                {/* Logo - Left */}
                <div className="flex z-10">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Image
                            className="h-8 w-auto"
                            src='/favicon.jpg'
                            width={40}
                            height={40}
                            alt="Company Logo"
                        />
                    </Link>
                </div>

                {/* Centered Menu Items */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-x-12">
                    {menuItems.map(item => (
                        <Link key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 hover:text-gray-700 hover:und hover:und-animation">
                            {item.name}
                        </Link>
                    ))}

                </div>

                {/* User Button and Mobile Menu - Right */}
                <div className="flex items-center gap-4 z-10">
                    <div className="hidden lg:flex items-center">
                        <SignedOut>
                            <button onClick={openSignIn} className="text-sm font-semibold text-gray-900 hover:text-gray-700 pr-5">
                                Log in
                            </button>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Rest of the code remains the same... */}
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-gray-900 bg-opacity-25"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-50/90 px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <Link href="#" className="-m-1.5 p-1.5">
                                    <Image
                                        className="w-auto pl-5"
                                        src="/favicon.jpg"
                                        width={20}
                                        height={20}
                                        alt="Company Logo"
                                    />
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={toggleMenu}
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col space-y-2">
                                {menuItems.map(item => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="w-full py-3 px-4 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:und hover:und-animation rounded-lg border-b border-gray-100 last:border-b-0"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <SignedIn>
                                    <Link href="/dashboard" className="w-full py-3 px-4 text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg border-b border-gray-100 last:border-b-0">
                                        Dashboard
                                    </Link>
                                    <UserButton />
                                </SignedIn>
                                <SignedOut>
                                    <button onClick={openSignIn} className="w-full py-3 px-4 text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg border-b border-gray-100 last:border-b-0">
                                        Log in
                                    </button>
                                </SignedOut>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sign In Modal */}
            <AnimatePresence>
                {isSignInOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-[200] flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            <SignIn
                                afterSignInUrl="/"
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* CSS for Hover Underline Animation */}
            <style jsx>{`
                .hover\:und-animation {
                    position: relative;
                    display: inline-block;
                }

                .hover\:und-animation::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: -4px;
                    left: 50%;
                    background-color: #FF007A;
                    transform: translateX(-50%) scaleX(0);
                    transition: transform 0.3s ease;
                }

                .hover\:und-animation:hover::after {
                    transform: translateX(-50%) scaleX(1);
                }
            `}</style>
        </header>
    );
}

export default NavBar;