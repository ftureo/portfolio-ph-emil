import { Link } from "react-router-dom";
import { paths } from "../routes/paths";

export const Header = () => {
    return (
        <header>
            <div>
                <Link to={paths.HOME}>
                    <img src="https://cdn-icons-png.flaticon.com/256/5904/5904483.png" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={paths.MAIN_ALBUM}>Principal</Link>
                    </li>
                    <li>
                        <Link to={paths.SPECIAL_ALBUM}>Especial</Link>
                    </li>
                    <li>
                        <Link to={paths.ABOUT_ME}>Sobre mí</Link>
                    </li>
                    <li>
                        <Link to={paths.SHOP}>Shop</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
