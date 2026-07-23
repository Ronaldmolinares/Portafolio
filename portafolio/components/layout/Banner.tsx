interface BannerProps {
    text: string;
}

export const Banner = ({ text }: BannerProps) => {
    return (
        <div className="relative inline-flex items-center justify-center mx-6 my-2 select-none group shrink-0">

            {/* 1. EXTREMO IZQUIERDO (Banderilla trasera - Púrpura oscuro) */}
            <div
                className="absolute right-[calc(100%-2px)] bottom-[-6px] h-[calc(100%-2px)] w-[32px] bg-purple-900 z-0 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,35%_50%)] border-l border-purple-500/30 transition-colors duration-300 group-hover:bg-purple-800"
                aria-hidden="true"
            />

            {/* 2. EXTREMO DERECHO (Banderilla trasera - Índigo oscuro) */}
            <div
                className="absolute left-[calc(100%-2px)] bottom-[-6px] h-[calc(100%-2px)] w-[32px] bg-indigo-900 z-0 [clip-path:polygon(100%_0%,0%_0%,0%_100%,100%_100%,65%_50%)] border-r border-indigo-500/30 transition-colors duration-300 group-hover:bg-indigo-800"
                aria-hidden="true"
            />

            {/* 3. DOBLEZ INFERIOR IZQUIERDO (Sombra del pliegue) */}
            <div
                className="absolute -bottom-[6px] left-0 w-[10px] h-[6px] bg-purple-950 z-10 [clip-path:polygon(0_0,100%_0,100%_100%)]"
                aria-hidden="true"
            />

            {/* RELLENO DETRÁS DEL DOBLEZ IZQUIERDO */}
            <div
                className="absolute right-[calc(100%-1px)] -mr-[9px] bottom-[-6px] w-[10px] h-[6px] bg-purple-900 z-0 [clip-path:polygon(0_0,100%_100%,0_100%)] transition-colors duration-300 group-hover:bg-purple-800"
                aria-hidden="true"
            />

            {/* 4. DOBLEZ INFERIOR DERECHO (Sombra del pliegue) */}
            <div
                className="absolute -bottom-[6px] right-0 w-[10px] h-[6px] bg-purple-950 z-10 [clip-path:polygon(0_0,100%_0,0_100%)]"
                aria-hidden="true"
            />

            {/* RELLENO DETRÁS DEL DOBLEZ DERECHO */}
            <div
                className="absolute left-[calc(100%-1px)] -ml-[9px] bottom-[-6px] w-[10px] h-[6px] bg-indigo-900 z-0 [clip-path:polygon(100%_0,100%_100%,0_100%)] transition-colors duration-300 group-hover:bg-indigo-800"
                aria-hidden="true"
            />

            {/* 5. BANNER PRINCIPAL (Tus clases personalizadas) */}
            <div className="relative z-20 px-8 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-atkinson font-medium rounded-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 text-center flex items-center justify-center">
                <span className="relative z-30 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    {text}
                </span>
            </div>

        </div>
    );
};

export default Banner;