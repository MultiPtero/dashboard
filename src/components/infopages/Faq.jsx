import { useState } from "react";

const Faq = () => {
	const [activeAccordion, setActiveAccordion] = useState("");

	const handleAccordionClick = (id) => {
		setActiveAccordion(activeAccordion === id ? "" : id);
	};

	return (
		<section>
			<div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
					<div className="text-center lg:text-left">
						<div>
							<p className="text-3xl font-normal tracking-tight text-black font-display">
								Preguntas frecuentes
							</p>
							<p className="text-base mt-4 text-zinc-500">
								Respuestas a las preguntas más comunes sobre MultiPtero
							</p>
						</div>
					</div>
					<div className="relative w-full mx-auto font-normal lg:col-span-2">
						{[
							{
								question: "¿Cómo puedo acceder a MultiPtero?",
								answer:
									"Puedes acceder a MultiPtero a través de cualquier navegador web moderno visitando nuestra página web. También ofrecemos aplicaciones dedicadas para dispositivos móviles que puedes descargar desde las tiendas de aplicaciones oficiales.",
							},
							{
								question:
									"¿Qué tipos de servidores puedo gestionar con MultiPtero?",
								answer:
									"MultiPtero permite gestionar una amplia variedad de servidores de juegos, incluyendo Minecraft, Terraria, Counter-Strike, y muchos más. Nuestra plataforma se actualiza constantemente para soportar nuevos tipos de servidores.",
							},
							{
								question:
									"¿Necesito conocimientos técnicos para usar MultiPtero?",
								answer:
									"No, MultiPtero está diseñado para ser fácil de usar incluso para principiantes. Nuestra interfaz intuitiva te permite gestionar tus servidores sin necesidad de conocimientos técnicos avanzados.",
							},
							{
								question: "¿Cómo funciona el sistema de respaldos?",
								answer:
									"MultiPtero realiza copias de seguridad automáticas de tus servidores según el calendario que configures. Puedes programar respaldos diarios, semanales o mensuales, y restaurarlos fácilmente cuando lo necesites.",
							},
							{
								question:
									"Cómo puedo cambiar mi servidor de un hosting a otro?",
								answer:
									"En MultiPtero, podemos ayudarte con el proceso de cambio de un hosting a otro! Solamente necesitas acceder a esta página y sigue los pasos!",
							},
							{
								question: "¿Cómo puedo obtener soporte técnico?",
								answer:
									"Ofrecemos soporte técnico 24/7 a través de nuestro sistema de tickets, chat en vivo y correo electrónico. Nuestro equipo de expertos está siempre disponible para ayudarte con cualquier problema o duda.",
							},
						].map((item, index) => (
							<div
								key={`faq-${item.question}`}
								className={`cursor-pointer group ${
									activeAccordion === `accordion-${index}`
										? "text-black"
										: "text-zinc-600 hover:text-accent-500"
								}`}
							>
								<button
									type="button"
									onClick={() => handleAccordionClick(`accordion-${index}`)}
									className="flex items-center justify-between w-full p-4 pb-1 text-left font-medium select-none"
								>
									<span>{item.question}</span>
									<svg
										className={`w-5 h-5 duration-300 ease-out text-accent-500 ${
											activeAccordion === `accordion-${index}`
												? "-rotate-[45deg]"
												: ""
										}`}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 6v12m6-6H6"
										/>
									</svg>
								</button>
								{activeAccordion === `accordion-${index}` && (
									<div className="p-4 pt-2 text-zinc-500">{item.answer}</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
