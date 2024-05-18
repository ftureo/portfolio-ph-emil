export const Album = ({ album, index }) => {
    return (
        <div
            className={`container flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }
            flex-col sm:items-center sm:justify-center
            smooth-appearance
            `}
        >
            <div className="w-1/2 p-8">
                <img
                    src={album.coverPhoto}
                    alt={album.title}
                    className="w-full h-auto"
                />
            </div>
            <div className="w-1/2 p-4 flex flex-col items-center">
                <h2 className="text-xl font-bold">{album.title}</h2>
                <p>{album.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2">
                    Ver más
                </button>
            </div>
        </div>
    );
};
