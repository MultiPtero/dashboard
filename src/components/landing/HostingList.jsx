import React, { useEffect, useState } from "react";
import HostingCard from "../infopages/HostingCard";

const HostingList = () => {
	const [hostings, setHostings] = useState([
		{
			name: "Pluox Hosting",
			description:
				"Pluox Hosting is a versatile and dynamic hosting provider known for its comprehensive range of services, catering to both budget-conscious users and those seeking robust performance solutions. With a commitment to offering 24/7 availability, Pluox Hosting ensures that users have uninterrupted access to their hosting services at all times, making it a reliable choice for businesses and individual users alike.",
			logo: "https://consumersiteimages.trustpilot.net/business-units/668da6eef462e38352792cb2-198x149-2x.avif",
			tags: ["free", "paid", "europe"],
			links: {
				panel: null,
				dash: null,
				discord: null,
				website: "https://pluox.xyz",
			},
		},
		{
			name: "LynxNodes",
			description:
				"LynxNodes es un servicio de hosting gratuito que ofrece una solución completa para alojar servidores y aplicaciones en diversos lenguajes de programación y plataformas. Entre los servicios que proporciona, se encuentran opciones para servidores de Node.js, Python y Lua, permitiendo a los desarrolladores desplegar sus proyectos de forma sencilla y eficiente.",
			logo: "https://images-ext-1.discordapp.net/external/3reRAP_7wVGO-R0vGIap6KUmDS71Uy1uxQo2QYdZruY/%3Fsize%3D1024/https/cdn.discordapp.com/icons/1115280780055293952/ec772001fa47bc2d5391734c07cacf9b.png?format=webp&quality=lossless",
			tags: ["free", "paid", "europe"],
			links: {
				panel: "https://panel.lynxnodes.es",
				dash: null,
				discord: "https://discord.lynxnodes.es/",
				website: "https://lynxnodes.es",
			},
		},
	]);

	return (
		<section id="hosting" className="container mx-auto py-8">
			<h1 className="text-3xl font-bold text-center mb-8">
				Hostings Destacados
			</h1>
			{hostings.length === 0 ? (
				<p className="text-center text-gray-500">No hay hostings disponibles</p>
			) : (
				<div className="flex flex-wrap gap-8 justify-center">
					{hostings.map((hosting, index) => (
						<HostingCard key={index} hosting={hosting} />
					))}
				</div>
			)}
		</section>
	);
};
export default HostingList;
