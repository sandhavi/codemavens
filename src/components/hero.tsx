'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="relative flex flex-col lg:flex-row items-center leading-relaxed justify-center bg-white h-auto md:h-screen px-4 md:px-6 lg:px-12 pt-28 md:pt-1" id="home">
            {/* Left Column */}
            <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
                <div className="text-center lg:text-left p-4 md:p-6 lg:p-16">
                    {/* Mobile Title */}
                    <h2 className="text-4xl font-bold text-gray-800 mb-1 lg:hidden">
                        The Baby Guard
                    </h2>
                    {/* Main Content - Hidden on Mobile */}
                    <motion.h1
                        className="hidden lg:block text-lg md:text-2xl lg:text-4xl font-bold text-gray-800 leading-relaxed"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="cell bg-pink-100 px-2 py-1 rounded-lg leading-relaxed">
                            Baby Guard
                        </span>{' '}
                        is a comprehensive digital health platform designed to support{' '}
                        <span className="cell bg-pink-100 px-2 py-1 rounded-lg leading-relaxed">
                            pregnant women,
                        </span>{' '}
                        <span className="cell bg-pink-100 px-2 py-1 rounded-lg leading-relaxed">
                            new mothers,
                        </span>{' '}
                        and{' '}
                        <span className="cell bg-pink-100 px-2 py-1 rounded-lg leading-relaxed">
                            their families.
                        </span>{' '}
                        <span className='leading-relaxed'>
                            Focused on health tracking and postnatal care.
                        </span>
                    </motion.h1>
                    {/* Register Button - Hidden on Mobile */}
                    <motion.button
                        className="hidden lg:block"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="#_" className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 mt-6 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-pink-400 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-slate-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-pink-500 group-hover:-rotate-180 ease"></span>
                                <span className="relative">Get Started</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-pink-400 rounded-md group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </Link>
                    </motion.button>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/4 mt-6 lg:mt-0 relative flex justify-center lg:justify-end">
                {/* Overlay Text on Mobile View */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-transparent z-10 bg-opacity-50 lg:hidden">
                    <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-800 leading-relaxed text-center">
                        <span className="cell bg-pink-100 px=2 py=1 rounded-lg leading-relaxed">
                            Baby Guard
                        </span>{' '}
                        is a comprehensive digital health platform designed to support{' '}
                        <span className="cell bg-pink-100 px=2 py=1 rounded-lg leading-relaxed">
                            pregnant women,
                        </span>{' '}
                        <span className="cell bg-pink-100 px=2 py=1 rounded-lg leading-relaxed">
                            new mothers,
                        </span>{' '}
                        and{' '}
                        <span className="cell bg-pink=100 px=2 py=1 rounded-lg leading-relaxed">
                            their families.
                        </span>{' '}
                        <span className='leading-relaxed'>
                            Focused on health tracking and postnatal care.
                        </span>
                    </h1>
                </div>
                {/* Animated Image */}
                <motion.img
                    src="/newOne.jpg"
                    alt="Illustration"
                    initial={{ opacity: 0 }}
                    whileInView= {{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg w-full max-w-xs lg:w-full"

                />
            </div>

            {/* Decorative Doodles with Animation */}
            <motion.div
                className="absolute top-[20%] left-[10%] text-xl hidden lg:block"
                initial={{ scale: 0, rotate: 360 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
            >
                🌸
            </motion.div>
            <motion.div
                className="absolute bottom-[30%] right-[30%] text-xl hidden lg:block"
                initial={{ scale: 0, rotate: 360 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
            >
                ❤️
            </motion.div>
            <motion.div
                className="absolute top-[20%] right-[10%] text-xl hidden lg:block"
                initial={{ scale: 0, rotate: 360 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
            >
                ⭐
            </motion.div>
            <motion.div
                className="absolute bottom-[22%] left-[20%] text-xl hidden lg:block"
                initial={{ scale: 0, rotate: 360 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
            >
                🌼
            </motion.div>
            <motion.div
                className="absolute top-[36%] left-[33%] text-xl hidden lg:block"
                initial={{ scale: 0, rotate: 360 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
            >
                ✨
            </motion.div>
        </section>
    );
};

export default HeroSection;