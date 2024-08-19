import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import FlashMessage from '@/Components/FlashMessage';
import ConfirmModal from '@/Components/ConfirmModal';

export default function Dashboard({ auth, pendaftaran, flash }) {
    const [deletingId, setDeletingId] = useState(null);
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        setDeletingId(id);
    };

    const confirmDelete = () => {
        if (deletingId) {
            destroy(route('destroy', deletingId));
            setDeletingId(null);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <main className="container py-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {pendaftaran.length > 0 ? (
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-gray-100 border-b border-gray-200">
                                <tr>
                                    <th className="border px-4 py-3 text-left font-medium text-gray-700">No</th>
                                    <th className="border px-4 py-3 text-left font-medium text-gray-700">Nama</th>
                                    <th className="border px-4 py-3 text-left font-medium text-gray-700">Instansi</th>
                                    <th className="border px-4 py-3 text-left font-medium text-gray-700">Lomba</th>
                                    <th className="border px-4 py-3 text-left font-medium text-gray-700">Bukti</th>
                                    <th className="border px-4 py-3 text-left font-medium text-gray-700">Telepon</th>
                                    <th className="border px-4 py-3 text-left font-medium text-gray-700">Instagram</th>
                                    <th className="border px-4 py-3 text-left font-medium text-gray-700">Email</th>
                                    <th className="border px-4 py-3 text-center font-medium text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendaftaran.map((item, i) => (
                                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="border px-4 py-3 text-gray-700">{i + 1}</td>
                                        <td className="border px-4 py-3 text-gray-700">{item.nama}</td>
                                        <td className="border px-4 py-3 text-gray-700">{item.instansi}</td>
                                        <td className="border px-4 py-3 text-gray-700">{item.lomba}</td>
                                        <td className="border px-4 py-3">
                                            <a
                                                href={item.bukti}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Bukti
                                            </a>
                                        </td>
                                        <td className="border px-4 py-3 text-gray-700">{item.telp}</td>
                                        <td className="border px-4 py-3 text-gray-700">{item.instagram}</td>
                                        <td className="border px-4 py-3 text-gray-700">{item.email}</td>
                                        <td className="border px-4 py-3 text-center">
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="text-white hover:bg-red-700 transition-colors px-2 py-1 rounded-md bg-red-600 font-semibold"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="text-center py-4 text-gray-700">Belum ada data</div>
                    )}
                </div>
            </main>

            <ConfirmModal
                isOpen={!!deletingId}
                onClose={() => setDeletingId(null)}
                onConfirm={confirmDelete}
                message="Apakah Anda yakin ingin menghapus data ini?"
            />
        </AuthenticatedLayout>
    );
}
