import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        nama: '',
        lomba: '',
        asalInstansi: '',
        tempatTanggalLahir: '',
        nomorHandphone: '',
        instagram: '',
        email: '',
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => useContext(FormContext);
