import { useState, useEffect } from "react";
import ComandaList from "./components/ComandaList.jsx";
import { fetchComenzi } from "./api.js";

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [comenzi, setComenzi] = useState([]); // Array gol la început
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tema, setTema] = useState(temaInitiala);

    useEffect(() => {
        let ignore = false;

        async function load() {
            try {
                const data = await fetchComenzi();
                if (!ignore) setComenzi(data);
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        load();
        return () => { ignore = true; };
    }, []); // [] = Se execută o singură dată la deschidere

    // Acestea rămân la fel (modifică doar ecranul, nu și baza de date)
    function handleToggle(id) {
        setComenzi((prev) =>
            prev.map((c) => (c.id === id ? { ...c, inPreparare: !c.inPreparare } : c))
        );
    }

    function handleDelete(id) {
        setComenzi((prev) => prev.filter((c) => c.id !== id));
    }

    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    const inPreparare = comenzi.filter((c) => c.inPreparare).length;

    return (
        <>
            <header className="app-header">
                <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
                    {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                </button>
                <h1>Sistem Gestiune Restaurant</h1>
                <p>Gestionează comenzile și starea preparatelor pentru mesele restaurantului.</p>
                <p className="app-count">
                    {comenzi.length} comenzi, dintre care {inPreparare} în preparare
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Lista de comenzi</h2>

                    {loading && <p className="info">Se încarcă lista de comenzi...</p>}
                    {error && (
                        <p className="error">
                            Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
                        </p>
                    )}
                    {!loading && !error && (
                        <ComandaList comenzi={comenzi} onToggle={handleToggle} onDelete={handleDelete} />
                    )}
                </section>
            </main>
        </>
    );
}