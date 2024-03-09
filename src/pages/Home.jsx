import { Layout } from "../components/Layout";
import { Album } from "../components/Album";
import { albumData } from "../utils/album-data";

export const Home = () => {
    console.log(albumData);
    return (
        <Layout>
            <main className="container mx-auto">
                {albumData.map((album, index) => {
                    return <Album album={album} index={index} key={index} />;
                })}
            </main>
        </Layout>
    );
};
