import React from "react";

const Button = ({ children, variant = "BLUE", onClick, disabled }) => {
	const getButtonStyle = () => {
		switch (variant) {
			case "RED":
				return "bg-red-500 hover:bg-red-600 text-white";
			case "GREEN":
				return "bg-green-500 hover:bg-green-600 text-white";
			case "BLUE":
				return "bg-blue-500 hover:bg-blue-600 text-white";
			case "DISABLED":
				return "bg-gray-300 text-gray-500 cursor-not-allowed";
			default:
				return "bg-blue-500 hover:bg-blue-600 text-white";
		}
	};

	return (
		<button
			onClick={onClick}
			disabled={disabled || variant === "DISABLED"}
			className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${getButtonStyle()}`}
		>
			{children}
		</button>
	);
};

export default Button;
