import ComandaList from "./components/ComandaList.jsx";

const comenzi = [
    { id: 1, titlu: "Pizza Margherita", inPreparare: true, eticheta: "fel-principal" },
    { id: 2, titlu: "Tiramisu", inPreparare: false, eticheta: "desert" },
    { id: 3, titlu: "Limonadă cu mentă", inPreparare: true, eticheta: "bautura" }
];

export default function App() {
    const inPreparare = comenzi.filter((c) => c.inPreparare).length;

    return (
        <>
            <header className="app-header">
                <h1>Sistem Gestiune Restaurant</h1>
                <p>Gestionează comenzile și starea preparatelor pentru mesele restaurantului.</p>
                <p className="app-count">
                    {comenzi.length} comenzi, dintre care {inPreparare} în preparare
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Lista de comenzi</h2>
                    {/* Folosim componenta și îi transmitem datele prin props */}
                    <ComandaList comenzi={comenzi} />
                </section>
            </main>
        </>
    );
}