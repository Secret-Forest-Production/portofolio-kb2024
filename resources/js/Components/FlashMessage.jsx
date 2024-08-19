import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';

const FlashMessage = ({flash}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (flash&&flash.message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [flash.message]);

    if (!visible || !flash.message) return null;

    return (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            {flash&&flash.message}
        </div>
    );
};

export default FlashMessage;