'use client';
import NavBar from '../dashboard/components/navbar';
import { useState } from 'react';
import {  Edit, Trash2 } from 'lucide-react';


const appointments = [
    { id: 1, reason: 'Routine prenatal checkup to monitor fetal growth and maternal health.', weeks: 36, type: 'Prenatal Checkup', hospital: 'Colombo General Hospital', doctor: 'Dr. Amarasekara', date: '2025-02-10', time: '9:30 AM' },
    { id: 2, reason: 'Ultrasound to check baby’s position and development.', weeks: 37, type: 'Ultrasound Scan', hospital: 'Kandy Maternity Hospital', doctor: 'Dr. Herath', date: '2025-02-14', time: '11:00 AM' },
    { id: 3, reason: 'Consultation to manage gestational diabetes.', weeks: 38, type: 'Glucose Tolerance Test', hospital: 'Negombo Mother Care Center', doctor: 'Dr. Jayasinghe', date: '2025-02-20', time: '8:00 AM' },
    { id: 4, reason: 'Iron and calcium level check for third trimester.', weeks: 39, type: 'Routine Blood Test', hospital: 'Matara District Hospital', doctor: 'Dr. Bandara', date: '2025-02-25', time: '10:30 AM' },
    { id: 5, reason: 'Nutrition consultation to improve maternal diet.', weeks: 40, type: 'Nutrition Consultation', hospital: 'Galle Women’s Clinic', doctor: 'Dr. Wijesinghe', date: '2025-03-05', time: '3:00 PM' }
];

const pastAppointments = [
    { id: 6, reason: 'Initial prenatal checkup to confirm pregnancy and assess health risks.', weeks: 12, type: 'First Trimester Checkup', hospital: 'Colombo General Hospital', doctor: 'Dr. Amarasekara', date: '2024-08-26', time: '2:00 PM' },
    { id: 7, reason: 'Ultrasound to confirm twin pregnancy and fetal development.', weeks: 18, type: 'Ultrasound Scan', hospital: 'Kurunegala Maternity Home', doctor: 'Dr. Ekanayake', date: '2024-10-07', time: '11:45 AM' },
    { id: 8, reason: 'Glucose tolerance test to check for gestational diabetes.', weeks: 22, type: 'Glucose Tolerance Test', hospital: 'Ratnapura Teaching Hospital', doctor: 'Dr. Wickramaarachchi', date: '2024-11-04', time: '9:00 AM' },
    { id: 9, reason: 'Routine blood work to check hemoglobin and vitamin levels.', weeks: 25, type: 'Routine Blood Test', hospital: 'Anuradhapura Women’s Hospital', doctor: 'Dr. Dissanayake', date: '2024-11-25', time: '1:30 PM' },
    { id: 10, reason: 'Prenatal checkup for high-risk pregnancy monitoring.', weeks: 30, type: 'Prenatal Checkup', hospital: 'Badulla Maternity Care Unit', doctor: 'Dr. Liyanage', date: '2025-01-02', time: '10:00 AM' }
];



const TabButton = ({ tab, activeTab, setActiveTab, label }: { tab: string; activeTab: string; setActiveTab: (tab: string) => void; label: string }) => (
    <button
        onClick={() => setActiveTab(tab)}
        className={`px-6 py-2 rounded-full text-lg transition-all duration-300 ${activeTab === tab
            ? 'bg-pink-500 text-white shadow-md'
            : 'bg-pink-100 text-gray-700 hover:bg-pink-200'
            }`}
    >
        {label}
    </button>
);

const AppointmentTable = ({ data, headers, showActions }: { data: { [key: string]:string }[]; headers: string[]; showActions: boolean }) => (
    <div className='overflow-x-auto'>
        <table className='w-full'>
            <thead>
                <tr className='bg-pink-100 text-gray-800'>
                    {headers.map(header => (
                        <th key={header} className='p-3 text-left'>{header}</th>
                    ))}
                    {showActions && <th className='p-3 text-left'>Actions</th>}
                </tr>
            </thead>
            <tbody>
                {data.map(app => (
                    <tr key={app.id} className='border-b border-pink-100'>
                        {Object.values(app).slice(1).map((value, index) => (
                            <td key={index} className='p-3 text-gray-700'>{value as React.ReactNode}</td>
                        ))}
                        {showActions && (
                            <td className='p-3'>
                                <div className='flex space-x-3'>
                                    <button className='text-gray-600 hover:text-gray-800' aria-label='Edit appointment'>
                                        <Edit size={18} />
                                    </button>
                                    <button className='text-gray-600 hover:text-gray-800' aria-label='Delete appointment'>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default function AppointmentPage() {
    const [activeTab, setActiveTab] = useState('schedule');

    return (
        <>
            <NavBar />
            <section className='min-h-screen bg-slate-50 text-gray-900 py-16 pt-28'>
                <div className='max-w-5xl mx-auto px-4'>
                    <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Manage Your Maternal Care Appointments</h1>

                    <div className='flex justify-center mb-10 space-x-4'>
                        <TabButton tab="schedule" activeTab={activeTab} setActiveTab={setActiveTab} label="Schedule Appointment" />
                        <TabButton tab="scheduled" activeTab={activeTab} setActiveTab={setActiveTab} label="Scheduled Appointments" />
                        <TabButton tab="past" activeTab={activeTab} setActiveTab={setActiveTab} label="Past Appointments" />
                    </div>

                    {activeTab === 'schedule' && (
                        <div className='bg-white p-8 rounded-2xl shadow-lg border border-pink-100'>
                            <h2 className='text-2xl font-semibold mb-6 text-gray-800'>Schedule a New Appointment</h2>
                            <form className='space-y-5'>
                                {/* Row 1 - Type of Appointment and Hospital */}
                                <div className='grid grid-cols-2 gap-4'>
                                    <select className='w-full p-3 border border-pink-200 rounded-xl text-gray-600 focus:ring-2 focus:ring-pink-300 focus:outline-none'>
                                        <option>Type of Appointment</option>
                                        <option>Prenatal Checkup</option>
                                        <option>Ultrasound</option>
                                        <option>Nutrition Consultation</option>
                                        <option>Glucose Tolerance Test</option>
                                        <option>Doctor Visit</option>
                                    </select>
                                    <select className='w-full p-3 border border-pink-200 rounded-xl text-gray-600 focus:ring-2 focus:ring-pink-300 focus:outline-none'>
                                        <option>Select Hospital</option>
                                        <option>Maternal Care Center</option>
                                        <option>Women Health Clinic</option>
                                        <option>General Hospital</option>
                                        <option>Negombo Mother Care Center</option>
                                        <option>Kandy Maternity Hospital</option>
                                    </select>
                                </div>

                                <textarea placeholder='Reason for the Appointment' rows={4} className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'></textarea>

                                <div className='grid grid-cols-3 gap-4'>
                                    <input type='date' className='w-full p-3 border border-pink-200 rounded-xl text-gray-600 focus:ring=2 focus:ring-pink=300 focus:outline-none' />
                                    <input type='time' className='w-full p=3 border border=pink200 rounded-xl text=gray600 focus:ring=2 focus:ring=pink300 focus:outline-none' />
                                    <input type='number' placeholder='Weeks' className='w-full p=3 border border=pink200 rounded-xl focus:ring=2 focus:ring=pink300 focus:outline-none' />
                                </div>

                                <button type='submit' className='w-full bg-pink500 bg-pink-500  text-white p-3 rounded-xl hover:bg-pink700 transition-colors duration=300'>
                                    Book Appointment
                                </button>
                            </form>
                        </div>
                    )}

                    {activeTab === 'past' && (
                        <div className='bg-transparent p-6 rounded-2xl shadow-lg '>
                            <h2 className='text=2xl font-semibold mb-6 text-gray800 text-center items-center text-xl'>Past Appointments</h2>
                            <AppointmentTable data={pastAppointments.map(app => ({ ...app, id: app.id.toString(), weeks: app.weeks.toString() }))} headers={['Name', 'Weeks', 'Type', 'Hospital', 'Doctor', 'Date', 'Time']} showActions={false} />
                        </div>
                    )}

                    {activeTab === 'scheduled' && (
                        <div className='bg-transparent p=6 rounded=2xl shadow-lg '>
                            <h2 className='text=2xl font-semibold mb-6 text-gray800 text-center items-center text-xl'>Your Upcoming Appointments</h2>
                            <AppointmentTable data={appointments.map(app => ({ ...app, id: app.id.toString(), weeks: app.weeks.toString() }))} headers={['Name', 'Weeks', 'Type', 'Hospital', 'Doctor', 'Date', 'Time']} showActions />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
