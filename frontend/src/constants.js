// Valorile fixe și etichetele lor, într-un singur loc.
export const CATEGORII = [
    { value: "fel-principal", label: "Fel principal" },
    { value: "desert", label: "Desert" },
    { value: "bautura", label: "Băutură" },
];

export const ETICHETE_CATEGORIE = Object.fromEntries(
    CATEGORII.map((c) => [c.value, c.label])
);