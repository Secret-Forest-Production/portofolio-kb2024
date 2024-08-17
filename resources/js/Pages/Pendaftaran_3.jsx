import React from "react";
import { usePage } from "@inertiajs/inertia-react";

const Step3 = () => {
    const { biodata } = usePage().props;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-teal-600 mb-6">
                    Verifikasi Biodata
                </h2>

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
                    <div className="text-gray-700 text-sm">
                        <div className="mb-2">
                            <strong>Nama:</strong> {biodata.name}
                        </div>
                        <div className="mb-2">
                            <strong>Mendaftarkan:</strong>{" "}
                            {biodata.registration}
                        </div>
                        <div className="mb-2">
                            <strong>Asal Instansi:</strong>{" "}
                            {biodata.institution}
                        </div>
                        <div className="mb-2">
                            <strong>Tempat, Tanggal Lahir:</strong>{" "}
                            {biodata.birthdate}
                        </div>
                        <div className="mb-2">
                            <strong>Nomor Handphone:</strong> {biodata.phone}
                        </div>
                        <div className="mb-2">
                            <strong>Instagram:</strong> {biodata.instagram}
                        </div>
                        <div className="mb-2">
                            <strong>Email:</strong> {biodata.email}
                        </div>
                        <div className="mb-2">
                            <strong>Formulir Pendaftaran:</strong>{" "}
                            <a
                                href={`/storage/${biodata.form_file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {biodata.form_file}
                            </a>
                        </div>
                        <div className="mb-2">
                            <strong>Bukti Pembayaran:</strong>{" "}
                            <a
                                href={`/storage/${biodata.payment_file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {biodata.payment_file}
                            </a>
                        </div>
                    </div>
                </div>

                <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 focus:outline-none">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Step3;
