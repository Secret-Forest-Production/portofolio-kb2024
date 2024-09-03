import React from "react";
import FormField from "../FormField";
import Button from "../Button";

const Form = ({ formData, setFormData, handleNext }) => (
    <form onSubmit={handleNext}>
        <FormField
            id="nama"
            type="text"
            label="Nama"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            className=""
        />
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

        <FormField
            id="kategori"
            type="text"
            label="Kategori"
            value={formData.kategori}
            className=""
        />

        <FormField
            id="instansi"
            type="text"
            label="Asal Instansi"
            value={formData.instansi}
            onChange={(e) =>
                setFormData({ ...formData, instansi: e.target.value })
            }
            className=""
        />

        <div className="mb-4 flex gap-4">
            <FormField
                id="telp"
                type="text"
                label="Nomor Handphone (WhatsApp)"
                value={formData.telp}
                onChange={(e) =>
                    setFormData({ ...formData, telp: e.target.value })
                }
                className="w-1/2"
            />

            <FormField
                id="bukti"
                type="text"
                label="Bukti Persyaratan (Link Drive)"
                value={formData.bukti}
                onChange={(e) =>
                    setFormData({ ...formData, bukti: e.target.value })
                }
                className="w-1/2"
            />
        </div>

        <div className="mb-4 flex gap-4">
            <FormField
                id="instagram"
                type="text"
                label="Instagram"
                value={formData.instagram}
                onChange={(e) =>
                    setFormData({ ...formData, instagram: e.target.value })
                }
                className="w-1/2"
            />

            <FormField
                id="email"
                type="email"
                label="Email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
                className="w-1/2"
            />
        </div>

        <div className="flex items-center justify-center">
            <Button>Selanjutnya</Button>
        </div>
    </form>
);

export default Form;
