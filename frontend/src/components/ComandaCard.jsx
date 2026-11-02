export default function ComandaCard({ comanda, onToggle, onDelete }) {
    const cardClass = comanda.inPreparare ? "item-card active-pulse" : "item-card done";

    function getIcon(categorie) {
        if (categorie === "fel-principal") return "🍝";
        if (categorie === "desert") return "🍰";
        if (categorie === "bautura") return "🍹";
        return "🍽️";
    }

    return (
        <article className={cardClass}>

            {/* Am transformat tot grupul din stânga într-un label clicabil */}
            <label className="task-main">
                <input
                    type="checkbox"
                    checked={!comanda.inPreparare}
                    onChange={() => onToggle(comanda.id)}
                />

                <div className="item-content">
                    <h3 className="item-title">
                        <span className="item-icon">{getIcon(comanda.eticheta)}</span>
                        {comanda.titlu}
                    </h3>
                    <span className={`badge badge-${comanda.eticheta}`}>
                        {comanda.eticheta}
                    </span>
                </div>
            </label>

            <button className="btn-danger" onClick={() => onDelete(comanda.id)}>
                Șterge
            </button>

        </article>
    );
}