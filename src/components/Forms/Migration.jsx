import { useState } from 'react';
import { FaUser, FaServer, FaLock } from 'react-icons/fa';
import { TbServer2, TbServerBolt } from 'react-icons/tb';
import Select from 'react-select';

function MigrationForm() {
    // Estado para manejar el progreso del proceso (simulación)
    const [step, setStep] = useState(1);
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const ServerTypeOptions = [
        { value: 'linux', label: 'Chocolate' },
        { value: 'pterodactyl', label: 'Pterodactyl' },
        { value: 'pufferfish', label: 'PufferFish' }
    ]

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-2">Asistente de Migración</h1>
                <p className="text-center mb-6 ">
                    Te damos una mano para migrar tu servidor de un host a otro, sin necesidad de registrarte en nuestra plataforma. 100% privado y gratis. Así de fácil.
                </p>

                {/* Indicador de pasos */}
                <div className="flex justify-center mb-6">
                    <p className="text-sm">Paso {step} de 3</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Primer servidor */}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="flex items-center space-x-2 font-semibold mb-1">
                                <FaUser /> <span>Nombre de usuario</span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Nombre de usuario del servidor antiguo"
                                className="w-full p-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="sftp1" className="flex items-center space-x-2 font-semibold mb-1">
                                <FaServer /> <span>Dirección SFTP</span>
                            </label>
                            <input
                                type="text"
                                id="sftp1"
                                placeholder="sftp://example.com"
                                className="w-full p-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password1" className="flex items-center space-x-2 font-semibold  mb-1">
                                <FaLock /> <span>Contraseña SFTP</span>
                            </label>
                            <input
                                type="password"
                                id="password1"
                                placeholder="Contraseña segura"
                                className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="servertype" className='flex items-center space-x-2 font-semibold mb-1'>
                                <TbServer2 /> <span>Tipo de servidor</span>
                            </label>
                            <Select
                                className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                classNamePrefix="select"
                                isClearable={isClearable}
                                isSearchable={isSearchable}
                                name="servertype"
                                options={ServerTypeOptions}
                            />
                        </div>
                    </div>

                    {/* Segundo servidor */}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username2" className="flex items-center space-x-2 font-semibold  mb-1">
                                <FaUser /> <span>Nombre de usuario</span>
                            </label>
                            <input
                                type="text"
                                id="username2"
                                placeholder="Usuario del servidor nuevo"
                                className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="sftp2" className="flex items-center space-x-2 font-semibold  mb-1">
                                <FaServer /> <span>Dirección SFTP</span>
                            </label>
                            <input
                                type="text"
                                id="sftp2"
                                placeholder="sftp://example.com"
                                className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password2" className="flex items-center space-x-2 font-semibold  mb-1">
                                <FaLock /> <span>Contraseña SFTP</span>
                            </label>
                            <input
                                type="password"
                                id="password2"
                                placeholder="Contraseña segura"
                                className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="servertype" className='flex items-center space-x-2 font-semibold mb-1'>
                                <TbServer2 /> <span>Tipo de servidor</span>
                            </label>
                            <Select
                                className="w-full p-3 rounded-lg gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                classNamePrefix="select"
                                isClearable={isClearable}
                                isSearchable={isSearchable}
                                name="servertype"
                                options={ServerTypeOptions}
                            />
                        </div>
                    </div>
                </div>

                {/* Botón de acción */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setStep(step + 1)}
                        className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    >Iniciar migración
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MigrationForm;