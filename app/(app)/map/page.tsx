"use client"

import dynamic from 'next/dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Map as MapIcon, Info, Layers } from "lucide-react"

// Dynamic import to avoid SSR issues with Leaflet
const LeafletMap = dynamic(() => import('@/components/map/LeafletMap'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-gray-100 animate-pulse rounded-xl" />
})

export default function MapPage() {
    return (
        <div className="p-4 sm:p-6 lg:p-8 min-h-screen bg-[#faf8f3]">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-[#1a3a1a] flex items-center gap-2">
                            <MapIcon className="h-8 w-8 text-[#d4af37]" />
                            Campus Map
                        </h1>
                        <p className="text-gray-600 mt-1">
                            Interactive view of tree distribution and civic issues
                        </p>
                    </div>
                </div>

                {/* Map Container */}
                <div className="grid gap-6 lg:grid-cols-3">

                    {/* Main Map */}
                    <div className="lg:col-span-2">
                        <LeafletMap />
                    </div>

                    {/* Sidebar / Legend */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="border-none shadow-lg bg-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Layers className="h-5 w-5 text-[#2d5016]" />
                                    Map Layers
                                </CardTitle>
                                <CardDescription>
                                    Real-time data visualization
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-[#2d5016]/5 rounded-lg border border-[#2d5016]/10">
                                    <div className="flex items-center gap-3">
                                        <span className="h-3 w-3 rounded-full bg-[#2d5016]" />
                                        <span className="font-medium text-[#1a3a1a]">Trees</span>
                                    </div>
                                    <span className="text-xs text-gray-500 font-mono">Live</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                                    <div className="flex items-center gap-3">
                                        <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                                        <span className="font-medium text-[#1a3a1a]">Civic Issues</span>
                                    </div>
                                    <span className="text-xs text-red-500 font-bold">Action Needed</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg bg-[#1a3a1a] text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Info className="h-5 w-5 text-[#d4af37]" />
                                    Quick Stats
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Total Trees Mapped</span>
                                    <span className="font-bold text-xl text-[#d4af37]">1,247</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Active Zones</span>
                                    <span className="font-bold text-xl">12</span>
                                </div>
                                <div className="pt-4 border-t border-gray-700">
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        Map data is updated every 15 minutes from field sensors and user reports.
                                        Click on any marker to view detailed status.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}
