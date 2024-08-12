import { Link } from "react-router-dom";

export default function Layout ({children}) {
    return <>
        <div id="mobile-sized-container">
            <nav>
                <Link className="button" to="/">Quest tracker</Link>
            </nav>
            {children}
        </div>
    </>
}