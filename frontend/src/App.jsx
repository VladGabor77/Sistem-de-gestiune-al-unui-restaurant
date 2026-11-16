import { useState, useEffect } from "react";
import ComandaList from "./components/ComandaList.jsx";
import ComandaForm from "./components/ComandaForm.jsx"; // Importăm formularul
import { fetchComenzi, createComanda, updateComanda, deleteComanda } from "./api.js"; // Importăm noile funcții API

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [comenzi, setComenzi] = useState([]);
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
    }, []);

    // Adăugarea pe server
    async function handleAdd(comanda) {
        // Nu prindem eroarea aici; o lăsăm să ajungă în formular pentru a fi afișată acolo
        const creat = await createComanda(comanda);
        setComenzi((prev) => [...prev, creat]); // Punem pe ecran varianta întoarsă de server, cu tot cu ID
    }

    // Modificarea pe server
    async function handleToggle(id) {
        const comanda = comenzi.find((c) => c.id === id);
        try {
            const actualizat = await updateComanda(id, { inPreparare: !comanda.inPreparare });
            setComenzi((prev) => prev.map((c) => (c.id === id ? actualizat : c)));
        } catch (err) {
            setError(err.message);
        }
    }

    // Ștergerea pe server
    async function handleDelete(id) {
        try {
            await deleteComanda(id);
            setComenzi((prev) => prev.filter((c) => c.id !== id));
        } catch (err) {
            setError(err.message);
        }
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
                <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80"
                    alt="Logo Restaurant"
                    className="header-logo"
                />
                <h1>Byte &amp; Bite</h1>
            </header>

            <main className="container">
                {/* Panoul stâng: Formularul de adăugare */}
                <section className="panel">
                    <h2>Adaugă comandă</h2>
                    <ComandaForm onAdd={handleAdd} />
                </section>

                {/* Panoul drept: Lista de comenzi */}
                <section className="panel">
                    <h2>Panou bucătărie</h2>

                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${procentaj}%` }}></div>
                    </div>
                    <p className="progress-text">{procentaj}% comenzi finalizate</p>

                    {loading && <p className="info" data-testid="loading">Se încarcă lista de comenzi...</p>}

                    {error && (
                        <p className="error" data-testid="error">
                            Eroare: {error}. Rulează serverul?
                        </p>
                    )}

                    {/* Afișăm lista și dacă e eroare (pentru ca eroarea de la toggle să nu șteargă lista) */}
                    {!loading && (
                        <ComandaList comenzi={comenzi} onToggle={handleToggle} onDelete={handleDelete} />
                    )}
                </section>
            </main>
        </>
    );
}