import { abilities } from "../constants";

const FeatureCards = () => (
    <>
        <style jsx>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      .float {
        animation: float 3s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .float {
          animation: none;
        }
      }
    `}</style>
        <div className="w-full px-6 lg:px-12 py-12 ">
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {abilities.map(({ imgPath, title, desc }, index) => (
                    <div
                        key={title}
                        className="border border-gray-700 rounded-xl p-6 flex flex-col gap-4 bg-gray-800 float"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700">
                            <img
                                src={imgPath}
                                alt={`${title} icon`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-gray-300 text-lg">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
);

export default FeatureCards;