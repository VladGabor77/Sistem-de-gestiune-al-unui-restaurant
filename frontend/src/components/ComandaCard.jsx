import { Link } from "react-router-dom";
import { ETICHETE_CATEGORIE } from "../constants.js";
import styles from "./ComandaCard.module.css";

export default function ComandaCard({ comanda, onToggle, onDelete }) {
    const cardClass = comanda.inPreparare ? `${styles.card} ${styles.activePulse}` : `${styles.card} ${styles.done}`;

    function getIcon(categorie) {
        if (categorie === "fel-principal") return "🍝";
        if (categorie === "desert") return "🍰";
        if (categorie === "bautura") return "🍹";
        return "🍽️";
    }

    return (
        <article className={cardClass} data-testid="item" data-id={comanda.id}>
            <div className={styles.main}>
                <input
                    type="checkbox"
                    checked={!comanda.inPreparare}
                    onChange={() => onToggle(comanda.id)}
                    aria-label={`Marchează ${comanda.titlu}`}
                    data-testid="item-toggle"
                />
                <div className={styles.content}>
                    {/* Titlul a devenit link către pagina de detaliu */}
                    <Link to={`/comenzi/${comanda.id}`} className={styles.title} data-testid="item-link">
                        <span className={styles.icon}>{getIcon(comanda.eticheta)}</span>
                        {comanda.titlu}
                    </Link>
                    <span className={`badge badge-${comanda.eticheta}`}>
                        {ETICHETE_CATEGORIE[comanda.eticheta]}
                    </span>
                </div>
            </div>

            <button
                className="btn-danger"
                onClick={() => onDelete(comanda.id)}
                data-testid="item-delete"
            >
                Șterge
            </button>
        </article>
    );
}