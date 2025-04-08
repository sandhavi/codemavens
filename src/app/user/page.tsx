'use client';
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/navbar';

const RegisterForm = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0
        }
    };

    return (
        <>
            <NavBar />
            <section className="min-h-screen bg-white px-4 pt-28 md:pt-16 pb-16">
                <motion.div
                    className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <div className="bg-pink-50 px-6 py-8 md:px-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                            Welcome to <span className="text-pink-500">Baby Guard</span>
                        </h2>
                        <p className="text-gray-600 text-center mt-2">
                            Let&apos;s get to know you better to provide personalized care
                        </p>
                    </div>

                    {/* Form */}
                    <form className="p-6 md:p-12 space-y-8">
                        {/* Mother's Details Section */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                                <span className="bg-pink-100 px-3 py-1 rounded-lg">Mother&apos;s Details</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Date of Birth</label>
                                    <input
                                        type="date"
                                        title="Date of Birth"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">NIC Number</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                        placeholder="Enter your NIC number"
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Contact Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                        placeholder="Enter your contact number"
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2 md:col-span-2">
                                    <label className="block text-gray-700 font-medium">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                        rows={3}
                                        placeholder="Enter your address"
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Occupation</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                        placeholder="Enter your occupation"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Family Details Section */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                                <span className="bg-pink-100 px-3 py-1 rounded-lg">Family Details</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Spouse&apos;s Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                        placeholder="Enter spouse's name"
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Spouse&apos;s Occupation</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                        placeholder="Enter spouse's occupation"
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Spouse&apos;s Contact</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                        placeholder="Enter spouse's contact"
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Number of Children</label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors"
                                        placeholder="Enter number of children"
                                        min="0"
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Family Income Level</label>
                                    <label className="block text-gray-700 font-medium" htmlFor="income-level">Family Income Level</label>
                                    <select id="income-level" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors">
                                        <option value="">Select income level</option>
                                        <option value="low">Below Rs30,000</option>
                                        <option value="medium">Rs 30,000 - Rs 60,000</option>
                                        <option value="medium">Rs 60,000 - Rs 100,000</option>
                                        <option value="medium">Rs 100,000 - Rs 150,000</option>
                                        <option value="high">Above Rs 150,000</option>
                                    </select>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center mt-8"
                        >
                            <button className="relative inline-block text-lg group">
                                <span className="relative z-10 block px-8 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-pink-400 rounded-lg group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-slate-50"></span>
                                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-pink-500 group-hover:-rotate-180 ease"></span>
                                    <span className="relative">Register Now</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-pink-400 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            </button>
                        </motion.div>
                    </form>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-[20%] left-[10%] text-xl hidden lg:block"
                    initial={{ scale: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    🌸
                </motion.div>
                <motion.div
                    className="absolute bottom-[30%] right-[10%] text-xl hidden lg:block"
                    initial={{ scale: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    ❤️
                </motion.div>
            </section>
        </>
    );
};

export default RegisterForm;