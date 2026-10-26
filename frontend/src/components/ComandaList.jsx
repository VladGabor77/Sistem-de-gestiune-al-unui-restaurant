import ComandaCard from "./ComandaCard.jsx";

export default function ComandaList({ comenzi, onToggle, onDelete }) {
    if (comenzi.length === 0) {
        return <p className="empty">Nu există nicio comandă.</p>;
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