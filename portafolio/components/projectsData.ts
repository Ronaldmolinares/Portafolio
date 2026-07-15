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

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "ByteDental",
        category: "FULLSTACK • FASTAPI • REACT",
        year: "2025",
        shortDescription: "Sistema de gestión de clínicas dentales con historiales clínicos SOAP, control de roles y auditoría automatizada.",
        longDescription: "ByteDental es una plataforma full-stack desarrollada a medida para la clínica Oral Center White, diseñada para optimizar la gestión integral de consultorios dentales. El sistema centraliza la administración de pacientes, historiales clínicos bajo el formato SOAP, seguimiento de tratamientos y un control de accesos basado en roles (RBAC). Para garantizar la integridad de los datos, implementa auditorías automatizadas mediante triggers en PostgreSQL. La solución incluye autenticación con Google OAuth, recuperación de contraseñas por OTP, reportería en PDF/JSON, un dashboard analítico y notificaciones por correo electrónico.\n\nEl desarrollo se ejecutó bajo metodologías ágiles a lo largo de 4 sprints, donde desempeñé roles rotativos en frontend, backend, QA, DevOps y liderazgo de proyecto. El ciclo cerró con éxito mediante la entrega formal, documentación técnica detallada, pruebas de validación y la sustentación final del software.",
        tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Firebase'],
        collaborators: [
            { name: 'Camilo Andres Arias Tenjo', github: 'https://github.com/CamiloAT' },
            { name: 'Karen Juliana Peña Suarez', github: 'https://github.com/KarenSuarez4' },
            { name: 'Maria Fernanda Sogamoso González', github: 'https://github.com/maria-sogamoso' },
            { name: 'Lunna Karina Sosa Espitia', github: 'https://github.com/lunna21' },
        ],
        github: 'https://github.com/Ronaldmolinares/ByteDental',
        demo: '',
        images: [
            '/projects/byte-dental/app-photo-1.webp',
            '/projects/byte-dental/app-photo-11.webp',
            '/projects/byte-dental/app-photo-10.webp',
            '/projects/byte-dental/app-photo-4.webp',
            '/projects/byte-dental/app-photo-5.webp',
            '/projects/byte-dental/app-photo-6.webp',
            '/projects/byte-dental/app-photo-7.webp',
            '/projects/byte-dental/app-photo-8.webp',
            '/projects/byte-dental/app-photo-9.webp',
            '/projects/byte-dental/app-photo-2.webp',
            '/projects/byte-dental/app-photo-3.webp',
        ],
    },
    {
        id: 2,
        title: "SimuBomber Caos Simulation",
        category: "Caminatas Aleatorias • M/M/1 • Monte Carlo • Dinámica de Sistemas • Basado en Agentes",
        year: "2026",
        shortDescription: "Proyecto que modela fenómenos complejos dentro de un entorno de juego, combinando enfoques como caminatas aleatorias, simulación de colas, Monte Carlo, dinámica de sistemas y modelado basado en agentes (ABM).",
        longDescription: "SimuBomber Caos Simulation es un proyecto de simulación desarrollado en Python que propone una aproximación integral al análisis de sistemas complejos a través de una experiencia tipo juego. Su principal valor está en la integración de cinco metodologías complementarias: Caminatas Aleatorias, Simulación de Colas, Métodos de Monte Carlo, Dinámica de Sistemas y Modelado Basado en Agentes (ABM).\n\nA través de esta combinación, el proyecto permite representar comportamientos emergentes, evaluar escenarios con incertidumbre y analizar interacciones entre múltiples entidades y variables del sistema. Esta arquitectura híbrida fortalece tanto la capacidad de experimentación como la interpretación de resultados, aportando una base sólida para aplicaciones académicas, de investigación y de prototipado en simulación computacional.",
        tags: ['Python'],
        collaborators: [
            { name: 'Julian Reyes', github: 'https://github.com/julianReyes-dev' },
            { name: 'Karen Peña', github: 'https://github.com/KarenSuarez4' },
            { name: 'Maria Sogamoso', github: 'https://github.com/maria-sogamoso' },
            { name: 'Stefanny Arias', github: 'https://github.com/StefannyArias17' },
        ],
        github: 'https://github.com/Ronaldmolinares/simubomber-caos-simulation',
        demo: '',
        images: [
            '/projects/simu-bomber-caos/simu-bomber-1.webp',
            '/projects/simu-bomber-caos/simu-bomber-2.webp',
            '/projects/simu-bomber-caos/simu-bomber-3.webp',
            '/projects/simu-bomber-caos/simu-bomber-4.webp',
            '/projects/simu-bomber-caos/simu-bomber-5.webp',
            '/projects/simu-bomber-caos/simu-bomber-6.webp',
            '/projects/simu-bomber-caos/simu-bomber-7.webp',
            '/projects/simu-bomber-caos/simu-bomber-8.webp',
        ],
    },
];