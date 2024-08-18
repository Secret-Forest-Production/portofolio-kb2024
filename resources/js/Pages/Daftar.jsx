import DaftarSection from "@/sections/Daftar/DaftarSection";
import DaftarLayout from "@/Layouts/DaftarLayout";
import { Head, usePage } from "@inertiajs/react";
import React from "react";

const Daftar = () => {
    const { props } = usePage();
    const { jenisLomba } = props;

    console.log(props)
    return (
        <>
            <Head title="Daftar" />
            <DaftarLayout>
                <DaftarSection jenisLomba={jenisLomba}/>
            </DaftarLayout>
        </>
    );
};

export default Daftar;
