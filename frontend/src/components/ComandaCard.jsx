const ETICHETE = {
    "fel-principal": "Fel principal",
    "bautura": "Băutură",
    "desert": "Desert"
};

export default function ComandaCard({ comanda, onToggle, onDelete }) {
    const cardClass = comanda.inPreparare ? "item-card" : "item-card done";

    return (
        <li className={cardClass}>
            <label className="task-main">
                <input
                    type="checkbox"
                    checked={!comanda.inPreparare}
                    onChange={() => onToggle(comanda.id)}
                />
                <div>
                    <h3>{comanda.titlu}</h3>
                    <span className={`badge badge-${comanda.eticheta}`}>
                        {ETICHETE[comanda.eticheta]}
                    </span>
                </div>
            </label>
            <button
                className="btn-danger"
                onClick={() => onDelete(comanda.id)}
                aria-label={`Șterge ${comanda.titlu}`}
            >
                Șterge
            </button>
        </li>
    );
}