import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth, pendaftaran }) {
    const [deleting, setDeleting] = useState(null);
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this entry?')) {
            destroy(route('destroy', id));
        }
    };
    

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <main className='container py-10'>
                <div className='bg-white p-4 rounded shadow'>
                    {
                        pendaftaran.length > 0 ? (
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead className="bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th className="border px-4 py-2 text-left">No</th>
                                        <th className="border px-4 py-2 text-left">Nama</th>
                                        <th className="border px-4 py-2 text-left">Instansi</th>
                                        <th className="border px-4 py-2 text-left">Lomba</th>
                                        <th className="border px-4 py-2 text-left">Bukti</th>
                                        <th className="border px-4 py-2 text-left">Telepon</th>
                                        <th className="border px-4 py-2 text-left">Instagram</th>
                                        <th className="border px-4 py-2 text-left">Email</th>
                                        <th className="border px-4 py-2 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendaftaran.map((item, i) => (
                                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="border px-4 py-2">{i + 1}</td>
                                            <td className="border px-4 py-2">{item.nama}</td>
                                            <td className="border px-4 py-2">{item.instansi}</td>
                                            <td className="border px-4 py-2">{item.lomba}</td>
                                            <td className="border px-4 py-2">
                                                <a href={item.bukti} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                    Bukti
                                                </a>
                                            </td>
                                            <td className="border px-4 py-2">{item.telp}</td>
                                            <td className="border px-4 py-2">{item.instagram}</td>
                                            <td className="border px-4 py-2">{item.email}</td>
                                            <td className="border px-4 py-2 text-center">
                                                <button 
                                                    onClick={() => handleDelete(item.id)} 
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-center py-4">Belum ada data</div>
                        )
                    }
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
