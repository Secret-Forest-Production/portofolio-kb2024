import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg shadow-xl">
                <h2 className="text-xl font-bold mb-4">Konfirmasi</h2>
                <p className="mb-4">{message}</p>
                <div className="flex justify-end">
                    <button 
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2" 
                        onClick={onClose}
                    >
                        Batal
                    </button>
                    <button 
                        className="px-4 py-2 bg-red-500 text-white rounded" 
                        onClick={onConfirm}
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;