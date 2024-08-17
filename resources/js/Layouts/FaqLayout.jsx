import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import background from "../../assets/backgroundFaq.webp";

const FaqLayout = ({ children }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                minHeight: "100vh",
                width: "100%",
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Navbar />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default FaqLayout;
