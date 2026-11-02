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
    const total = comenzi.length;
    const gata = total - inPreparare;
    const procentaj = total === 0 ? 0 : Math.round((gata / total) * 100);

    return (
        <>
            <header className="app-header">
                <button className="theme-toggle" onClick={handleTema}>
                    {tema === "dark" ? "☀️ Mod luminos" : "🌙 Mod întunecat"}
                </button>

                {/* Poza restaurantului */}
                <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80"
                    alt="Logo Restaurant"
                    className="header-logo"
                />

                {/* Noul tău titlu */}
                <h1>Byte &amp; Bite</h1>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Lista de comenzi</h2>

                    {/* Bara de progres neon pe care ai cerut-o anterior */}
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${procentaj}%` }}></div>
                    </div>
                    <p className="progress-text">{procentaj}% comenzi finalizate</p>

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