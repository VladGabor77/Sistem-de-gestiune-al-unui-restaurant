import { useState } from "react";
import ComandaList from "./components/ComandaList.jsx";

const COMENZI_INITIALE = [
    { id: 1, titlu: "Pizza Margherita", inPreparare: true, eticheta: "fel-principal" },
    { id: 2, titlu: "Tiramisu", inPreparare: false, eticheta: "desert" },
    { id: 3, titlu: "Limonadă cu mentă", inPreparare: true, eticheta: "bautura" }
];

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [comenzi, setComenzi] = useState(COMENZI_INITIALE);
    const [tema, setTema] = useState(temaInitiala);

    function handleToggle(id) {
        setComenzi((prev) =>
            prev.map((c) => (c.id === id ? { ...c, inPreparare: !c.inPreparare } : c))
        );
    }

    function handleDelete(id) {
        setComenzi((prev) => prev.filter((c) => c.id !== id));
    }

    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    const inPreparare = comenzi.filter((c) => c.inPreparare).length;

    return (
        <>
            <header className="app-header">
                <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
                    {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                </button>
                <h1>Sistem Gestiune Restaurant</h1>
                <p>Gestionează comenzile și starea preparatelor pentru mesele restaurantului.</p>
                <p className="app-count">
                    {comenzi.length} comenzi, dintre care {inPreparare} în preparare
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Lista de comenzi</h2>
                    <ComandaList comenzi={comenzi} onToggle={handleToggle} onDelete={handleDelete} />
                </section>
            </main>
        </>
    );
}