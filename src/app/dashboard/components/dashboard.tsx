'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, Heart, Clock, Smile } from 'lucide-react';
import Link from 'next/link';

export default function CourseDashboard() {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const titles = [
        "Track Your Pregnancy Journey",
        "Support for Mothers and Families",
        "Nurturing Your Baby's Development"
    ];

    const metrics = {
        weeksPregnant: 30,
        daysUntilDueDate: 60,
        nextAppointment: 14,
        moodTracker: 4 // Default mood level
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [titles.length]);

    const resources = [
        {
            id: 1,
            title: "Nutrition Tips for Expecting Mothers",
            type: "NUTRITION",
            image: "/one.jpg"
        },
        {
            id: 2,
            title: "Exercise Guidelines During Pregnancy",
            type: "EXERCISE",
            image: "/two.jpg"
        },
        {
            id: 3,
            title: "Mental Health Support for New Parents",
            type: "MENTAL HEALTH",
            image: "/three.webp"
        }
    ];

    const mentors = [
        {
            id: 1,
            name: "Dr. Samanthi Premerathnee",
            date: "15/02/2025",
            type: "OBSTETRICIAN",
            title: "Monthly Checkup and Ultrasound"
        },
        {
            id: 2,
            name: "Midwife Mrs. Priyanka Fernando",
            date: "18/02/2025",
            type: "NURSE",
            title: "Workshop"
        },
        {
            id: 3,
            name: "Counselor Mr. Kavindu Perera",
            date: "20/02/2025",
            type: "COUNSELOR",
            title: "Mental Health Workshop"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:px-40 pt-16 md:pt-24 lg:pt-32">
            {/* Banner Section */}
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>
                    Good Evening <span className="text-pink-600">Sandhavi</span>
                </h1>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-pink-300 to-fuchsia-200 p-4 md:p-8 text-white mb-8">
                <h1 className="text-2xl md:text-3xl text-gray-900 font-bold mb-4">{titles[currentTitleIndex]}</h1>
                <button className="bg-gray-950 text-white px-4 py-2 rounded-full flex items-center gap-2">
                    Chat Now
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8">
                <div className="bg-white p-4 rounded-xl flex items-center justify-between">
                    <Heart className="w-6 h-6 text-red-500" />
                    <div>
                        <p className="text-gray-500 text-sm">Weeks Pregnant</p>
                        <h3 className="font-semibold">{metrics.weeksPregnant}</h3>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center justify-between">
                    <Clock className="w-6 h-6 text-yellow-500" />
                    <div>
                        <p className="text-gray-500 text-sm">Days Until Due Date</p>
                        <h3 className="font-semibold">{metrics.daysUntilDueDate}</h3>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center justify-between">
                    <Calendar className="w-6 h-6 text-blue-500" />
                    <div>
                        <p className="text-gray-500 text-sm">Next Appointment</p>
                        <h3 className="font-semibold">{metrics.nextAppointment} days</h3>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center justify-between">
                    <Smile className="w-6 h-6 text-green-500" />
                    <div>
                        <p className="text-gray-500 text-sm">Mood Tracker</p>
                        <h3 className="font-semibold">{metrics.moodTracker} / 5</h3>
                    </div>
                </div>
            </div>

            {/* Resources Section */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Resources for Mothers</h2>
                    <div className="flex gap-2">
                        <button className="p-2 bg-white rounded-full shadow"><ChevronLeft className="w-4 h-4" /></button>
                        <button className="p-2 bg-white rounded-full shadow"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                        <div key={resource.id} className="bg-white rounded-xl overflow-hidden">
                            <Link href={`/resources/${resource.id}`}>
                                <Image
                                    src={resource.image}
                                    width={300}
                                    height={200}
                                    alt={resource.title}
                                    className="w-full object-cover"
                                />
                                <div className="p-4">
                                    <span className={`text-xs px-3 py-1 rounded-full ${resource.type === 'NUTRITION' ? 'bg-blue-100 text-blue-600' : resource.type === 'EXERCISE' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}>
                                        {resource.type}
                                    </span>
                                    <h3 className="font-semibold mt-2 mb-4">{resource.title}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mentor Section */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Upcoming Events</h2>
                    <button className="text-purple-600">See All</button>
                </div>

                <div className="bg-white rounded-xl p-4 overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-sm text-gray-500 border-b">
                                <th className="pb-4 text-left">Event</th>
                                <th className="pb-4 text-left">Event Type</th>
                                <th className="pb-4 text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mentors.map((mentor) => (
                                <tr key={mentor.id} className="border-b last:border-b-0">
                                    <td className="py-4">
                                        <div className="flex items-center gap-3">
                                            {/* You can add an image or avatar here if needed */}
                                            <div>
                                                <p className="font-semibold">{mentor.name}</p>
                                                <p className="text-sm text-gray-500">{mentor.date}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`text-xs px-3 py-1 rounded-full ${mentor.type === 'OBSTETRICIAN' ? 'bg-blue-100 text-blue600' : mentor.type === 'NURSE' ? 'bg-green-100 text-green600' : 'bg-purple-100 text-purple600'}`}>
                                            {mentor.type}
                                        </span>
                                    </td>
                                    <td>{mentor.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
