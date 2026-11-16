import { NavLink, Link, Outlet } from "react-router-dom"; // Am adăugat Link aici
import styles from "./Layout.module.css";

function navClass({ isActive }) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>
                    {/* Am transformat span-ul într-un Link către "/" */}
                    <Link to="/" className={styles.logo}>
                        🍔 Byte &amp; Bite
                    </Link>

                    <nav className={styles.nav} data-testid="nav">
                        <NavLink to="/" end className={navClass}>
                            Comenzi
                        </NavLink>
                        <NavLink to="/despre" className={navClass}>
                            Despre
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>Proiect Tehnologii Web - Byte & Bite</footer>
        </>
    );
}