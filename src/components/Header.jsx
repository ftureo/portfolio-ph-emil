import { Link } from "react-router-dom";
import { paths } from "../routes/paths";

export const Header = () => {
    return (
        <header className="py-4 container mx-auto flex justify-between items-center lg:px-12">
            <div className="container w-48">
                <Link to={paths.HOME}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/256/5904/5904483.png"
                        alt="logo_navbar"
                        className="h-12"
                    />
                </Link>
            </div>
            <nav className="hidden md:block">
                <ul className="flex space-x-8">
                    <li className="w-24">
                        <Link to={paths.ALBUMES}>Álbumes</Link>
                    </li>
                    <li>
                        <Link to={paths.ABOUT_ME}>Sobre mí</Link>
                    </li>
                    <li>
                        <Link to={paths.SHOP}>Shop</Link>
                    </li>
                </ul>
            </nav>
            <div className="md:hidden">
                <svg
                    enableBackground="new 0 0 32 32"
                    id="Glyph"
                    version="1.1"
                    viewBox="0 0 32 32"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={48}
                >
                    <path
                        d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"
                        id="XMLID_314_"
                    />
                    <path
                        d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"
                        id="XMLID_315_"
                    />
                    <path
                        d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"
                        id="XMLID_316_"
                    />
                </svg>
            </div>
        </header>
    );
};
