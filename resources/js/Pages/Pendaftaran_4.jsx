import React, { useEffect, useState } from "react";
import DaftarLayout from "@/Layouts/DaftarLayout";
import { Progress } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "@inertiajs/inertia-react";

const Pendaftaran_4 = () => {
    const [biodata, setBiodata] = useState({ lomba: "Videografi" });

    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        lomba: "",
        instansi: "",
        telp: "",
        instagram: "",
        email: "",
        bukti: "",
        kategori: "",
    });
    const url = useLocation().pathname.replace("/pendaftaran/step3/", "");
    useEffect(() => {
        const storedData = localStorage.getItem("formData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setBiodata(parsedData);
            setData(parsedData);
        } else {
            // window.location = `/pendaftaran/step1/${url}`;
        }
    }, []);

    const navigate = useNavigate();

    // Mapping link grup berdasarkan lomba
    const lombaLinks = {
        Videografi: "https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxxx",
        "Persembahan Moda Tradisional":
            "https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxxx",
        "Busana Kreasi": "https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxxx",
        "Tari Tradisional": "https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxxx",
        "Bazar Kebudayaan": "https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxxx",
        "Cerita Nusantara": "https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxxx",
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        navigate(`/pendaftaran`);
    };

    return (
        <>
            <DaftarLayout>
                <h2 className="text-3xl font-bold text-center text-primary100 pt-32 font-jakarta">
                    Pendaftaran Selesai
                </h2>
                <p className="text-md text-center text-primary500 font-jakarta">
                    Terima kasih telah mendaftar. Silahkan bergabung pada grup
                    yang tersedia
                </p>
                <div className="flex flex-col items-center justify-center font-jakarta mb-48">
                    <form className="w-full max-w-md p-8 bg-white rounded-3xl shadow-custom-shadow">
                        <div className="flex items-center justify-center mb-5">
                            <div className="flex flex-col items-center">
                                <div className="bg-secondary500 text-white p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                    1
                                </div>
                            </div>
                            <div className="w-1/4 px-3">
                                <Progress
                                    progress={100}
                                    size="sm"
                                    color="yellow"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-secondary500 text-white p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                    2
                                </div>
                            </div>
                            <div className="w-1/4 px-3">
                                <Progress
                                    progress={100}
                                    size="sm"
                                    color="yellow"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-secondary500 text-white p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                    3
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-yellow-500 w-full my-3" />
                        <div className="mb-4">
                            <div className="text-gray-700 text-sm rounded-lg p-4 flex flex-col items-center">
                                {biodata.lomba && lombaLinks[biodata.lomba] && (
                                    <>
                                        <strong className="text-primary500 text-center">
                                            Link Grup {biodata.lomba}
                                        </strong>
                                        <span className="block w-full text-center mt-2">
                                            <a
                                                href={lombaLinks[biodata.lomba]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary100 underline break-words"
                                                style={{
                                                    wordBreak: "break-word",
                                                    overflowWrap: "break-word",
                                                }}
                                            >
                                                {lombaLinks[biodata.lomba]}
                                            </a>
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-center">
                            <a
                                className="bg-teal-600 text-white px-8 py-3 rounded-[3.5rem] hover:bg-teal-700 text-center font-jakarta"
                                href="/"
                            >
                                Sumbit
                            </a>
                        </div>
                    </form>
                </div>
            </DaftarLayout>
        </>
    );
};

export default Pendaftaran_4;