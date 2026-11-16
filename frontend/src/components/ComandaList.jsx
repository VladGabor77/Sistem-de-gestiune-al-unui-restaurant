import ComandaCard from "./ComandaCard.jsx";

export default function ComandaList({ comenzi, onToggle, onDelete }) {
    if (comenzi.length === 0) {
        // Am adăugat data-testid="empty"
        return <p className="empty" data-testid="empty">Nu există nicio comandă.</p>;
    }

    return (
        <ul className="item-list">
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