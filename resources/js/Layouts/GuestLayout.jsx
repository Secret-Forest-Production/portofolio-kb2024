import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div
            style={{
                backgroundImage: `url("https://www.transparenttextures.com/patterns/axiom-pattern.png")`,
            }}
            className="min-h-screen bg-primary300 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
           

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
