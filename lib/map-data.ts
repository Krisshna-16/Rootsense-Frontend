export const CAMPUS_CENTER: [number, number] = [12.9716, 77.5946]; // Bangalore coordinates as example

export interface MapItem {
    id: number;
    lat: number;
    lng: number;
    title: string;
    description?: string;
    type: 'tree' | 'issue';
    status?: 'healthy' | 'warning' | 'critical' | 'resolved';
}

export const mapData: MapItem[] = [
    // Trees
    { id: 1, lat: 12.9718, lng: 77.5948, title: "Neem Tree #102", type: "tree", status: "healthy", description: "Mature Neem tree, approx 15 years old." },
    { id: 2, lat: 12.9719, lng: 77.5944, title: "Banyan Tree #45", type: "tree", status: "healthy", description: "Large canopy, good condition." },
    { id: 3, lat: 12.9715, lng: 77.5942, title: "Mango Tree #88", type: "tree", status: "warning", description: "Signs of fungal infection on leaves." },
    { id: 4, lat: 12.9721, lng: 77.5947, title: "Gulmohar #12", type: "tree", status: "healthy", description: "Flowering season approaching." },
    { id: 5, lat: 12.9713, lng: 77.5949, title: "Teak #05", type: "tree", status: "healthy", description: "Young sapling, recently planted." },

    // Issues
    { id: 101, lat: 12.9717, lng: 77.5945, title: "Broken Irrigation Pipe", type: "issue", status: "critical", description: "Water leaking near the central walkway." },
    { id: 102, lat: 12.9720, lng: 77.5949, title: "Dumped Waste", type: "issue", status: "warning", description: "Organic waste piled up behind the canteen." },
    { id: 103, lat: 12.9714, lng: 77.5943, title: "Damaged Tree Guard", type: "issue", status: "resolved", description: "Metal guard bent, needs repair." },
];
