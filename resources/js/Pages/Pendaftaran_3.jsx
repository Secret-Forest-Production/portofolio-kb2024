import React from "react";
import DaftarLayout from "@/Layouts/DaftarLayout";
// import { usePage } from "@inertiajs/inertia-react";
import { Progress } from "flowbite-react";

const Pendaftaran_3 = () => {
    // const { biodata } = usePage().props;

    return (
        <>
            <DaftarLayout>
                <h2 className="text-3xl font-bold text-center text-primary100 pt-32 font-jakarta">
                    Verifikasi Biodata
                </h2>
                <p className="text-md text-center text-primary500  font-jakarta">
                    Pastikan data yang sudah anda input benar
                </p>
                <div className="flex flex-col items-center justify-center  font-jakarta mb-48 ">
                    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center">
                                <div className="bg-secondary500 text-white p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                    1
                                </div>
                            </div>
                            <div className="w-1/4 px-3">
                                <Progress
                                    progress={50}
                                    size="md"
                                    color="yellow"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-[#EFF0F6] text-[#6F6C90] p-2 rounded-full text-lg flex items-center justify-center w-10 h-10">
                                    2
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="text-gray-700 text-smx ">
                                <div className="mb-2">
                                    <strong>Nama:</strong>
                                </div>
                                <div className="mb-2">
                                    <strong>Mendaftarkan:</strong>{" "}
                                </div>
                                <div className="mb-2">
                                    <strong>Asal Instansi:</strong>{" "}
                                </div>
                                <div className="mb-2">
                                    <strong>Tempat, Tanggal Lahir:</strong>{" "}
                                </div>
                                <div className="mb-2">
                                    <strong>Nomor Handphone:</strong>
                                </div>
                                <div className="mb-2">
                                    <strong>Instagram:</strong>
                                </div>
                                <div className="mb-2">
                                    <strong>Email:</strong>
                                </div>
                                <div className="mb-2">
                                    <strong>Formulir Pendaftaran:</strong>{" "}
                                    <a
                                        href={"/storage/${biodata.form_file}"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    ></a>
                                </div>
                                <div className="mb-2">
                                    <strong>Bukti Pembayaran:</strong>{" "}
                                    <a
                                        href={
                                            "/storage/${biodata.payment_file}"
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    ></a>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            // onClick={handleNext}
                            className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-8 py-3 rounded-[3.5rem] hover:bg-teal-700 text-center font-jakarta"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </DaftarLayout>
        </>
    );
};

export default Pendaftaran_3;
