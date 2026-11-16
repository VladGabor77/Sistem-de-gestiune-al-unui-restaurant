// frontend/src/pages/ComenziPage.jsx
import { useEffect, useState } from "react";
import ComandaList from "../components/ComandaList.jsx";
import ComandaForm from "../components/ComandaForm.jsx";
import { createComanda, deleteComanda, fetchComenzi, updateComanda } from "../api.js";
import styles from "./ComenziPage.module.css"; // Importăm noul modul CSS

export default function ComenziPage() {
    const [comenzi, setComenzi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

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

    async function handleAdd(comanda) {
        const creat = await createComanda(comanda);
        setComenzi((prev) => [...prev, creat]);
    }

    async function handleToggle(id) {
        const comanda = comenzi.find((c) => c.id === id);
        try {
            const actualizat = await updateComanda(id, { inPreparare: !comanda.inPreparare });
            setComenzi((prev) => prev.map((c) => (c.id === id ? actualizat : c)));
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteComanda(id);
            setComenzi((prev) => prev.filter((c) => c.id !== id));
        } catch (err) {
            setError(err.message);
        }
    }

    const inPreparare = comenzi.filter((c) => c.inPreparare).length;
    const total = comenzi.length;
    const gata = total - inPreparare;
    const procentaj = total === 0 ? 0 : Math.round((gata / total) * 100);
    // Filtrăm lista pe baza textului introdus (ignorând majusculele)
    const comenziFiltrate = comenzi.filter((c) =>
        c.titlu.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className={styles.grid}>
            <section className="panel">
                <h2>Adaugă comandă</h2>
                <ComandaForm onAdd={handleAdd} />
            </section>

            <section className="panel">
                <h2>Panou bucătărie</h2>
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar} style={{ width: `${procentaj}%` }}></div>
                </div>
                <p className={styles.summary}>
                    {procentaj}% comenzi finalizate ({gata} din {total})
                </p>

                {/* Bara de căutare nouă */}
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="🔍 Caută o comandă (ex: Pizza)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>

                {loading && <p className="info" data-testid="loading">Se încarcă lista de comenzi...</p>}
                {error && <p className="error" data-testid="error">{error}</p>}

                {!loading && (
                    <ComandaList comenzi={comenziFiltrate} onToggle={handleToggle} onDelete={handleDelete} />
                )}
            </section>
        </div>
    );
}
