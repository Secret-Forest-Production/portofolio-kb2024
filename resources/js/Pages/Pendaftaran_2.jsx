import React, { useState } from "react";
import Bg from "../../assets/bg-pendaftaran.webp";

const Pendaftaran_2 = () => {
    const [progress, setProgress] = useState(0);
    const handleFileUpload = (e) => {
        const files = e.target.files;
        let newProgress = progress;

        if (files.length > 0) {
            if (e.target.name === "formulir") {
                newProgress = progress < 33 ? 33 : progress;
            }
            if (e.target.name === "bukti") {
                newProgress = progress < 66 ? 66 : 100;
            }
        }
        setProgress(newProgress);
    };
    return (
        <>
            <section
                className="min-h-screen  bg-cover bg-center bg-no-repeat z-40"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                <h2 className="text-3xl font-bold text-center text-primary100 pt-32 font-jakarta ">
                    Unggah Berkas
                </h2>
                <p className="text-md text-center text-primary500 mb-6 font-jakarta ">
                    Harap mengunggah berkas dengan benar.
                </p>
                <div className="flex flex-col items-center justify-center min ">
                    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-8">
                            <div className="relative">
                                <span
                                    className={`w-8 h-8 flex items-center justify-center ${
                                        progress >= 33
                                            ? "bg-yellow-400"
                                            : "bg-gray-300"
                                    } rounded-full text-white font-bold`}
                                >
                                    1
                                </span>
                                {progress > 33 && (
                                    <span className="absolute top-0 left-8 h-1.5 w-16 bg-yellow-400"></span>
                                )}
                            </div>
                            <div className="relative">
                                <span
                                    className={`w-8 h-8 flex items-center justify-center ${
                                        progress >= 66
                                            ? "bg-yellow-400"
                                            : "bg-gray-300"
                                    } rounded-full text-white font-bold`}
                                >
                                    2
                                </span>
                                {progress > 66 && (
                                    <span className="absolute top-0 left-8 h-1.5 w-16 bg-yellow-400"></span>
                                )}
                            </div>
                            <span
                                className={`w-8 h-8 flex items-center justify-center ${
                                    progress === 100
                                        ? "bg-yellow-400"
                                        : "bg-gray-300"
                                } rounded-full text-white font-bold`}
                            >
                                3
                            </span>
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 cursor-pointer"
                                htmlFor="formulir"
                                onClick={() =>
                                    document.getElementById("formulir").click()
                                }
                            >
                                Formulir Pendaftaran
                            </label>
                            <input
                                id="formulir"
                                name="formulir"
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                            <div
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500 cursor-pointer"
                                onClick={() =>
                                    document.getElementById("formulir").click()
                                }
                            >
                                Unggah file
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 cursor-pointer"
                                htmlFor="bukti"
                                onClick={() =>
                                    document.getElementById("bukti").click()
                                }
                            >
                                Bukti Pembayaran
                            </label>
                            <input
                                id="bukti"
                                name="bukti"
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                            <div
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500 cursor-pointer"
                                onClick={() =>
                                    document.getElementById("bukti").click()
                                }
                            >
                                Unggah file
                            </div>
                        </div>

                        <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 focus:outline-none">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pendaftaran_2;
