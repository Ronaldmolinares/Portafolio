import { Project } from "@/types/project";

export const OTHER_PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Tic Tac Toe Game',
        category: 'Desktop • Java',
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
        shortDescription: 'Proyecto académico de Arquitectura de Computadores sobre un sistema capaz de alertar posibles incendios.',
        longDescription: 'QUYCA es una solución tecnológica desarrollada para apoyar la detección temprana de incendios forestales en los páramos de Boyacá, ecosistemas fundamentales para la regulación hídrica, la captura de carbono y la conservación de la biodiversidad. Debido a que la detección de incendios en estas zonas depende principalmente de la observación manual realizada por campesinos y autoridades, la respuesta suele ser tardía, incrementando el riesgo de propagación del fuego y el impacto ambiental.\n\nEl proyecto propone un sistema de monitoreo inteligente basado en dispositivos IoT y visión por computador, capaz de detectar de manera temprana posibles focos de incendio y generar alertas para facilitar una respuesta oportuna. La solución integra sensores ambientales, una cámara ESP32-CAM y una Raspberry Pi para la captura y procesamiento de información, incorporando modelos de inteligencia artificial para apoyar la identificación automática de eventos asociados a incendios. Con este enfoque, QUYCA busca fortalecer las estrategias de prevención y monitoreo ambiental mediante el uso de tecnologías emergentes, contribuyendo a la protección de uno de los ecosistemas más importantes de Colombia.',
        tags: ['Python', 'C++', 'JavaScript', 'HTML'],
        collaborators: [
            { name: 'Karen Peña', github: 'https://github.com/KarenSuarez4' },
            { name: 'Maria Sogamoso', github: 'https://github.com/maria-sogamoso' },
            { name: 'Lunna Sosa', github: 'https://github.com/lunna21' },
        ],
        github: 'https://github.com/Ronaldmolinares/QUYCA',
        demo: '',
        images: ['/projects/quyca/quyca.webp'],
    },
    {
        id: 3,
        title: 'DBSCAN',
        category: 'Machine Learning • Clustering',
        year: '2025',
        shortDescription: 'Implementación práctica en Python del algoritmo DBSCAN, un método de clustering basado en densidad.',
        longDescription: 'Este proyecto consiste en una implementación completa del algoritmo DBSCAN (Density-Based Spatial Clustering of Applications with Noise) desarrollada desde cero en Python, sin depender de implementaciones preexistentes del algoritmo. La aplicación permite realizar tareas de agrupamiento sobre diferentes conjuntos de datos mediante una interfaz gráfica intuitiva, facilitando la exploración y comprensión del comportamiento del algoritmo.\n\nAdemás de la implementación del algoritmo, el sistema incorpora herramientas para el análisis y evaluación de resultados, incluyendo métricas como Silhouette Score, Davies-Bouldin Index, Adjusted Rand Index y la proporción de valores atípicos (Outlier Ratio). También integra un K-Distance Graph para apoyar la selección del parámetro ε (epsilon) y permite comparar visualmente el desempeño de DBSCAN frente a algoritmos como K-Means y Hierarchical Agglomerative Clustering (HAC) mediante gráficos y tablas comparativas.',
        tags: ['Python', 'Tkinter'],
        collaborators: [],
        github: 'https://github.com/Ronaldmolinares/DBSCAN',
        demo: '',
        images: ['/projects/dbscan/dbscan.webp'],
    }
    ,
    {
        id: 4,
        title: 'Predicción Copa Mundial FIFA 1930-2022',
        category: 'Machine Learning',
        year: '2025',
        shortDescription: 'Exploración y análisis de datos históricos de Copas Mundiales FIFA para identificar patrones.',
        longDescription: 'Este proyecto implementa una solución integral de Machine Learning para el análisis y predicción de resultados de la Copa Mundial FIFA utilizando información histórica de los torneos disputados entre 1930 y 2022. El desarrollo sigue la metodología CRISP-DM, abarcando todas las etapas del ciclo de vida de un proyecto de ciencia de datos: análisis exploratorio, preparación de datos, ingeniería de características, entrenamiento de modelos, evaluación y despliegue.\n\nEl sistema incorpora un modelo supervisado basado en Random Forest para predecir el resultado de los partidos (victoria local, empate o victoria visitante) y un modelo no supervisado mediante K-Means para identificar perfiles de rendimiento histórico de las selecciones nacionales. Durante el proceso de ingeniería de características se aplicaron estrategias para evitar data leakage, garantizando que las predicciones utilicen únicamente información disponible antes de cada partido.\n\nComo parte del despliegue, la solución ofrece dos interfaces complementarias: una aplicación de escritorio desarrollada con Tkinter para ejecutar el pipeline completo de entrenamiento y análisis, y una aplicación web respaldada por FastAPI que permite realizar simulaciones de partidos y consultar perfiles de equipos a través de una API REST. La arquitectura modular facilita la reutilización de modelos entrenados, la escalabilidad del sistema y una separación clara entre procesamiento de datos, modelos e interfaces de usuario.',
        tags: ['Python', 'FastAPI', 'Scikit-learn', 'Random Forest', 'K-Means', 'HTML', 'CSS', 'JavaScript'],
        collaborators: [{ name: 'Maria Sogamoso', github: 'https://github.com/maria-sogamoso' }],
        github: 'https://github.com/Ronaldmolinares/Predicci-n-Copa-Mundial-FIFA-1930-2022',
        demo: '',
        images: ['/projects/machine-learning/fifa33.webp',
            '/projects/machine-learning/fifa2.webp',
            '/projects/machine-learning/fifa3.webp',
            '/projects/machine-learning/fifa4.webp'
        ],
    }
    ,
    {
        id: 5,
        title: 'Cifrando y Descifrando',
        category: 'Criptografía • Cifrado César • Cifrado Vigenère',
        year: '2025',
        shortDescription: 'Aplicación CLI para cifrar y descifrar texto mediante los algoritmos César y Vigenère.',
        longDescription: 'Herramienta de línea de comandos desarrollada en Python para implementar y comprender el funcionamiento de dos de los algoritmos criptográficos clásicos más representativos: César y Vigenère. El proyecto fue diseñado con una arquitectura modular que separa la lógica de los algoritmos, el procesamiento del texto, la validación de claves y la interfaz de ejecución, facilitando el mantenimiento y la extensibilidad del sistema.\n\nLa aplicación incorpora dos estrategias de normalización del texto: un modo Strict, que únicamente acepta caracteres alfabéticos, y un modo Lax, que elimina automáticamente espacios, acentos y signos de puntuación antes del cifrado, permitiendo posteriormente reconstruir el texto original durante el descifrado. Además, implementa validaciones para garantizar la integridad de las claves utilizadas por cada algoritmo y cuenta con un conjunto de pruebas automatizadas que verifican el correcto funcionamiento de los procesos de cifrado, descifrado y normalización.\n\nEste proyecto permite comprender los fundamentos matemáticos de la criptografía clásica mientras aplica principios de diseño de software, modularidad, validación de datos y desarrollo orientado a pruebas.',
        tags: ['Python', 'CLI'],
        collaborators: [],
        github: 'https://github.com/Ronaldmolinares/Cifrando-y-descifrando',
        demo: '',
        images: ['/projects/criptografia/terminal.webp'],
    }
];