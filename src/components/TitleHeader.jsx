import { useRef } from "react";

const TitleHeader = ({ title, sub, glowColor = "var(--glow-color)", borderStyle = "solid" }) => {
    const headerRef = useRef(null);

    const handleMouseMove = (e) => {
        const header = headerRef.current;
        if (!header) return;

        const rect = header.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        header.style.setProperty("--start", angle);
        header.style.setProperty("--mouse-x", `${mouseX}px`);
        header.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    const handleMouseLeave = () => {
        const header = headerRef.current;
        if (header) {
            header.style.setProperty("--mouse-x", "0px");
            header.style.setProperty("--mouse-y", "0px");
            header.style.setProperty("--start", "0");
        }
    };

    return (
        <div
            ref={headerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`header-card card-border rounded-2xl p-6 sm:p-10 flex flex-col items-center gap-6 border-${borderStyle} relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}
            style={{ "--glow-color": glowColor }}
            role="banner"
            aria-labelledby="header-title"
            tabIndex={0}
        >
            <div className="glow absolute inset-0 pointer-events-none" />
            <div className="content-wrapper z-10 flex flex-col items-center gap-6">
                <div className="hero-badge bg-[var(--bg-secondary)] py-2.5 px-5 rounded-full w-fit text-sm sm:text-base text-[var(--text-secondary)] transition-transform duration-300 hover:scale-105 hover:shadow-md">
                    <p className="font-medium">{sub}</p>
                </div>
                <div>
                    <h1
                        id="header-title"
                        className="font-bold md:text-5xl text-3xl text-center text-[var(--text-primary)] transition-all duration-300 hover:tracking-tight"
                    >
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default TitleHeader;