export interface First_Project {
    id: number;
    slug: string;

    title: string;
    subtitle: string;

    category: string;
    year: string;

    shortDescription: string;
    longDescription: string;

    role: string;
    duration: string;

    tags: string[];

    collaborators: {
        name: string;
        github: string;
    }[];

    github: string;
    demo?: string;

    coverImage: string;
    images: {
        src: string;
        title: string;
        description: string;
    }[];

    challenge: string;
    solution: string;

    results: string[];

    learnings: string[];

    accentColor: string;
}