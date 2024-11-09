'use client'

import { useState } from 'react'
import Button from "./ui/powerButtons"
import Card from "./ui/card"

export default function Component() {
    const [serverStatus, setServerStatus] = useState('stopped')

    const handlePowerAction = () => {
        setServerStatus(serverStatus === 'stopped' ? 'running' : 'running')
    }

    // SVG icons as components
    const WifiIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
    )

    const ClockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )

    const CpuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
    )

    const MemoryIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 4v16" />
            <path d="M12 4v16" />
            <path d="M16 4v16" />
        </svg>
    )

    const DiskIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )

    const CloudIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
    )

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Demo server</h1>
                    <div className="flex gap-2">
                        <Button status={serverStatus} onClick={handlePowerAction} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6">
                    <div className="bg-gray-800 rounded-lg p-4 min-h-[600px] relative">
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                            <input
                                type="text"
                                placeholder="Type a command..."
                                className="w-full bg-transparent outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <WifiIcon />
                                <div>
                                    <div className="text-sm text-gray-400">Address</div>
                                    <div className="text-gray-300">localhost:3000</div>
                                </div>
                            </div>
                        </Card>

                        {serverStatus === 'stopped' ? (
                            <Card className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <CloudIcon />
                                    <div>
                                        <div className="text-sm text-gray-400">Server status</div>
                                        <div className="text-gray-300">Offline</div>
                                    </div>
                                </div>
                            </Card>
                        ) : (
                            <div>
                                <Card className="bg-gray-800 p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <ClockIcon />
                                        <div>
                                            <div className="text-sm text-gray-400">Uptime</div>
                                            <div className="text-gray-300">{Math.floor(Math.random() * 30)}d {Math.floor(Math.random() * 24)}h {Math.floor(Math.random() * 60)}m</div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="bg-gray-800 p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <CpuIcon />
                                        <div>
                                            <div className="text-sm text-gray-400">CPU Load</div>
                                            <div className="text-gray-300">{(Math.random() * 100).toFixed(2)}% / 100%</div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="bg-gray-800 p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <MemoryIcon />
                                        <div>
                                            <div className="text-sm text-gray-400">Memory</div>
                                            <div className="text-gray-300">{(Math.random() * 900).toFixed(2)} MB / 1 GB</div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="bg-gray-800 p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <DiskIcon />
                                        <div>
                                            <div className="text-sm text-gray-400">Disk</div>
                                            <div className="text-gray-300">{(Math.random() * 500).toFixed(2)} MB / 1 GB</div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="bg-gray-800 p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <CloudIcon />
                                        <div>
                                            <div className="text-sm text-gray-400">Network usage</div>
                                            <div className="text-gray-300">{(Math.random() * 1000).toFixed(2)} KB / {(Math.random() * 1000).toFixed(2)} KB</div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}