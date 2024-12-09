import { useState, useEffect } from "react";
import {
	FaUser,
	FaServer,
	FaLock,
	FaCheckCircle,
	FaExclamationTriangle,
} from "react-icons/fa";
import { TbServer2, TbServerBolt } from "react-icons/tb";
import Select from "react-select";

const MigrationComponent = () => {
	const [step, setStep] = useState(1);
	const [migrationStatus, setMigrationStatus] = useState(null);
	const [error, setError] = useState(null);

	const handleOldServerChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			oldServer: {
				...prev.oldServer,
				[field]: value,
			},
		}));
	};

	const handleNewServerChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			newServer: {
				...prev.newServer,
				[field]: value,
			},
		}));
	};

	const [formData, setFormData] = useState({
		oldServer: {
			type: "",
			host: "",
			username: "",
			password: "",
		},
		newServer: {
			type: "",
			host: "",
			username: "",
			password: "",
		},
	});
	const [formErrors, setFormErrors] = useState({});

	// Opciones de tipos de servidor
	const ServerTypeOptions = [
		{ value: "pterodactyl", label: "Pterodactyl" },
		{ value: "pufferfish", label: "PufferFish" },
		{ value: "vps", label: "Linux/VPS" },
		{ value: "other", label: "Otros" },
	];

	// Validar formulario
	const validateForm = () => {
		const errors = {};

		// Validación servidor antiguo
		if (!formData.oldServer.username.trim()) {
			errors.oldUsername = "El nombre de usuario es requerido";
		}
		if (!formData.oldServer.host.trim()) {
			errors.oldHost = "La dirección SFTP es requerida";
		}
		if (!formData.oldServer.password.trim()) {
			errors.oldPassword = "La contraseña es requerida";
		}
		if (!formData.oldServer.type) {
			errors.oldType = "El tipo de servidor es requerido";
		}

		// Validación servidor nuevo
		if (!formData.newServer.username.trim()) {
			errors.newUsername = "El nombre de usuario es requerido";
		}
		if (!formData.newServer.host.trim()) {
			errors.newHost = "La dirección SFTP es requerida";
		}
		if (!formData.newServer.password.trim()) {
			errors.newPassword = "La contraseña es requerida";
		}
		if (!formData.newServer.type) {
			errors.newType = "El tipo de servidor es requerido";
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	// Función para enviar datos al servidor
	const sendMigrationData = async () => {
		try {
			const response = await fetch("https://multiptero-backend.onrender.com/create-ws", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (!response.ok) throw new Error("Error al comunicarse con el servidor");
			return await response.text(); // Token de WebSocket
		} catch (err) {
			setError("Error al enviar datos al servidor");
			console.error(err);
			return null;
		}
	};

	// Función para iniciar WebSocket
	const startWebSocket = async () => {
		const token = await sendMigrationData();
		if (!token) return;

		const socket = new WebSocket(`wss://multiptero-backend.onrender.com/${token}`);

		socket.onopen = () => {
			console.log("Conexión establecida con el servidor WebSocket");
			setError(null);
		};

		socket.onmessage = (event) => {
			try {
				const status = JSON.parse(event.data); // Datos enviados por el servidor
				setMigrationStatus(status);
			} catch (err) {
				setError("Error al procesar los datos del servidor");
				console.error(err);
			}
		};

		socket.onclose = () => {
			console.log("Conexión cerrada con el servidor WebSocket");
			setError("La conexión con el servidor se ha cerrado");
		};

		socket.onerror = (err) => {
			console.error("Error en la conexión con el servidor WebSocket:", err);
			setError("Error de conexión con el servidor");
		};

		// Cerrar el WebSocket al desmontar el componente
		return () => socket.close();
	};

	// Manejar la migración
	const handleStartMigration = async () => {
		if (validateForm()) {
			await startWebSocket();
		}
	};
	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
				<h1 className="text-3xl font-bold text-center mb-2">
					Asistente de Migración
				</h1>
				<p className="text-center mb-6 ">
					Te damos una mano para migrar tu servidor de un host a otro, sin
					necesidad de registrarte en nuestra plataforma. 100% privado y gratis.
					Así de fácil.
				</p>

				<div className="flex justify-center mb-6">
					<p className="text-sm">Paso {step} de 3</p>
				</div>

				{Object.keys(formErrors).map((field) => (
					formErrors[field] && (
						<p key={field} className="text-red-500 text-sm mt-1">[{field}] {formErrors[field]}</p>
					)
				))}

				{step === 1 && (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
						<div className="space-y-4">
							<div>
								<label
									htmlFor="username"
									className="flex items-center space-x-2 font-semibold mb-1"
								>
									<FaUser /> <span>Nombre de usuario</span>
								</label>
								<input
									type="text"
									id="username"
									placeholder="Nombre de usuario del servidor antiguo"
									className="w-full p-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
									value={formData.oldServer.username}
									onChange={(e) =>
										handleOldServerChange("username", e.target.value)
									}
								/>
							</div>

							<div>
								<label
									htmlFor="sftp1"
									className="flex items-center space-x-2 font-semibold mb-1"
								>
									<FaServer /> <span>Dirección SFTP</span>
								</label>
								<input
									type="text"
									id="sftp1"
									placeholder="sftp://example.com"
									className="w-full p-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
									value={formData.oldServer.host}
									onChange={(e) =>
										handleOldServerChange("host", e.target.value)
									}
								/>
							</div>

							<div>
								<label
									htmlFor="password1"
									className="flex items-center space-x-2 font-semibold  mb-1"
								>
									<FaLock /> <span>Contraseña SFTP</span>
								</label>
								<input
									type="password"
									id="password1"
									placeholder="Contraseña segura"
									className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
									onChange={(e) =>
										setFormData({
											...formData,
											oldServer: {
												...formData.oldServer,
												password: e ? e.target.value : "",
											},
										})}
								/>
							</div>
							<div>
								<label
									htmlFor="servertype"
									className="flex items-center space-x-2 font-semibold mb-1"
								>
									<TbServer2 /> <span>Tipo de servidor</span>
								</label>
								<Select
									className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
									classNamePrefix="select"
									isClearable={true}
									name="servertype"
									options={ServerTypeOptions}
									onChange={(selectedOption) =>
										setFormData({
											...formData,
											oldServer: {
												...formData.oldServer,
												type: selectedOption ? selectedOption.value : "",
											},
										})
									}
								/>

							</div>
						</div>

						<div className="space-y-4">
							<div>
								<label
									htmlFor="username2"
									className="flex items-center space-x-2 font-semibold  mb-1"
								>
									<FaUser /> <span>Nombre de usuario</span>
								</label>
								<input
									type="text"
									id="username2"
									placeholder="Usuario del servidor nuevo"
									className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
									value={formData.newServer.username}
									onChange={(e) =>
										handleNewServerChange("username", e.target.value)
									}
								/>
							</div>

							<div>
								<label
									htmlFor="sftp2"
									className="flex items-center space-x-2 font-semibold  mb-1"
								>
									<FaServer /> <span>Dirección SFTP</span>
								</label>
								<input
									type="text"
									id="sftp2"
									placeholder="sftp://example.com"
									className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
									value={formData.newServer.host}
									onChange={(e) =>
										handleNewServerChange("host", e.target.value)
									}
								/>
							</div>

							<div>
								<label
									htmlFor="password2"
									className="flex items-center space-x-2 font-semibold  mb-1"
								>
									<FaLock /> <span>Contraseña SFTP</span>
								</label>
								<input
									type="password"
									id="password2"
									placeholder="Contraseña segura"
									className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
									value={formData.newServer.password}
									onChange={(e) =>
										handleNewServerChange("password", e.target.value)
									}
								/>
							</div>
							<div>
								<label
									htmlFor="servertype"
									className="flex items-center space-x-2 font-semibold mb-1"
								>
									<TbServer2 /> <span>Tipo de servidor</span>
								</label>
								<Select
									id="newServerType"
									className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
									classNamePrefix="select"
									isClearable={true}
									name="servertype"
									options={ServerTypeOptions}
									onChange={(selectedOption) =>
										setFormData({
											...formData,
											newServer: {
												...formData.newServers,
												type: selectedOption ? selectedOption.value : "",
											},
										})
									}
								/>

							</div>
						</div>
					</div>
				)}

				{step === 2 && (
					<div className="space-y-6">
						<div className="text-center">
							<h2 className="text-xl font-bold mb-4">
								Proceso de Migración en Curso
							</h2>
							<div className="flex items-center justify-center space-x-4 mb-4">
								<TbServerBolt className="text-4xl text-blue-500 animate-pulse" />
								<div className="h-1 w-20 bg-blue-200 rounded">
									<div
										className="h-1 bg-blue-500 rounded transition-all duration-500"
										style={{ width: `${migrationStatus?.progress || 0}%` }}
									/>
								</div>
								<TbServer2 className="text-4xl text-green-500" />
							</div>
							<p className="text-lg">
								{migrationStatus?.status?.message || "Iniciando proceso de migración..."}
							</p>
						</div>

						<div className="space-y-4">
							<div className="p-4 rounded-lg bg-gray-50">
								<h3 className="font-semibold mb-2 flex items-center">
									<FaServer className="mr-2" /> Estado de la Conexión
								</h3>
								<ul className="space-y-2">
									<li className="flex items-center">
										<span
											className={`h-2 w-2 rounded-full mr-2 ${migrationStatus?.sourceConnected ? "bg-green-500" : "bg-red-500"}`}
										/>
										Servidor Origen:{" "}
										{migrationStatus?.sourceConnected
											? "Conectado"
											: "Desconectado"}
									</li>
									<li className="flex items-center">
										<span
											className={`h-2 w-2 rounded-full mr-2 ${migrationStatus?.targetConnected ? "bg-green-500" : "bg-red-500"}`}
										/>
										Servidor Destino:{" "}
										{migrationStatus?.targetConnected
											? "Conectado"
											: "Desconectado"}
									</li>
								</ul>
							</div>

							<div className="p-4 rounded-lg bg-gray-50">
								<h3 className="font-semibold mb-2 flex items-center">
									<TbServer2 className="mr-2" /> Detalles del Proceso
								</h3>
								<div className="space-y-2">
									<p>
										Archivos transferidos:{" "}
										{migrationStatus?.filesTransferred || 0}
									</p>
									<p>Tamaño total: {migrationStatus?.totalSize || "0 MB"}</p>
									<p>
										Tiempo estimado:{" "}
										{migrationStatus?.estimatedTime || "Calculando..."}
									</p>
								</div>
							</div>
						</div>
					</div>
				)}

				{step === 3 && (
					<div className="space-y-4">
						<h2 className="text-xl font-bold text-center">
							Proceso completado
						</h2>
						<p className="text-center">
							El proceso de migración se ha completado con exito.
						</p>
						<div className="flex justify-center">
							<FaCheckCircle className="text-6xl text-green-500" />
						</div>
					</div>
				)}
				<div className="flex justify-center mt-6">
					<button
						type="button"
						onClick={
							step === 1 ? handleStartMigration : () => setStep(step < 3 ? step + 1 : 1)
						}
						className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
					>
						{step === 3 ? "Volver al inicio" : "Continuar"}
					</button>
					{(step === 2 || step === 3) && (
						<button
							type="button"
							onClick={() => setStep(step > 1 ? step - 1 : 3)}
							className="w-full md:w-auto px-6 py-3 bg-green-500 text-white hover:bg-green-600 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
						>
							Volver atrás
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default MigrationComponent;

const handleOldServerChange = (field, value) => {
  setFormData({
    ...formData,
    oldServer: {
      ...formData.oldServer,
      [field]: value,
    },
  });
};

const handleNewServerChange = (field, value) => {
  setFormData({
    ...formData,
    newServer: {
      ...formData.newServer,
      [field]: value,
    },
  });
};
