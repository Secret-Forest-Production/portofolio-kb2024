import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Inertia } from "@inertiajs/inertia";
import { useNavigate } from "react-router-dom";
import { Progress } from "flowbite-react";

const DaftarSection = ({ jenisLomba }) => {
    const [formData, setFormData] = useState({
        nama: "",
        lomba: jenisLomba,
        instansi: "",
        telp: "",
        instagram: "",
        email: "",
        bukti: "",
        kategori: "",
    });

    const navigate = useNavigate();

    const handleNext = (event) => {
        // event.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate(`/pendaftaran/step2/${jenisLomba}`);
    };

    useEffect(() => {
        if (jenisLomba === "Videografi") {
            setFormData((prevData) => ({
                ...prevData,
                kategori: "Mahasiswa Nasional",
            }));
        }
        if (
            jenisLomba === "Persembahan Moda Tradisional" ||
            jenisLomba === "Busana Kreasi" ||
            jenisLomba === "Tari Tradisional" ||
            jenisLomba === "Bazar Kebudayaan"
        ) {
            setFormData((prevData) => ({
                ...prevData,
                kategori: "Forum Daerah",
            }));
        }
        if (jenisLomba === "Cerita Nusantara" || jenisLomba === "") {
            setFormData((prevData) => ({
                ...prevData,
                kategori: "SMA/Sederajat",
            }));
        }
    }, [jenisLomba]);
    // console.log(formData);
    return (
        <section className="my-0 md:mb-24">
            <h2 className="text-3xl font-bold text-center text-primary100 pt-24 font-jakarta">
                Data Pribadi
            </h2>
            <p className="text-md text-center text-primary500 mb-2 font-jakarta">
                Harap isi formulir ini dengan benar
            </p>
            <div className="flex flex-col items-center justify-center relative">
                <div className="w-full max-w-2xl p-12 bg-white rounded-3xl shadow-custom-shadow">
                    <div className="flex items-center justify-center gap-x-0">
                        <div className="flex flex-col items-center">
                            <div className="bg-secondary500 text-white p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                1
                            </div>
                        </div>
                        <div className="w-1/4 px-3">
                            <Progress progress={50} size="sm" color="yellow" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#EFF0F6] text-[#6F6C90] p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                2
                            </div>
                        </div>
                        <div className="w-1/4 px-3">
                            <Progress progress={0} size="sm" color="yellow" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#EFF0F6] text-[#6F6C90] p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                3
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-yellow-500 w-full my-8" />
                    <form onClick={handleNext}>
                        <div className="mb-4">
                            <label
                                className=" text-gray-700 text-sm font-bold  font-jakarta mb-2"
                                htmlFor="nama"
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
                                value={formData.nama}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        nama: e.target.value,
                                    })
                                }
                                required
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
                                className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
                                value={formData.lomba}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="kategori"
                            >
                                Kategori
                            </label>
                            <input
                                type="text"
                                id="kategori"
                                name="kategori"
                                className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
                                value={formData.kategori}
                                required
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
                                className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
                                value={formData.instansi}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        instansi: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="telp"
                                >
                                    Nomor Handphone
                                </label>
                                <input
                                    type="text"
                                    id="telp"
                                    name="telp"
                                    className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.telp}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            telp: e.target.value,
                                        })
                                    }
                                    required
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
                                    className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.bukti}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            bukti: e.target.value,
                                        })
                                    }
                                    required
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
                                    className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.instagram}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            instagram: e.target.value,
                                        })
                                    }
                                    required
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
                                    className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
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
