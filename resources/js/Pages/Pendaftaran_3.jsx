import DaftarLayout from "@/Layouts/DaftarLayout";
import React from "react";
// import { usePage } from "@inertiajs/inertia-react";

const Pendaftaran_3 = () => {
    // const { biodata } = usePage().props;

    return (
        <DaftarLayout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-jakarta">
                <h2 className="text-3xl font-bold text-center text-primary100 pt-8 font-jakarta">
                    Verifikasi Biodata
                </h2>
                <p className="text-md text-center text-primary500 mb-6 font-jakarta">
                    Pastikan data yang sudah anda input benar
                </p>
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-8">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-white font-bold">
                            1
                        </span>
                        <hr className="w-full border-t border-yellow-400 mx-4" />
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-white font-bold">
                            2
                        </span>
                        <hr className="w-full border-t border-yellow-400 mx-4" />
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-white font-bold">
                            3
                        </span>
                    </div>

                    <div className="mb-4">
                        <div className="text-gray-700 text-sm grid grid-cols-2 gap-x-4">
                            <div className="mb-2">
                                <strong>Nama:</strong>
                            </div>
                            <div className="mb-2">John Doe</div>

                            <div className="mb-2">
                                <strong>Mendaftarkan:</strong>
                            </div>
                            <div className="mb-2">Event X</div>

                            <div className="mb-2">
                                <strong>Asal Instansi:</strong>
                            </div>
                            <div className="mb-2">Universitas Y</div>

                            <div className="mb-2">
                                <strong>Tempat, Tanggal Lahir:</strong>
                            </div>
                            <div className="mb-2">Jakarta, 1 Januari 2000</div>

                            <div className="mb-2">
                                <strong>Nomor Handphone:</strong>
                            </div>
                            <div className="mb-2">081234567890</div>

                            <div className="mb-2">
                                <strong>Instagram:</strong>
                            </div>
                            <div className="mb-2">@username</div>

                            <div className="mb-2">
                                <strong>Email:</strong>
                            </div>
                            <div className="mb-2">email@example.com</div>

                            <div className="mb-2">
                                <strong>Formulir Pendaftaran:</strong>
                            </div>
                            <div className="mb-2">
                                <a
                                    href="/path/to/form.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    form.pdf
                                </a>
                            </div>

                            <div className="mb-2">
                                <strong>Bukti Pembayaran:</strong>
                            </div>
                            <div className="mb-2">
                                <a
                                    href="/path/to/payment.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    payment.pdf
                                </a>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 focus:outline-none">
                        Submit
                    </button>
                </div>
            </div>
        </DaftarLayout>
    );
};

export default Pendaftaran_3;
