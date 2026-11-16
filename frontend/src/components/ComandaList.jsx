import ComandaCard from "./ComandaCard.jsx";
import styles from "./ComandaList.module.css";

export default function ComandaList({ comenzi, onToggle, onDelete }) {
    if (comenzi.length === 0) {
        return <p className="empty" data-testid="empty">Nu există nicio comandă.</p>;
    }

    return (
        <ul className={styles.list}>
            {comenzi.map((comanda) => (
                <ComandaCard
                    key={comanda.id}
                    comanda={comanda}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}