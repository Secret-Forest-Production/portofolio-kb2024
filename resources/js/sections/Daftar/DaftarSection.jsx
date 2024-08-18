import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useForm } from "@inertiajs/inertia-react";

const lombaEnumMapping = {
    "Persembahan Moda Tradisional": "moda_tradisional",
    "Videografi": "lensa_budaya",
    "Tari Tradisional": "ekspresi_tubuh",
    "Busana Kreasi": "moda_tradisional",
    "Bazar Kebudayaan": "bazar_kebudayaan",
    "Cerita Nusantara": "legenda_nusantara",
};


const DaftarSection = ({ jenisLomba }) => {
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        lomba: lombaEnumMapping[jenisLomba],
        instansi: "",
        telp: "",
        instagram: "",
        email: "",
        bukti: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
      
        post(route('submit'));
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
                <div className="w-full max-w-xl p-8 bg-white rounded-3xl shadow-custom-shadow">
                    <ProgressBar striped variant="warning" now={60} />
                    <div className="border-b border-yellow-500 py-4 w-full flex justify-center items-center mb-4"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-gray-700 text-sm font-bold font-jakarta mb-2" htmlFor="nama">
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                className={`shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray ${errors.nama ? 'border-red-500' : ''}`}
                                value={data.nama}
                                onChange={(e) => setData('nama', e.target.value)}
                            />
                            {errors.nama && <div className="text-red-500 text-xs mt-1">{errors.nama}</div>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lomba">
                                Lomba
                            </label>
                            <input
                                type="text"
                                id="lomba"
                                name="lomba"
                                className="shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray"
                                value={data.lomba}
                                disabled
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instansi">
                                Asal Instansi
                            </label>
                            <input
                                type="text"
                                id="instansi"
                                name="instansi"
                                className={`shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray ${errors.instansi ? 'border-red-500' : ''}`}
                                value={data.instansi}
                                onChange={(e) => setData('instansi', e.target.value)}
                            />
                            {errors.instansi && <div className="text-red-500 text-xs mt-1">{errors.instansi}</div>}
                        </div>

                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telp">
                                    Nomor Handphone
                                </label>
                                <input
                                    type="text"
                                    id="telp"
                                    name="telp"
                                    className={`shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray ${errors.telp ? 'border-red-500' : ''}`}
                                    value={data.telp}
                                    onChange={(e) => setData('telp', e.target.value)}
                                />
                                {errors.telp && <div className="text-red-500 text-xs mt-1">{errors.telp}</div>}
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bukti">
                                    Bukti (Link Drive)
                                </label>
                                <input
                                    type="text"
                                    id="bukti"
                                    name="bukti"
                                    className={`shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray ${errors.bukti ? 'border-red-500' : ''}`}
                                    value={data.bukti}
                                    onChange={(e) => setData('bukti', e.target.value)}
                                />
                                {errors.bukti && <div className="text-red-500 text-xs mt-1">{errors.bukti}</div>}
                            </div>
                        </div>

                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagram">
                                    Instagram
                                </label>
                                <input
                                    type="text"
                                    id="instagram"
                                    name="instagram"
                                    className={`shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray ${errors.instagram ? 'border-red-500' : ''}`}
                                    value={data.instagram}
                                    onChange={(e) => setData('instagram', e.target.value)}
                                />
                                {errors.instagram && <div className="text-red-500 text-xs mt-1">{errors.instagram}</div>}
                            </div>

                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`shadow-custom-shadow2 rounded-lg w-full py-2 px-3 text-gray ${errors.email ? 'border-red-500' : ''}`}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            disabled={processing}
                            className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 bg-teal-600 text-white px-8 py-3 rounded-[3.5rem] hover:bg-teal-700 text-center font-jakarta disabled:opacity-50"
                        >
                            {processing ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DaftarSection;