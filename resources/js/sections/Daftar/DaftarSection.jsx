import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Inertia } from "@inertiajs/inertia";
import { useNavigate } from "react-router-dom";
import { Progress } from "flowbite-react";

const DaftarSection = ({ jenisLomba }) => {
    const [formData, setFormData] = useState({
        nama: "",
        lomba: jenisLomba,
        instansi: "",
        telepon: "",
        instagram: "",
        email: "",
        bukti: "",
    });

    const navigate = useNavigate();

    const handleNext = () => {
        localStorage.setItem("formData", JSON.stringify(formData));

        navigate("/pendaftaran/step2");
    };

    return (
        <section className="my-0 md:mb-24">
            <h2 className="text-3xl font-bold text-center text-primary100 pt-32 font-jakarta">
                Data Pribadi
            </h2>
            <p className="text-md text-center text-primary500 mb-6 font-jakarta">
                Harap isi formulir ini dengan benar
            </p>
            <div className="flex flex-col items-center justify-center relative">
                <div className="w-full max-w-xl p-12 bg-white rounded-3xl shadow-custom-shadow">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <div className="bg-secondary500 text-white p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                1
                            </div>
                        </div>
                        <div className="w-1/4 px-3">
                            <Progress progress={50} size="md" color="yellow" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#EFF0F6] text-[#6F6C90] p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                2
                            </div>
                        </div>
                        <div className="w-1/4 px-3">
                            <Progress progress={0} size="md" color="gray" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#EFF0F6] text-[#6F6C90] p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                3
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-yellow-500 w-full my-8" />
                    <form>
                        <div className="mb-4">
                            <label
                                className=" text-gray-700 text-sm font-bold font-jakarta mb-2"
                                htmlFor="nama"
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                value={formData.nama}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        nama: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="lomba"
                            >
                                Lomba
                            </label>
                            <input
                                type="text"
                                id="lomba"
                                name="lomba"
                                className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                value={formData.lomba}
                                disabled
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="instansi"
                            >
                                Asal Instansi
                            </label>
                            <input
                                type="text"
                                id="instansi"
                                name="instansi"
                                className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                value={formData.instansi}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        instansi: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="telepon"
                                >
                                    Nomor Handphone
                                </label>
                                <input
                                    type="text"
                                    id="telepon"
                                    name="telepon"
                                    className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.telepon}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            telepon: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="bukti"
                                >
                                    Bukti (Link Drive)
                                </label>
                                <input
                                    type="text"
                                    id="bukti"
                                    name="bukti"
                                    className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.bukti}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            bukti: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="instagram"
                                >
                                    Instagram
                                </label>
                                <input
                                    type="text"
                                    id="instagram"
                                    name="instagram"
                                    className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.instagram}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            instagram: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="w-1/2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={handleNext}
                            className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 bg-teal-600 text-white px-8 py-3 rounded-[3.5rem] hover:bg-teal-700 text-center font-jakarta"
                        >
                            Selanjutnya
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DaftarSection;
