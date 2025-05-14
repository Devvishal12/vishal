import { useRef } from "react";

const GlowCard = ({ card, index, children, glowColor = "var(--color-blue-50)", borderStyle = "solid" }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        card.style.setProperty("--start", angle);
        card.style.setProperty("--mouse-x", `${mouseX}px`);
        card.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    const handleMouseLeave = (index) => () => {
        const card = cardRefs.current[index];
        if (card) {
            card.style.setProperty("--mouse-x", "0px");
            card.style.setProperty("--mouse-y", "0px");
            card.style.setProperty("--start", "0");
        }
    };

    return (
        <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            onMouseLeave={handleMouseLeave(index)}
            className={`card card-border timeline-card rounded-xl p-6 sm:p-8 mb-6 break-inside-avoid-column border-${borderStyle}`}
            style={{ "--glow-color": glowColor }}
            role="article"
            aria-labelledby={`card-title-${index}`}
            tabIndex={0}
        >
            <div className="glow" />
            <div className="content-wrapper space-y-4">
                <div className="flex items-center gap-4">
                    <img
                        src={card.logoPath}
                        alt={`${card.title} logo`}
                        className="size-10 md:size-12 object-contain rounded-full border border-black-50"
                    />
                    <div>
                        <h3
                            id={`card-title-${index}`}
                            className="text-lg sm:text-xl font-semibold text-white-50"
                        >
                            {card.title}
                        </h3>
                        <p className="text-sm text-blue-50">{card.date}</p>
                    </div>
                </div>
                <p className="text-base sm:text-lg text-white">{card.keyAchievement}</p>
                <ul className="list-disc pl-5 text-sm sm:text-base text-gray-300">
                    {card.responsibilities.map((resp, idx) => (
                        <li key={idx} className="mb-2">{resp}</li>
                    ))}
                </ul>
            </div>
            {children}
        </div>
    );
};

export default GlowCard;