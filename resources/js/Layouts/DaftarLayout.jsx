import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import background from "../../assets/backgroundFaq.webp";

const DaftarLayout = ({ children }) => {
    return (
        <div
            className="min-h-[1650px]  h-screen relative overflow-hidden"
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Navbar />
            <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default DaftarLayout;
