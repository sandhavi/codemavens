'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <main className="flex flex-col h-auto md:h-screen items-center justify-center font-sans" id="about">
            <div className="sm:flex items-center max-w-screen-xl p-4">
                <motion.div
                    className="sm:w-1/3 p-2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="image object-center text-center">
                        <img
                            src="/about.jpg"
                            alt='Illustration of The Baby Guard'
                            className="rounded-lg" 
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="sm:w-2/3 p-5"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl sm:text-4xl ">
                            About <span className="cell bg-pink-100 px-2 py-1 rounded-lg">The Baby Guard</span>
                        </h2>
                        <p className="text-gray-700 mb-4 tracking-wider">
                            BabyGuard is an innovative digital health solution designed to provide comprehensive care for pregnant women and newborns. The app offers an integrated platform for mothers to monitor their health during pregnancy, receive expert advice, and track their baby&lsquo;s health after delivery. It extends support beyond pregnancy into the postpartum phase, ensuring continuous care for both mother and child
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-10 mt-8">
                        {/* Animated Mission Section */}
                        <motion.div
                            className="w-full sm:w-1/2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-gray-500 border-b-2 border-rose-200 uppercase font-semibold">Mission</span>
                            <p className="text-gray-700 mt-2 tracking-wider">
                                To provide continuous health monitoring and support for pregnant mothers and newborns, while reducing maternal and infant mortality through timely health insights and reminders.
                            </p>
                        </motion.div>

                        <motion.div
                            className="w-full sm:w-1/2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-gray-500 border-b-2 border-rose-200 uppercase font-semibold">Vision</span>
                            <p className="text-gray-700 mt-2 tracking-wider">
                                To empower mothers with personalized health advice and easy access to healthcare professionals, breaking barriers in maternal and infant care, especially in underserved areas
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default About;