'use client';
import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import NavBar from '../dashboard/components/navbar';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register ALL necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const initialChartData = {
    weightGain: [
        { week: 12, weight: 55, recommended: 52 },
        { week: 20, weight: 62, recommended: 60 },
        { week: 28, weight: 70, recommended: 68 },
        { week: 36, weight: 78, recommended: 76 }
    ],
    bloodPressure: [
        { week: 12, systolic: 110, diastolic: 70 },
        { week: 20, systolic: 115, diastolic: 75 },
        { week: 28, systolic: 120, diastolic: 80 },
        { week: 36, systolic: 122, diastolic: 82 }
    ],
    fetalGrowth: [
        { week: 20, height: 16, recommended: 15 },
        { week: 28, height: 30, recommended: 28 },
        { week: 36, height: 40, recommended: 38 }
    ],
    kickCount: [
        { week: 28, morningKicks: 10, afternoonKicks: 8, eveningKicks: 12 },
        { week: 32, morningKicks: 12, afternoonKicks: 10, eveningKicks: 14 },
        { week: 36, morningKicks: 15, afternoonKicks: 12, eveningKicks: 16 }
    ],
    bloodSugar: [
        { week: 24, fastingLevel: 95, postMealLevel: 120 },
        { week: 28, fastingLevel: 92, postMealLevel: 125 },
        { week: 32, fastingLevel: 90, postMealLevel: 130 }
    ],
    hemoglobin: [
        { week: 16, level: 12.5 },
        { week: 24, level: 11.8 },
        { week: 32, level: 11.2 },
        { week: 36, level: 10.9 }
    ]
};

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

export default function MaternalHealthTracking() {
    const [activeTab, setActiveTab] = useState('charts');
    const [chartData] = useState(initialChartData);
    const [formData, setFormData] = useState({
        weight: '',
        systolic: '',
        diastolic: '',
        morningKicks: '',
        afternoonKicks: '',
        eveningKicks: '',
        fastingBloodSugar: '',
        postMealBloodSugar: '',
        scanType: '',
        scanDate: ''
    });

    interface ChartDataEntry {
        week: number;
        [key: string]: number | undefined;
    }

    interface ChartData {
        labels: string[];
        datasets: {
            label: string;
            data: (number | null)[];
            backgroundColor: string;
        }[];
    }

    const createChartData = (data: ChartDataEntry[], dataKey: string, recommended: boolean = false): ChartData => {
        return {
            labels: data.map(entry => `Week ${entry.week}`),
            datasets: [
                {
                    label: 'Actual',
                    data: data.map(entry => entry[dataKey] as number),
                    backgroundColor: 'rgba(255,99,132,0.6)',
                },
                ...(recommended ? [{
                    label: 'Recommended',
                    data: data.map(entry => entry.recommended || null),
                    backgroundColor: 'rgba(54,162,235,0.6)',
                }] : [])
            ]
        };
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' as const },
            title: { display: true, text: 'Maternal Health Tracking' }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData((prev: FormData) => ({
            ...prev,
            [name]: value
        }));
    };

    interface FormData {
        weight: string;
        systolic: string;
        diastolic: string;
        morningKicks: string;
        afternoonKicks: string;
        eveningKicks: string;
        fastingBloodSugar: string;
        postMealBloodSugar: string;
        scanType: string;
        scanDate: string;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Health records updated successfully!');
    };

    return (
        <>
            <NavBar />
            <section className='min-h-screen bg-slate-50 text-gray-900 py-28 pt-24'>
                <div className='max-w-5xl mx-auto px-4'>
                    <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
                        Maternal Health Tracking
                    </h1>
                    <div className='flex justify-center mb-10 space-x-4'>
                        <TabButton
                            tab="charts"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            label="Health Charts"
                        />
                        <TabButton
                            tab="update"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            label="Update Details"
                        />
                    </div>

                    {activeTab === 'charts' && (
                        <div className='bg-white py-20 px-10 rounded-2xl shadow-lg border border-pink-100'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div className='h-72'>
                                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>Weight Gain</h3>
                                    <Bar
                                        data={createChartData(chartData.weightGain, 'weight', true)}
                                        options={chartOptions}
                                    />
                                </div>
                                <div className='h-72'>
                                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>Blood Pressure</h3>
                                    <Bar
                                        data={createChartData(chartData.bloodPressure, 'systolic', true)}
                                        options={chartOptions}
                                    />
                                </div>
                                <div className='h-72'>
                                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>Fetal Growth</h3>
                                    <Bar
                                        data={createChartData(chartData.fetalGrowth, 'height', true)}
                                        options={chartOptions}
                                    />
                                </div>
                                <div className='h-72'>
                                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>Hemoglobin Levels</h3>
                                    <Line
                                        data={createChartData(chartData.hemoglobin, 'level')}
                                        options={chartOptions}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'update' && (
                        <div className='bg-white p-8 rounded-2xl shadow-lg border border-pink-100'>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block mb-2 text-gray-700'>Current Weight (kg)</label>
                                        <input
                                            type='number'
                                            name='weight'
                                            value={formData.weight}
                                            onChange={handleInputChange}
                                            className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                            placeholder='Enter current weight'
                                            min='0'
                                            step='0.1'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block mb-2 text-gray-700'>Blood Pressure (mmHg)</label>
                                        <div className='flex space-x-2'>
                                            <input
                                                type='number'
                                                name='systolic'
                                                value={formData.systolic}
                                                onChange={handleInputChange}
                                                className='w-1/2 p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                                placeholder='Systolic'
                                                min='0'
                                                required
                                            />
                                            <input
                                                type='number'
                                                name='diastolic'
                                                value={formData.diastolic}
                                                onChange={handleInputChange}
                                                className='w-1/2 p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                                placeholder='Diastolic'
                                                min='0'
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className='block mb-2 text-gray-700'>Kick Count</label>
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                        <input
                                            type='number'
                                            name='morningKicks'
                                            value={formData.morningKicks}
                                            onChange={handleInputChange}
                                            className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                            placeholder='Morning Kicks'
                                            min='0'
                                            required
                                        />
                                        <input
                                            type='number'
                                            name='afternoonKicks'
                                            value={formData.afternoonKicks}
                                            onChange={handleInputChange}
                                            className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                            placeholder='Afternoon Kicks'
                                            min='0'
                                            required
                                        />
                                        <input
                                            type='number'
                                            name='eveningKicks'
                                            value={formData.eveningKicks}
                                            onChange={handleInputChange}
                                            className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                            placeholder='Evening Kicks'
                                            min='0'
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='block mb-2 text-gray-700'>Blood Sugar Levels</label>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <input
                                            type='number'
                                            name='fastingBloodSugar'
                                            value={formData.fastingBloodSugar}
                                            onChange={handleInputChange}
                                            className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                            placeholder='Fasting Level'
                                            min='0'
                                            required
                                        />
                                        <input
                                            type='number'
                                            name='postMealBloodSugar'
                                            value={formData.postMealBloodSugar}
                                            onChange={handleInputChange}
                                            className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                            placeholder='Post-Meal Level'
                                            min='0'
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='block mb-2 text-gray-700'>Upcoming Ultrasound</label>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <select
                                            name='scanType'
                                            value={formData.scanType}
                                            onChange={handleInputChange}
                                            className='w-full p-3 border border-pink-200 rounded-xl text-gray-600 focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                            required
                                        >
                                            <option value="">Select Scan Type</option>
                                            <option value="growth">Growth Scan</option>
                                            <option value="anatomy">Anatomy Scan</option>
                                        </select>
                                        <input
                                            type='date'
                                            name='scanDate'
                                            value={formData.scanDate}
                                            onChange={handleInputChange}
                                            className='w-full p-3 border border-pink-200 rounded-xl text-gray-600 focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='w-full bg-pink-500 text-white p-3 rounded-xl hover:bg-pink-700 transition-colors duration-300'
                                >
                                    Update Health Records
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}