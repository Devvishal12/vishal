import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// Define counterItems directly in the file
const counterItems = [
    { value: 3, suffix: "+", label: "Freelance Projects" },
    { value: 10, suffix: "+", label: "Personal Projects" },
    { value: 7.9, suffix: "/10", label: "CGPA" },
    { value: 1, suffix: "+", label: "Certifications" },
    { value: 1, suffix: "+", label: "Internships" },
];

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const counterRef = useRef(null);
    const countersRef = useRef([]);

    useGSAP(() => {
        countersRef.current.forEach((counter, index) => {
            const numberElement = counter.querySelector(".counter-number");
            const item = counterItems[index];

            // Set initial value to 0 or 0.0 for decimals
            gsap.set(numberElement, {
                innerText: Number.isInteger(item.value) ? "0" : "0.0",
            });

            // Create the counting animation
            gsap.to(numberElement, {
                innerText: item.value,
                duration: 2.5,
                ease: "power2.out",
                // Only snap to whole numbers if the value is an integer
                snap: Number.isInteger(item.value) ? { innerText: 1 } : { innerText: 0.1 },
                scrollTrigger: {
                    trigger: "#counter",
                    start: "top 80%", // Trigger when the counter is 80% in view
                    toggleActions: "play none none none", // Play animation once
                },
                // Add the suffix after counting is complete
                onComplete: () => {
                    numberElement.textContent = `${item.value}${item.suffix}`;
                },
            });
        });
    }, []); // Empty dependency array for useGSAP

    return (
        <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => el && (countersRef.current[index] = el)}
                        className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                    >
                        <div className="counter-number text-white-50 text-5xl font-bold mb-2">
                            {Number.isInteger(item.value) ? 0 : 0.0}
                            {item.suffix}
                        </div>
                        <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;