'use client';
import { useState } from 'react';
import { Edit, Trash2, Upload } from 'lucide-react';
import NavBar from '../dashboard/components/navbar';

const uploadedDocuments = [
    {
        id: 1,
        fileName: 'Medical_History.pdf',
        submittedDate: '2025-01-15',
        title: 'First Trimester Medical History',
        description: 'Comprehensive medical history from first trimester checkup',
        sharedWithDoctor: true
    },
    {
        id: 2,
        fileName: 'Ultrasound_Report.jpg',
        submittedDate: '2025-02-01',
        title: 'Ultrasound Scan Report',
        description: 'Detailed ultrasound report from 20-week scan',
        sharedWithDoctor: false
    }
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

export default function DocumentManagementPage() {
    const [activeTab, setActiveTab] = useState('uploaded');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
        target: HTMLInputElement & { files: FileList };
    }

    const handleFileChange = (e: FileChangeEvent): void => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <>
        <NavBar />
            <section className='min-h-screen bg-slate-50 text-gray-900 py-16 pt-24'>
                <div className='max-w-5xl mx-auto px-4'>
                    <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
                        Maternal Care Document Management
                    </h1>

                    <div className='flex justify-center mb-10 space-x-4'>
                        <TabButton
                            tab="uploaded"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            label="Uploaded Documents"
                        />
                        <TabButton
                            tab="upload"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            label="Upload Document"
                        />
                    </div>

                    {activeTab === 'uploaded' && (
                        <div className='bg-white p-6 rounded-2xl shadow-lg border border-pink-100'>
                            <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
                                Your Uploaded Documents
                            </h2>
                            <div className='overflow-x-auto'>
                                <table className='w-full'>
                                    <thead>
                                        <tr className='bg-pink-100 text-gray-800'>
                                            {['File Name', 'Submitted Date', 'Title', 'Description', 'Share with Doctor', 'Actions'].map(header => (
                                                <th key={header} className='p-3 text-left'>{header}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {uploadedDocuments.map(doc => (
                                            <tr key={doc.id} className='border-b border-pink-100'>
                                                <td className='p-3 text-gray-700'>{doc.fileName}</td>
                                                <td className='p-3 text-gray-700'>{doc.submittedDate}</td>
                                                <td className='p-3 text-gray-700'>{doc.title}</td>
                                                <td className='p-3 text-gray-700'>{doc.description}</td>
                                                <td className='p-3'>
                                                    <input
                                                        type='checkbox'
                                                        checked={doc.sharedWithDoctor}
                                                        className='form-checkbox h-5 w-5 text-pink-600'
                                                    />
                                                </td>
                                                <td className='p-3'>
                                                    <div className='flex space-x-3'>
                                                        <button
                                                            className='text-gray-600 hover:text-gray-800'
                                                            aria-label='Edit document'
                                                        >
                                                            <Edit size={18} />
                                                        </button>
                                                        <button
                                                            className='text-gray-600 hover:text-gray-800'
                                                            aria-label='Delete document'
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'upload' && (
                        <div className='bg-white p-8 rounded-2xl shadow-lg border border-pink-100'>
                            <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
                                Upload New Document
                            </h2>
                            <form className='space-y-5'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <input
                                        type='text'
                                        placeholder='Document Title'
                                        className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                    />
                                    <div className='relative'>
                                        <input
                                            type='file'
                                            id='fileUpload'
                                            onChange={handleFileChange}
                                            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                                        />
                                        <label
                                            htmlFor='fileUpload'
                                            className='w-full p-3 border border-pink-200 rounded-xl flex items-center justify-between'
                                        >
                                            <span>{selectedFile ? selectedFile.name : 'Choose File'}</span>
                                            <Upload size={20} className='text-gray-600' />
                                        </label>
                                    </div>
                                </div>

                                <textarea
                                    placeholder='Document Description'
                                    rows={4}
                                    className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                ></textarea>

                                <textarea
                                    placeholder='Additional Remarks'
                                    rows={3}
                                    className='w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:outline-none'
                                ></textarea>

                                <div className='flex items-center space-x-3'>
                                    <input
                                        type='checkbox'
                                        id='shareWithDoctor'
                                        className='form-checkbox h-5 w-5 text-pink-600'
                                    />
                                    <label htmlFor='shareWithDoctor' className='text-gray-700'>
                                        Share this document with my doctor
                                    </label>
                                </div>

                                <button
                                    type='submit'
                                    className='w-full bg-pink-500 text-white p-3 rounded-xl hover:bg-pink-700 transition-colors duration-300'
                                >
                                    Upload Document
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </>

    );
}