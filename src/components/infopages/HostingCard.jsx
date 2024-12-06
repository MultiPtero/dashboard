// HostingCard.jsx
import React from "react";

const HostingCard = ({ hosting }) => {
    return (
        <>
        <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-xs">
            <img src={hosting.logo} alt={`${hosting.name} logo`} className="w-16 h-16 mb-4" />
            <h2 className="text-xl font-bold">{hosting.name}</h2>
            <p className="text-sm text-gray-500">@{hosting.shortname}</p>
            <p className="text-gray-700 mt-2 mb-4">{hosting.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {hosting.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <a
                href={hosting.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 block text-center"
            >
                Más Información
            </a>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-xs">
            <img src='https://example.com' alt={`Añadir servidor logo`} className="w-16 h-16 mb-4" />
            <p className="text-gray-700 mt-2 mb-4">¿Quieres añadir tu hosting? ¡Pues, añádelo! Envía un Issue para que te añadamos aquí</p>
            <a
                href="https://github.com/MultiPtero/dashboard/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 block text-center"
            >
                Más Información
            </a>
        </div>
        </>
    );
};

export default HostingCard;
