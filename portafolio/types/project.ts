export interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    shortDescription: string;
    longDescription: string;
    tags: string[];
    collaborators: { name: string; github: string }[];
    github: string;
    demo: string;
    images: string[];
}