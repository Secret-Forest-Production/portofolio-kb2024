import DaftarSection from "@/sections/Daftar/DaftarSection";
import DaftarLayout from "@/Layouts/DaftarLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Daftar = () => {
    return (
        <>
            <Head title="Faq" />
            <DaftarLayout>
                <DaftarSection/>
            </DaftarLayout>
        </>
    );
};

export default Daftar;
