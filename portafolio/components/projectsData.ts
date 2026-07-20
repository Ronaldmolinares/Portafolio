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
        category: "Fullstack • FastAPI • React",
        year: "2025",
        shortDescription: "Sistema de gestión de clínicas dentales con historiales clínicos SOAP, control de roles y auditoría automatizada.",
        longDescription: "ByteDental es una plataforma full-stack desarrollada a medida para la clínica Oral Center White, diseñada para optimizar la gestión integral de consultorios dentales. El sistema centraliza la administración de pacientes, historiales clínicos bajo el formato SOAP, seguimiento de tratamientos y un control de accesos basado en roles (RBAC). Para garantizar la integridad de los datos, implementa auditorías automatizadas mediante triggers en PostgreSQL. La solución incluye autenticación con Google OAuth, recuperación de contraseñas por OTP, reportería en PDF/JSON, un dashboard analítico y notificaciones por correo electrónico.\n\nEl desarrollo se ejecutó bajo metodologías ágiles a lo largo de 4 sprints, donde desempeñé roles rotativos en frontend, backend, QA, DevOps y liderazgo de proyecto. El ciclo cerró con éxito mediante la entrega formal, documentación técnica detallada, pruebas de validación y la sustentación final del software.",
        tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Firebase'],
        collaborators: [
            { name: 'Camilo Arias', github: 'https://github.com/CamiloAT' },
            { name: 'Karen Peña', github: 'https://github.com/KarenSuarez4' },
            { name: 'Maria Sogamoso', github: 'https://github.com/maria-sogamoso' },
            { name: 'Lunna Sosa', github: 'https://github.com/lunna21' },
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
    {
        id: 3,
        title: "ConectAgro",
        category: "E-commerce • Web Development",
        year: "2025",
        shortDescription: "ConectAgreo es un E-commerce que conecta productores agrícolas con consumidores, facilitando la comercialización de productos frescos mediante una experiencia intuitiva, accesible y optimizada para dispositivos móviles.",
        longDescription: "ConectAgro es una plataforma web de comercio electrónico desarrollada para fortalecer la comercialización de productos agrícolas mediante la conexión directa entre productores y consumidores. El proyecto ofrece una interfaz intuitiva que permite explorar productos, consultar información relevante y gestionar el proceso de compra de manera sencilla.\n\nDurante su desarrollo se aplicaron principios de diseño responsivo, organización modular del código y buenas prácticas de desarrollo frontend para construir una aplicación moderna, accesible y fácil de mantener. El proyecto busca mejorar la experiencia de los usuarios y promover el acceso a mercados digitales para el sector agrícola.",
        tags: ['Docker', 'JavaScript', 'Node.js', 'Express.js', 'HTML', 'CSS', 'MySQL',],
        collaborators: [
            { name: 'Karen Peña', github: 'https://github.com/KarenSuarez4' },
            { name: 'Maria Sogamoso', github: 'https://github.com/maria-sogamoso' },
            { name: 'Lunna Sosa', github: 'https://github.com/lunna21' },
            { name: 'Katalina Torres', github: 'https://github.com/Katalinais' },
        ],
        github: 'https://github.com/Ronaldmolinares/ConectAgro',
        demo: '',
        images: [
            '/projects/conect-agro/conect-agro-5.webp',
            '/projects/conect-agro/conect-agro-6.webp',
            '/projects/conect-agro/conect-agro-8.webp',
            '/projects/conect-agro/conect-agro-77.webp',
            '/projects/conect-agro/conect-agro-1.webp',
            '/projects/conect-agro/conect-agro-2.webp',
            '/projects/conect-agro/conect-agro-3.webp',
            '/projects/conect-agro/conect-agro-4.webp',
            '/projects/conect-agro/conect-agro-9.webp',
            '/projects/conect-agro/conect-agro-10.webp',
            '/projects/conect-agro/conect-agro-11.webp',
        ],
    },
    {
        id: 4,
        title: "Balanceador de Cargas",
        category: "Sistema Distribuido • Docker • Balanceo de Carga L2 ",
        year: "2025",
        shortDescription: "Balanceador de carga de capa 2 orientado a entornos distribuidos, con visualización y control desde una interfaz web para distribuir tráfico entre servicios, mejorando disponibilidad y rendimiento.",
        longDescription: "Proyecto enfocado en el diseño e implementación de un balanceador de carga de capa 2 (L2) para la distribución de tráfico entre múltiples instancias de servicio dentro de una arquitectura distribuida. La solución aborda objetivos clave de infraestructura: disponibilidad, escalabilidad horizontal y mitigación de puntos únicos de fallo, mediante la asignación equilibrada de solicitudes hacia nodos backend.\n\nA nivel de implementación, el sistema incluye:\n\n • Módulo de lógica de balanceo en JavaScript para la gestión de rutas/distribución de tráfico.\n • Interfaz web (HTML/CSS/JS) para monitoreo básico, interacción y validación visual del comportamiento del balanceador.\n • Contenerización con Docker para estandarizar ejecución, aislar dependencias y facilitar pruebas reproducibles en distintos entornos.",
        tags: ['JavaScript', 'Node.js', 'Express.js', 'Docker', 'HTML', 'CSS', 'MySQL',],
        collaborators: [
            { name: 'Karen Peña', github: 'https://github.com/KarenSuarez4' },
            { name: 'Lunna Sosa', github: 'https://github.com/lunna21' },
        ],
        github: 'https://github.com/Ronaldmolinares/L2-Balanceador-de-cargas',
        demo: '',
        images: [
            '/projects/balanceador-carga/balanceador-1.webp',
            '/projects/balanceador-carga/balanceador-2.webp',
            '/projects/balanceador-carga/balanceador-3.webp',
            '/projects/balanceador-carga/balanceador-4.webp',
            '/projects/balanceador-carga/balanceador-5.webp',
        ],
    },
];



export const OTHER_PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Tic Tac Toe Game',
        category: 'Java',
        year: '2023',
        shortDescription: 'Juego clásico de Tic Tac Toe, persistencia de puntajes y UI personalizada.',
        longDescription: 'El proyecto Tres en Raya es una aplicación de escritorio desarrollada en Java que permite a un usuario humano competir contra una inteligencia artificial imbatible en un tablero clásico de 3x3. El sistema cuenta con una interfaz gráfica interactiva construida mediante Java Swing, la cual gestiona todo el flujo del juego desde el registro del apodo del jugador y la selección de su ficha preferida hasta la visualización de un tablero dinámico.\n\nLa lógica de la IA está gobernada por el algoritmo Minimax para garantizar decisiones óptimas en cada turno, mientras que las partidas finalizadas se almacenan de forma persistente en un registro histórico que detalla los nombres, los resultados y las fechas exactas de cada enfrentamiento. Este desarrollo académico utiliza el JDK versión 20, combina la programación orientada a objetos con estructuras de persistencia de datos simples para ofrecer una experiencia de juego completa y automatizada.',
        tags: ['Java', 'IDE', 'Swing'],
        collaborators: [{ name: 'Lunna Sosa', github: 'https://github.com/lunna21' }],
        github: 'https://github.com/Ronaldmolinares/Tic_Tac_Toe',
        demo: '',
        images: [
            '/projects/tic-tac-toe/tic-tac-toe-1.webp',
            '/projects/tic-tac-toe/tic-tac-toe-2.webp',
            '/projects/tic-tac-toe/tic-tac-toe-3.webp'
        ],
    },
    {
        id: 2,
        title: 'QUYCA',
        category: 'Raspberry Pi • ESP32-CAM',
        year: '2025',
        shortDescription: 'Proyecto académico de Arquitectura de Computadores que integra simulación y desarrollo de soluciones para analizar el funcionamiento, rendimiento y diseño de un sistema capaz de alertar posibles incendios.',
        longDescription: 'QUYCA es una solución tecnológica desarrollada para apoyar la detección temprana de incendios forestales en los páramos de Boyacá, ecosistemas fundamentales para la regulación hídrica, la captura de carbono y la conservación de la biodiversidad. Debido a que la detección de incendios en estas zonas depende principalmente de la observación manual realizada por campesinos y autoridades, la respuesta suele ser tardía, incrementando el riesgo de propagación del fuego y el impacto ambiental.\n\nEl proyecto propone un sistema de monitoreo inteligente basado en dispositivos IoT y visión por computador, capaz de detectar de manera temprana posibles focos de incendio y generar alertas para facilitar una respuesta oportuna. La solución integra sensores ambientales, una cámara ESP32-CAM y una Raspberry Pi para la captura y procesamiento de información, incorporando modelos de inteligencia artificial para apoyar la identificación automática de eventos asociados a incendios. Con este enfoque, QUYCA busca fortalecer las estrategias de prevención y monitoreo ambiental mediante el uso de tecnologías emergentes, contribuyendo a la protección de uno de los ecosistemas más importantes de Colombia.',
        tags: ['Python', 'C++', 'JavaScript', 'HTML'],
        collaborators: [
            { name: 'Karen Peña', github: 'https://github.com/KarenSuarez4' },
            { name: 'Maria Sogamoso', github: 'https://github.com/maria-sogamoso' },
            { name: 'Lunna Sosa', github: 'https://github.com/lunna21' },
        ],
        github: 'https://github.com/Ronaldmolinares/QUYCA',
        demo: '',
        images: ['projects/quyca/quyca.webp'],
    },
    {
        id: 3,
        title: 'DBSCAN',
        category: 'Aprendizaje Supervisado',
        year: '2025',
        shortDescription: 'Implementación práctica en Python del algoritmo DBSCAN, un método de clustering basado en densidad. Se explora el funcionamiento del algoritmo, facilitando su comprensión y uso en problemas de análisis de datos.',
        longDescription: 'Este proyecto consiste en una implementación completa del algoritmo DBSCAN (Density-Based Spatial Clustering of Applications with Noise) desarrollada desde cero en Python, sin depender de implementaciones preexistentes del algoritmo. La aplicación permite realizar tareas de agrupamiento sobre diferentes conjuntos de datos mediante una interfaz gráfica intuitiva, facilitando la exploración y comprensión del comportamiento del algoritmo.\n\nAdemás de la implementación del algoritmo, el sistema incorpora herramientas para el análisis y evaluación de resultados, incluyendo métricas como Silhouette Score, Davies-Bouldin Index, Adjusted Rand Index y la proporción de valores atípicos (Outlier Ratio). También integra un K-Distance Graph para apoyar la selección del parámetro ε (epsilon) y permite comparar visualmente el desempeño de DBSCAN frente a algoritmos como K-Means y Hierarchical Agglomerative Clustering (HAC) mediante gráficos y tablas comparativas.',
        tags: ['Python'],
        collaborators: [],
        github: 'https://github.com/Ronaldmolinares/DBSCAN',
        demo: '',
        images: ['projects/dbscan/dbscan.webp'],
    }
    ,
    {
        id: 4,
        title: 'Predicción Copa Mundial FIFA 1930-2022',
        category: 'Machine Learning',
        year: '2025',
        shortDescription: 'Exploración y análisis de datos históricos de Copas Mundiales FIFA para identificar patrones, tendencias y factores que influyen en el rendimiento de los equipos y predicción de resultados.',
        longDescription: '',
        tags: ['Python', 'FastAPI', 'Scikit-learn', 'Random Forest', 'K-Means', 'HTML', 'CSS', 'JavaScript'],
        collaborators: [],
        github: 'https://github.com/Ronaldmolinares/Predicci-n-Copa-Mundial-FIFA-1930-2022',
        demo: '',
        images: [''],
    }
    ,
    {
        id: 5,
        title: 'Cifrando y Descifrando',
        category: ' • ',
        year: '2025',
        shortDescription: '',
        longDescription: '',
        tags: [''],
        collaborators: [],
        github: 'https://github.com/Ronaldmolinares/Cifrando-y-descifrando',
        demo: '',
        images: [],
    }
];