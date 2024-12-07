function Card({ children }) {
	return (
		<div className="flex rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200 hover:translate-y-[-2px] transition-transform duration-200 ease-in-out cursor-pointer">
			<div className="p-6">{children}</div>
		</div>
	);
}
export default Card;
