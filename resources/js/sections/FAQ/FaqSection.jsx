import React, { useState, useEffect, useRef } from "react";
import FaqAccordion from "@/Components/Faq/FaqAccordion";
import FaqHeader from "@/Components/Faq/FaqHeader";
import faq from "../../Data/faq.json";

const FaqSection = () => {
    const [state, setState] = useState({
        quest: null,
        dataQuest: faq,
        selectedCategory: null,
    });

    const faqHeaderRef = useRef(null);
    const faqAccordionRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState("auto");

    useEffect(() => {
        if (faqHeaderRef.current && faqAccordionRef.current) {
            const headerHeight = faqHeaderRef.current.offsetHeight;
            setHeaderHeight(`${headerHeight}px`);
        }
    }, []);

    const toggleAccordion = (id) => {
        setState((prevState) => ({
            ...prevState,
            quest: prevState.quest === id ? null : id,
        }));
    };

    const filteredFaqs = state.dataQuest.filter((q) => 
        state.selectedCategory === null || q.id_category === state.selectedCategory
    );

    return (
        <section className="md:h-screen relative flex flex-col md:flex-row items-center justify-between my-32 md:my-16">
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-12 lg:gap-x-36 w-full h-full lg:px-32 container">
                <div
                    ref={faqHeaderRef}
                    className="w-full lg:w-1/2 md:h-[85%] mb-8 md:mb-0"
                >
                    <FaqHeader />
                </div>
                <div
                    ref={faqAccordionRef}
                    className="w-full lg:w-1/2 flex flex-col space-y-4 md:overflow-auto md:h-[800px] snap-y snap-mandatory"
                    style={{ height: headerHeight }}
                >
                    {filteredFaqs.map((e) => (
                        <FaqAccordion
                            key={e.id}
                            id={e.id}
                            active={state.quest}
                            toggle={() => toggleAccordion(e.id)}
                            quest={e.quest}
                            answer={e.answer}
                            className="snap-start"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
