import React, { useEffect, useState } from "react";
import DaftarLayout from "@/Layouts/DaftarLayout";
import { Progress } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Pendaftaran_3 = () => {
    const [biodata, setBiodata] = useState({
        nama: "",
        lomba: "",
        instansi: "",
        telepon: "",
        instagram: "",
        email: "",
        bukti: "",
        kategori: "",
    });

    useEffect(() => {
        const storedData = localStorage.getItem("formData");
        if (storedData) {
            setBiodata(JSON.parse(storedData));
        }
    }, []);
    
    const navigate = useNavigate();

    const handleSubmit = () => {
        alert("Terima kasih telah mendaftar. Data Anda telah tersimpan.");
        navigate(`/pendaftaran`);
    };

    return (
        <>
            <DaftarLayout>
                <h2 className="text-3xl font-bold text-center text-primary100 pt-32 font-jakarta">
                    Verifikasi Biodata
                </h2>
                <p className="text-md text-center text-primary500 font-jakarta">
                    Pastikan data yang sudah anda input benar
                </p>
                <div className="flex flex-col items-center justify-center font-jakarta mb-48">
                    <form onClick={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-3xl shadow-custom-shadow">
                        <div className="flex items-center justify-center mb-5">
                            <div className="flex flex-col items-center">
                                <div className="bg-secondary500 text-white p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                    1
                                </div>
                            </div>
                            <div className="w-1/4 px-3">
                                <Progress
                                    progress={100}
                                    size="md"
                                    color="yellow"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-secondary500 text-white p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                    2
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-yellow-500 w-full my-8" />
                        <div className="mb-4">
                            <div className="text-gray-700 text-sm">
                                {[
                                    { label: "Nama", value: biodata.nama },
                                    {
                                        label: "Mendaftarkan",
                                        value: biodata.lomba,
                                    },
                                    {
                                        label: "Kategori",
                                        value: biodata.kategori,
                                    },
                                    {
                                        label: "Asal Instansi",
                                        value: biodata.instansi,
                                    },
                                    {
                                        label: "Nomor Handphone",
                                        value: biodata.telepon,
                                    },
                                    {
                                        label: "Instagram",
                                        value: biodata.instagram,
                                    },
                                    { label: "Email", value: biodata.email },
                                    {
                                        label: "Formulir Pendaftaran",
                                        value: (
                                            <a
                                                href={biodata.bukti}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-600"
                                            >
                                                {biodata.bukti}
                                            </a>
                                        ),
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="mb-2 flex">
                                        <strong className="w-1/3 text-primary100">
                                            {item.label}
                                        </strong>
                                        <span className="mx-2">:</span>
                                        <span className="w-2/3 text-gray font-semibold">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="absolute bottom-[-52px] lg:bottom-12 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-8 py-3 rounded-[3.5rem] hover:bg-teal-700 text-center font-jakarta"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </DaftarLayout>
        </>
    );
};

export default Pendaftaran_3;
