'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faShieldAlt, faHeadset, faRocket, faGlobe, faComments } from '@fortawesome/free-solid-svg-icons';

const Features: React.FC = () => {
    return (
        <main className="flex flex-col h-auto md:h-screen items-center justify-center font-sans" id="features">
            <div className="max-w-6xl mx-auto font-[sans-serif]">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-16">
                    Discover Our Exclusive
                    <span className="cell bg-pink-100 px-2 py-1 rounded-lg leading-relaxed">
                        Features
                    </span>
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 pl-12 pr-12">
                    {/* Feature 1 */}
                    <motion.div
                        className="text-center border border-rose-200 p-6 rounded-lg hover:shadow-md hover:shadow-rose-200 hover:scale-105 "
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FontAwesomeIcon icon={faCogs} className="text-rose-200 w-12 h-12 mb-6 inline-block" />
                        <h3 className="text-gray-800 text-xl font-semibold mb-3">Customization</h3>
                        <p className="text-gray-600 text-sm">Tailor our product to suit your needs.</p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        className="text-center border border-rose-200 p-6 rounded-lg hover:shadow-md hover:shadow-rose-200 hover:scale-105"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <FontAwesomeIcon icon={faShieldAlt} className="text-rose-200 w-12 h-12 mb-6 inline-block" />
                        <h3 className="text-gray-800 text-xl font-semibold mb-3">Security</h3>
                        <p className="text-gray-600 text-sm">Your data is protected by the latest security measures.</p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="text-center border border-rose-200 p-6 rounded-lg hover:shadow-md hover:shadow-rose-200 hover:scale-105"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FontAwesomeIcon icon={faHeadset} className="text-rose-200 w-12 h-12 mb-6 inline-block" />
                        <h3 className="text-gray-800 text-xl font-semibold mb-3">Support</h3>
                        <p className="text-gray-600 text-sm">24/7 customer support for all your inquiries.</p>
                    </motion.div>

                    {/* Feature 4 */}
                    <motion.div
                        className="text-center border border-rose-200 p-6 rounded-lg hover:shadow-md hover:shadow-rose-200 hover:scale-105"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <FontAwesomeIcon icon={faRocket} className="text-rose-200 w-12 h-12 mb-6 inline-block" />
                        <h3 className="text-gray-800 text-xl font-semibold mb-3">Performance</h3>
                        <p className="text-gray-600 text-sm">Experience blazing-fast performance with our product.</p>
                    </motion.div>

                    {/* Feature 5 */}
                    <motion.div
                        className="text-center border border-rose-200 p-6 rounded-lg hover:shadow-md hover:shadow-rose-200 hover:scale-105"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <FontAwesomeIcon icon={faGlobe} className="text-rose-200 w-12 h-12 mb-6 inline-block" />
                        <h3 className="text-gray-800 text-xl font-semibold mb-3">Global Reach</h3>
                        <p className="text-gray-600 text-sm">Expand your reach with our global network.</p>
                    </motion.div>

                    {/* Feature 6 */}
                    <motion.div
                        className="text-center border border-rose-200 p-6 rounded-lg hover:shadow-md hover:shadow-rose-200 hover:scale-105"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <FontAwesomeIcon icon={faComments} className="text-rose-200 w-12 h-12 mb-6 inline-block" />
                        <h3 className="text-gray-800 text-xl font-semibold mb-3">Communication</h3>
                        <p className="text-gray-600 text-sm">Seamless communication for your team.</p>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Features;