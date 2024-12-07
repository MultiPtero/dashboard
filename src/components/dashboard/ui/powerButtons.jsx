import React from "react";

const Button = ({ status, variant = "BLUE", onClick, disabled }) => {
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
		<div className="flex gap-2">
			<button
				onClick={() => onClick("start")}
				disabled={disabled || status === "running"}
				className={`px-4 py-2 rounded-md ${status === "running" ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
			>
				Start
			</button>
			<button
				onClick={() => onClick("stop")}
				disabled={disabled || status === "stopped"}
				className={`px-4 py-2 rounded-md ${status === "stopped" ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 text-white"}`}
			>
				Stop
			</button>
			<button
				onClick={() => onClick("restart")}
				disabled={disabled || status === "stopped"}
				className={`px-4 py-2 rounded-md ${status === "stopped" ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
			>
				Restart
			</button>
		</div>
	);
};

export default Button;
