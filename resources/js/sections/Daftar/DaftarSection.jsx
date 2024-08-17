import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
const DaftarSection = () => {
    const [formData, setFormData] = useState({
        nama: "",
        kategori: "",
        asalInstansi: "",
        tempatTanggalLahir: "",
        nomorHandphone: "",
        instagram: "",
        email: "",
    });

    return (
        <section className="my-0 md:mb-24">
            <h2 className="text-3xl font-bold text-center text-primary100 pt-32 font-jakarta">
                Data Pribadi
            </h2>
            <p className="text-md text-center text-primary500 mb-6 font-jakarta">
                Harap isi formulir ini dengan benar
            </p>
            <div className="flex flex-col items-center justify-center relative">
                <div className="w-full max-w-xl p-8 bg-white rounded-3xl shadow-custom-shadow">
                <ProgressBar striped variant="warning" now={60} />
                    <div className="border-b border-yellow-500 py-4 w-full flex justify-center items-center mb-4"></div>
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
                                htmlFor="kategori"
                            >
                                Kategori
                            </label>
                            <select
                                id="kategori"
                                name="kategori"
                                className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                value={formData.kategori}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        kategori: e.target.value,
                                    })
                                }
                            >
                                <option value="">Pilih Kategori</option>
                                <option value="kategori1">Kategori 1</option>
                                <option value="kategori2">Kategori 2</option>
                                <option value="kategori3">Kategori 3</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="asalInstansi"
                            >
                                Asal Instansi
                            </label>
                            <input
                                type="text"
                                id="asalInstansi"
                                name="asalInstansi"
                                className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                value={formData.asalInstansi}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        asalInstansi: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="tempatTanggalLahir"
                                >
                                    Tempat, Tanggal Lahir
                                </label>
                                <input
                                    type="date"
                                    id="tempatTanggalLahir"
                                    name="tempatTanggalLahir"
                                    className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.tempatTanggalLahir}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            tempatTanggalLahir: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="w-1/2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="nomorHandphone"
                                >
                                    Nomor Handphone
                                </label>
                                <input
                                    type="text"
                                    id="nomorHandphone"
                                    name="nomorHandphone"
                                    className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                    value={formData.nomorHandphone}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            nomorHandphone: e.target.value,
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
                    </form>
                </div>
                <button className="absolute bottom-[-4rem] bg-teal-600 text-white px-8 py-3 rounded-[3.5rem] hover:bg-teal-700 text-center font-jakarta">
                    Selanjutnya
                </button>
            </div>
        </section>
    );
};

export default DaftarSection;
