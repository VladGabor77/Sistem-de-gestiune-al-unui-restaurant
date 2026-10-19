import ComandaCard from "./ComandaCard.jsx";

export default function ComandaList({ comenzi }) {
    // Verificăm dacă lista e goală (randare condiționată)
    if (comenzi.length === 0) {
        return <p className="empty">Nu există nicio comandă.</p>;
    }

    return (
        <ul className="item-list">
            {/* Randăm lista folosind map și adăugăm atributul obligatoriu key */}
            {comenzi.map((comanda) => (
                <ComandaCard key={comanda.id} comanda={comanda} />
            ))}
        </ul>
    );
}