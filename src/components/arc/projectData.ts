export const projects = [
  { 
    id: 1, 
    title: "Concrete House", 
    category: "Residential", 
    loc: "Kyoto, Japan", 
    year: "2025",
    area: "450 m²",
    client: "Private",
    img: "https://images.unsplash.com/photo-1758972581195-c27b9d3b1c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb20lMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcwMjg0MDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
        headline: "Privacy in Density",
        text: "Kyoto's residential fabric is dense and chaotic. The client desired absolute privacy without sacrificing natural light, a paradox in urban Japan.",
        impact: "A fortress of solitude that captures the sky."
    },
    process: {
        step1: { title: "Inversion", desc: "Turning the house inward around a central courtyard." },
        step2: { title: "Light Mapping", desc: "Calculated apertures to track the sun's path throughout the year." },
        sketch: "https://images.unsplash.com/photo-1612171742307-341fb036ba03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwc2tldGNoJTIwaGFuZCUyMGRyYXduJTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBsYW58ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    materials: [
        { title: "Raw Concrete", desc: "Board-formed texture", img: "https://images.unsplash.com/photo-1765351521275-d89d1569d529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHRleHR1cmUlMjBtYWNybyUyMGRhcmt8ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Cedar Wood", desc: "Local sourcing", img: "https://images.unsplash.com/photo-1768578927019-8be9eb339fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBiZWRyb29tJTIwY29uY3JldGUlMjB3b29kfGVufDF8fHx8MTc3MDI4NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Black Steel", desc: "Matte finish", img: "https://images.unsplash.com/photo-1585184671033-e1d93dc099db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJ1aWxkaW5nJTIwZ2VvbWV0cnklMjBsaWdodCUyMGFuZCUyMHNoYWRvdyUyMGJ3fGVufDF8fHx8MTc3MDMyNzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080" }
    ],
    stats: [
        { val: "A+", label: "Energy Rating" },
        { val: "100%", label: "Privacy" },
        { val: "450", label: "Sqm Area" },
        { val: "24mo", label: "Build Time" }
    ]
  },
  { 
    id: 2, 
    title: "Glass Pavilion", 
    category: "Commercial", 
    loc: "Oslo, Norway", 
    year: "2024",
    area: "1,200 m²",
    client: "Nordic Arts Foundation",
    img: "https://images.unsplash.com/photo-1770146604974-c7067f0dc8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyYWwlMjBkZXRhaWwlMjBjb25jcmV0ZSUyMGdsYXNzfGVufDF8fHx8MTc3MDI4NDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
        headline: "Invisible Architecture",
        text: "How do you build a museum that doesn't compete with the art? The goal was total transparency in a harsh climate.",
        impact: "A shelter that feels like the outdoors."
    },
    process: {
        step1: { title: "Suspension", desc: "Cantilevered roof structure to remove perimeter columns." },
        step2: { title: "Thermal Layering", desc: "Triple-glazing innovation for insulation." },
        sketch: "https://images.unsplash.com/photo-1612171742307-341fb036ba03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwc2tldGNoJTIwaGFuZCUyMGRyYXduJTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBsYW58ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    materials: [
        { title: "Low-Iron Glass", desc: "Maximum clarity", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDI4NjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "White Concrete", desc: "Polished finish", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMjg2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Aluminum", desc: "Anodized", img: "https://images.unsplash.com/photo-1553601581-8a1f1010efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZSUyMGdsYXNzJTIwZmFjYWRlfGVufDF8fHx8MTc3MDI4NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080" }
    ],
    stats: [
        { val: "Zero", label: "Emissions" },
        { val: "360°", label: "Views" },
        { val: "1.2k", label: "Sqm Area" },
        { val: "Intl", label: "Award Winner" }
    ]
  },
  { 
    id: 3, 
    title: "Void Tower", 
    category: "Commercial", 
    loc: "Berlin, Germany", 
    year: "2026",
    area: "25,000 m²",
    client: "TechSpace GmbH",
    img: "https://images.unsplash.com/photo-1553601581-8a1f1010efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZSUyMGdsYXNzJTIwZmFjYWRlfGVufDF8fHx8MTc3MDI4NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
        headline: "Silence in Chaos",
        text: "Berlin is dense. Noise is constant. We needed a structure that acted as a filter, not a barrier, creating a vertical sanctuary for work.",
        impact: "A new typology for the vertical campus."
    },
    process: {
        step1: { title: "Subtraction", desc: "Carving out the core to create a breathing atrium." },
        step2: { title: "Exoskeleton", desc: "Structural grid moved to exterior for flexible interiors." },
        sketch: "https://images.unsplash.com/photo-1612171742307-341fb036ba03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwc2tldGNoJTIwaGFuZCUyMGRyYXduJTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBsYW58ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    materials: [
        { title: "Dark Steel", desc: "Structural framing", img: "https://images.unsplash.com/photo-1585184671033-e1d93dc099db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJ1aWxkaW5nJTIwZ2VvbWV0cnklMjBsaWdodCUyMGFuZCUyMHNoYWRvdyUyMGJ3fGVufDF8fHx8MTc3MDMyNzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Smart Glass", desc: "Photo-chromatic", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lzY3JhcGVyJTIwYmVybGlufGVufDF8fHx8MTc3MDI4NjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Concrete", desc: "Core elements", img: "https://images.unsplash.com/photo-1765351521275-d89d1569d529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHRleHR1cmUlMjBtYWNybyUyMGRhcmt8ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080" }
    ],
    stats: [
        { val: "LEED", label: "Platinum" },
        { val: "-40%", label: "Energy Use" },
        { val: "25k", label: "Sqm Area" },
        { val: "40", label: "Stories" }
    ]
  },
  { 
    id: 4, 
    title: "The Bunker", 
    category: "Residential", 
    loc: "Reykjavik, Iceland", 
    year: "2023",
    area: "320 m²",
    client: "Private",
    img: "https://images.unsplash.com/photo-1761477101098-5451fb2c48cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvciUyMGNsb3VkeSUyMHNreXxlbnwxfHx8fDE3NzAyODQyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
        headline: "Elements of Nature",
        text: "Surviving the Icelandic winter requires more than just insulation. It requires a dialogue with the earth itself.",
        impact: "A home that is part of the landscape."
    },
    process: {
        step1: { title: "Submersion", desc: "Embedding the structure into the volcanic rock." },
        step2: { title: "Geothermal", desc: "Harvesting the earth's heat for zero-energy heating." },
        sketch: "https://images.unsplash.com/photo-1612171742307-341fb036ba03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwc2tldGNoJTIwaGFuZCUyMGRyYXduJTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBsYW58ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    materials: [
        { title: "Reinforced Concrete", desc: "Weather resistant", img: "https://images.unsplash.com/photo-1493397212122-2b85dba81867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHdhbGwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzAyODYzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Basalt Stone", desc: "Local cladding", img: "https://images.unsplash.com/photo-1765351521275-d89d1569d529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHRleHR1cmUlMjBtYWNybyUyMGRhcmt8ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Pine Timber", desc: "Warm interior", img: "https://images.unsplash.com/photo-1768578927019-8be9eb339fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBiZWRyb29tJTIwY29uY3JldGUlMjB3b29kfGVufDF8fHx8MTc3MDI4NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080" }
    ],
    stats: [
        { val: "100%", label: "Geothermal" },
        { val: "R-60", label: "Insulation" },
        { val: "320", label: "Sqm Area" },
        { val: "2", label: "Residents" }
    ]
  },
  { 
    id: 5, 
    title: "Minimalist Studio", 
    category: "Research", 
    loc: "Tokyo, Japan", 
    year: "2025",
    area: "150 m²",
    client: "ARC Internal",
    img: "https://images.unsplash.com/photo-1765371513276-a74f1ecbcf7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwbW9kZWwlMjBtaW5pbWFsJTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDI4NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
        headline: "Micro Living",
        text: "In a city where space is the ultimate luxury, how do we make small feel infinite?",
        impact: "A blueprint for the future of urban density."
    },
    process: {
        step1: { title: "Modularity", desc: "Walls that move and furniture that folds." },
        step2: { title: "Verticality", desc: "Using height to create distinct zones." },
        sketch: "https://images.unsplash.com/photo-1612171742307-341fb036ba03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwc2tldGNoJTIwaGFuZCUyMGRyYXduJTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBsYW58ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    materials: [
        { title: "Plywood", desc: "Birch finish", img: "https://images.unsplash.com/photo-1768578927019-8be9eb339fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBiZWRyb29tJTIwY29uY3JldGUlMjB3b29kfGVufDF8fHx8MTc3MDI4NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Paper", desc: "Shoji screens", img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHJvb218ZW58MXx8fHwxNzcwMjg2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Polycarbonate", desc: "Translucent walls", img: "https://images.unsplash.com/photo-1497215842964-222b430dc0a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDI4NjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080" }
    ],
    stats: [
        { val: "Flex", label: "Usage" },
        { val: "100%", label: "Recyclable" },
        { val: "150", label: "Sqm Area" },
        { val: "10+", label: "Configurations" }
    ]
  },
  { 
    id: 6, 
    title: "Zen Retreat", 
    category: "Residential", 
    loc: "Kyoto, Japan", 
    year: "2024",
    area: "200 m²",
    client: "Private",
    img: "https://images.unsplash.com/photo-1768578927019-8be9eb339fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBiZWRyb29tJTIwY29uY3JldGUlMjB3b29kfGVufDF8fHx8MTc3MDI4NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
        headline: "Modern Tradition",
        text: "Reinterpreting the Ryokan for modern life. How to maintain the spirit of the past while embracing contemporary comfort?",
        impact: "A timeless space for reflection."
    },
    process: {
        step1: { title: "Integration", desc: "Blurring the line between garden and house." },
        step2: { title: "Sensory", desc: "Focusing on sound, smell, and texture over visuals." },
        sketch: "https://images.unsplash.com/photo-1612171742307-341fb036ba03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwc2tldGNoJTIwaGFuZCUyMGRyYXduJTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBsYW58ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    materials: [
        { title: "Tatami", desc: "Woven rush", img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHJvb218ZW58MXx8fHwxNzcwMjg2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Clay Plaster", desc: "Breathable walls", img: "https://images.unsplash.com/photo-1765351521275-d89d1569d529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHRleHR1cmUlMjBtYWNybyUyMGRhcmt8ZW58MXx8fHwxNzcwMzI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
        { title: "Moss", desc: "Living garden", img: "https://images.unsplash.com/photo-1545084918-1c4ba2956c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBnYXJkZW58ZW58MXx8fHwxNzcwMjg2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080" }
    ],
    stats: [
        { val: "Silence", label: "Acoustics" },
        { val: "200", label: "Sqm Area" },
        { val: "100%", label: "Natural Mat." },
        { val: "1", label: "Garden" }
    ]
  }
];
