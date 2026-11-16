import { useState } from "react";
// Adaugă importul ăsta sus, sub celelalte importuri:
import styles from "./ComandaForm.module.css";

// Apoi, mai jos, înlocuiește <form className="task-form" ...> cu:

const CATEGORII = [
    { value: "fel-principal", label: "Fel principal" },
    { value: "desert", label: "Desert" },
    { value: "bautura", label: "Băutură" },
];
const TITLU_MAX = 100;

// Formular controlat: state-ul React este sursa de adevăr pentru câmpuri
export default function ComandaForm({ onAdd }) {
    const [titlu, setTitlu] = useState("");
    const [eticheta, setEticheta] = useState("fel-principal");
    const [eroare, setEroare] = useState("");
    const [trimite, setTrimite] = useState(false);

    function valideaza() {
        const t = titlu.trim();
        if (t === "") return "Numele preparatului este obligatoriu.";
        if (t.length > TITLU_MAX) return `Numele are maximum ${TITLU_MAX} de caractere.`;
        return "";
    }

    async function handleSubmit(e) {
        e.preventDefault(); // oprește reîncărcarea paginii
        const mesaj = valideaza();

        if (mesaj) {
            setEroare(mesaj);
            return;
        }

        setEroare("");
        setTrimite(true);

        try {
            // Trimitem comanda către App.jsx
            await onAdd({ titlu: titlu.trim(), eticheta, inPreparare: true });

            // Golim formularul doar dacă a reușit salvarea
            setTitlu("");
            setEticheta("fel-principal");
        } catch (err) {
            setEroare(err.message);
        } finally {
            setTrimite(false);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">            <label>
                Preparat
                <input
                    type="text"
                    value={titlu}
                    onChange={(e) => setTitlu(e.target.value)}
                    placeholder="Ex: Paste Carbonara"
                    maxLength={TITLU_MAX}
                    aria-invalid={Boolean(eroare)}
                    data-testid="form-title"
                />
            </label>

            <label>
                Categorie
                <select
                    value={eticheta}
                    onChange={(e) => setEticheta(e.target.value)}
                    data-testid="form-eticheta"
                >
                    {CATEGORII.map((c) => (
                        <option key={c.value} value={c.value}>
                            {c.label}
                        </option>
                    ))}
                </select>
            </label>

            {eroare && (
                <p className="error" data-testid="form-error">
                    {eroare}
                </p>
            )}

            <button type="submit" disabled={trimite} data-testid="form-submit">
                {trimite ? "Se trimite la bucătărie..." : "Adaugă comandă"}
            </button>
        </form>
    );
}