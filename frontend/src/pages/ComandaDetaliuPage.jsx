import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchComanda } from "../api.js";
import { ETICHETE_CATEGORIE } from "../constants.js";
import styles from "./ComandaDetaliuPage.module.css";

export default function ComandaDetaliuPage() {
    const { id } = useParams(); // extrage ID-ul din URL (ex: "3")
    const [comanda, setComanda] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Se execută de fiecare dată când se schimbă ID-ul din adresă
    useEffect(() => {
        let ignore = false;
        fetchComanda(id)
            .then((data) => {
                if (!ignore) {
                    setComanda(data);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!ignore) setError(err.message);
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });

        return () => { ignore = true; };
    }, [id]);

    if (loading) {
        return <p className="info" data-testid="loading">Se încarcă detaliile...</p>;
    }

    if (error) {
        return (
            <section className="panel">
                <p className="error" data-testid="error">Comanda nu a putut fi încărcată: {error}</p>
                <Link to="/">Înapoi la comenzi</Link>
            </section>
        );
    }

    return (
        <section className={`panel ${styles.detail}`} data-testid="detail">
            <Link to="/" className={styles.back}>Înapoi la comenzi</Link>

            <h2 className={!comanda.inPreparare ? styles.done : undefined} data-testid="detail-title">
                {comanda.titlu}
            </h2>

            <dl className={styles.fields}>
                <dt>Categorie</dt>
                <dd>
                    <span className={`badge badge-${comanda.eticheta}`}>
                        {ETICHETE_CATEGORIE[comanda.eticheta]}
                    </span>
                </dd>
                <dt>Status</dt>
                <dd>{comanda.inPreparare ? "În preparare" : "Finalizată"}</dd>
                <dt>ID</dt>
                <dd>{comanda.id}</dd>
            </dl>
        </section>
    );
}