import { useState } from 'react';
import { FaUser, FaServer, FaLock } from 'react-icons/fa';

function MigrationForm() {
    // Estado para manejar el progreso del proceso (simulación)
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
            <div className="w-full max-w-4xl p-8 bg-gray-700 text-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-2">Asistente de Migración</h1>
                <p className="text-center mb-6 text-gray-300">
                    Te damos una mano para migrar tu servidor de un host a otro, sin necesidad de registrarte en nuestra plataforma. 100% privado y gratis. Así de fácil.
                </p>

                {/* Indicador de pasos */}
                <div className="flex justify-center mb-6">
                    <p className="text-sm text-gray-400">Paso {step} de 3</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Primer servidor */}
                    <div className="space-y-4">
                        <div>
                            <label for="" className="flex items-center space-x-2 font-semibold text-gray-200 mb-1">
                                <FaUser /> <span>Nombre de usuario</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Usuario del servidor antiguo"
                                className="w-full p-3 rounded-lg bg-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label for="" className="flex items-center space-x-2 font-semibold text-gray-200 mb-1">
                                <FaServer /> <span>Dirección SFTP</span>
                            </label>
                            <input
                                type="text"
                                placeholder="sftp://example.com"
                                className="w-full p-3 rounded-lg bg-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label for="" className="flex items-center space-x-2 font-semibold text-gray-200 mb-1">
                                <FaLock /> <span>Contraseña SFTP</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Contraseña segura"
                                className="w-full p-3 rounded-lg bg-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Segundo servidor */}
                    <div className="space-y-4">
                        <div>
                            <label for="" className="flex items-center space-x-2 font-semibold text-gray-200 mb-1">
                                <FaUser /> <span>Nombre de usuario</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Usuario del servidor nuevo"
                                className="w-full p-3 rounded-lg bg-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label for="" className="flex items-center space-x-2 font-semibold text-gray-200 mb-1">
                                <FaServer /> <span>Dirección SFTP</span>
                            </label>
                            <input
                                type="text"
                                placeholder="sftp://example.com"
                                className="w-full p-3 rounded-lg bg-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label for="" className="flex items-center space-x-2 font-semibold text-gray-200 mb-1">
                                <FaLock /> <span>Contraseña SFTP</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Contraseña segura"
                                className="w-full p-3 rounded-lg bg-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Botón de acción */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setStep(step + 1)}
                        className="w-full md:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    >Iniciar migración
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MigrationForm;
