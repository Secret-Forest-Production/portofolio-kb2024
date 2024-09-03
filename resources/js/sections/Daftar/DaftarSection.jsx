import React, { useEffect, useState } from "react";
import ProgressIndicator from "../../Components/ProgressIndicator";
import Form from "../../Components/DaftarForm/DaftarForm";
import { useNavigate, Navigate } from "react-router-dom";

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
    const [checked, setChecked] = useState(false);

    const handleNext = (event) => {
        const isFormComplete = Object.values(formData).every(
            (value) => value !== ""
        );
        if (isFormComplete) {
            localStorage.setItem("formData", JSON.stringify(formData));
            localStorage.setItem("isStep1Complete", "true");
        }
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

    const steps = [
        { number: 1, isActive: true, progress: 50 },
        { number: 2, isActive: false, progress: 0 },
        { number: 3, isActive: false, progress: 0 },
    ];

    if (localStorage.getItem("isStep1Complete") === "true") {
        return setChecked(true);
    }

    return checked ? (
        <Navigate to={`/pendaftaran/step2/${jenisLomba}`} />
    ) : (
        <section className="my-0 md:mb-24">
            <h2 className="text-3xl font-bold text-center text-primary100 pt-24 font-jakarta">
                Data Pribadi
            </h2>
            <p className="text-md text-center text-primary500 mb-2 font-jakarta">
                Harap isi formulir ini dengan benar
            </p>
            <div className="flex flex-col items-center justify-center relative">
                <div className="w-full max-w-2xl p-12 bg-white rounded-3xl shadow-custom-shadow">
                    <ProgressIndicator steps={steps} />
                    <div className="border-b border-yellow-500 w-full my-8" />
                    <Form
                        formData={formData}
                        setFormData={setFormData}
                        handleNext={handleNext}
                    />
                </div>
            </div>
        </section>
    );
};

export default DaftarSection;
