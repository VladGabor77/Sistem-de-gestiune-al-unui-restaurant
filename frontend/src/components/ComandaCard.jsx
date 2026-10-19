const ETICHETE = {
    "fel-principal": "Fel principal",
    "bautura": "Băutură",
    "desert": "Desert"
};

export default function ComandaCard({ comanda }) {
    // Dacă nu mai este în preparare, adăugăm clasa "done" (care taie textul)
    const cardClass = comanda.inPreparare ? "item-card" : "item-card done";

    return (
        <li className={cardClass}>
            <div>
                <h3>{comanda.titlu}</h3>
                {/* Generăm dinamic clasa de culoare neon în funcție de etichetă */}
                <span className={`badge badge-${comanda.eticheta}`}>
                    {ETICHETE[comanda.eticheta]}
                </span>
            </div>
            <span className="status">
                {comanda.inPreparare ? "În preparare" : "Servit"}
            </span>
        </li>
    );
}