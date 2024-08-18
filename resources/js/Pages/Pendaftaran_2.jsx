import React, { useState, useEffect } from "react";
import Bg from "../../assets/bg-pendaftaran.webp";

const Pendaftaran_2 = () => {
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const savedData = localStorage.getItem("formData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    console.log(formData);
    const handleFileUpload = (e) => {
        const { name, files: selectedFiles } = e.target;
        const newFiles = { ...files, [name]: selectedFiles[0] };
        setFiles(newFiles);

        // Update progress
        let newProgress = 66;
        if (newFiles.formulir) newProgress += 17; // Setengah jalan ke step 3
        if (newFiles.bukti) newProgress += 17; // Penuh jalan ke step 3
        setProgress(newProgress);
    };

    const handleNextClick = () => {
        if (files.formulir && files.bukti) {
            // Logic to navigate to the next step
            alert("Navigating to the next page...");
        } else {
            alert("Unggah semua file terlebih dahulu.");
        }
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
                                <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-white font-bold">
                                    1
                                </span>
                                <span
                                    className={`absolute top-0 left-8 h-1.5 ${
                                        progress >= 66
                                            ? "bg-yellow-400"
                                            : "bg-gray-300"
                                    } w-16`}
                                ></span>
                            </div>
                            <div className="relative">
                                <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-white font-bold">
                                    2
                                </span>
                                <span
                                    className={`absolute top-0 left-8 h-1.5 ${
                                        progress > 66
                                            ? "bg-yellow-400"
                                            : "bg-gray-300"
                                    } w-16`}
                                ></span>
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
                                {/* <Icon
                                    icon={mdiUpload}
                                    className="inline-block mr-2"
                                /> */}
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
                                {files.formulir
                                    ? files.formulir.name
                                    : "Unggah file"}
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
                                {/* <Icon
                                    icon={mdiUpload}
                                    className="inline-block mr-2"
                                /> */}
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
                                {files.bukti ? files.bukti.name : "Unggah file"}
                            </div>
                        </div>

                        <button
                            className={`w-full py-2 rounded-lg text-white ${
                                files.formulir && files.bukti
                                    ? "bg-teal-600 hover:bg-teal-700"
                                    : "bg-gray-400 cursor-not-allowed"
                            }`}
                            onClick={handleNextClick}
                            disabled={!files.formulir || !files.bukti}
                        >
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pendaftaran_2;
