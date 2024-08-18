import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import background from "../../assets/backgroundFaq.webp";

const FaqLayout = ({ children }) => {
    return (
        <div
            className="min-h-[1650px] md:min-h-screen"
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

export default FaqLayout;
