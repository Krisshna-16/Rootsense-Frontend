"use client"

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapItem, mapData, CAMPUS_CENTER } from '@/lib/map-data'
import { TreePine, AlertTriangle, CheckCircle, Info } from 'lucide-react'

// Fix for default Leaflet markers in Next.js
const iconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png'
const shadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'

const defaultIcon = L.icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
})

// Custom Icons could be added here using L.divIcon if needed for more customization

export default function LeafletMap() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="h-full w-full bg-gray-100 animate-pulse rounded-lg" />

    return (
        <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-xl border-2 border-[#2d5016]/20 relative z-0">
            <MapContainer
                center={CAMPUS_CENTER}
                zoom={18}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {mapData.map((item) => (
                    <Marker
                        key={item.id}
                        position={[item.lat, item.lng]}
                        icon={defaultIcon} // Using default for now, can be customized later
                    >
                        <Popup className="custom-popup">
                            <div className="p-2 min-w-[200px]">
                                <div className="flex items-center gap-2 mb-2">
                                    {item.type === 'tree' ? (
                                        <div className="p-1.5 bg-[#2d5016]/10 rounded-full">
                                            <TreePine className="w-4 h-4 text-[#2d5016]" />
                                        </div>
                                    ) : (
                                        <div className="p-1.5 bg-red-100 rounded-full">
                                            <AlertTriangle className="w-4 h-4 text-red-600" />
                                        </div>
                                    )}
                                    <h3 className="font-bold text-[#1a3a1a]">{item.title}</h3>
                                </div>

                                <p className="text-sm text-gray-600 mb-2">{item.description}</p>

                                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.status === 'healthy' ? 'bg-green-100 text-green-700' :
                                            item.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                                                item.status === 'critical' ? 'bg-red-100 text-red-700' :
                                                    'bg-blue-100 text-blue-700'
                                        }`}>
                                        {item.status?.toUpperCase()}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {item.lat.toFixed(4)}, {item.lng.toFixed(4)}
                                    </span>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {/* Heatmap/Circle overlays for visual density */}
                {mapData.filter(i => i.type === 'tree').map(tree => (
                    <Circle
                        key={`circle-${tree.id}`}
                        center={[tree.lat, tree.lng]}
                        radius={8}
                        pathOptions={{ color: '#2d5016', fillColor: '#2d5016', fillOpacity: 0.2, weight: 0 }}
                    />
                ))}

                {mapData.filter(i => i.type === 'issue').map(issue => (
                    <Circle
                        key={`circle-${issue.id}`}
                        center={[issue.lat, issue.lng]}
                        radius={10}
                        pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.2, weight: 0 }}
                    />
                ))}

            </MapContainer>
        </div>
    )
}
