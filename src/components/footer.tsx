import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bottom-0 w-full border-t">
            <div className="bottom text-pink-800 py-4 text-center">
                <p className='font-des'>© {new Date().getFullYear()} CodeMaven - Made with ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;
