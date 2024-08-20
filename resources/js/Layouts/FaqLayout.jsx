import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import background from "../../assets/backgroundFaq.webp";

const FaqLayout = ({ children }) => {
    return (
        <div
            className="min-h-[1450px] md:min-h-screen bg-center bg-cover w-full flex flex-col"
            style={{
                backgroundImage: `url(${background})`,
                backgroundImage: window.innerWidth >= 768 ? `url(${background})` : "none",
            }}
        >
            <Navbar />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default FaqLayout;
