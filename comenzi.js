// Pasul 2: Datele de test și valorile permise
const comenzi = [
  { id: 1, titlu: "Pizza Margherita", inPreparare: true, eticheta: "fel-principal" },
  { id: 2, titlu: "Tiramisu", inPreparare: false, eticheta: "desert" },
  { id: 3, titlu: "Limonadă cu mentă", inPreparare: true, eticheta: "bautura" }
];

const TIPURI_PREPARAT = ["fel-principal", "bautura", "desert"];

// Pasul 3: Listarea titlurilor folosind map
function listeazaTitluri(lista) {
  return lista.map((c) => c.titlu);
}

// Pasul 4: Numărarea elementelor active (în preparare) folosind filter
function numaraActive(lista) {
  return lista.filter((c) => c.inPreparare).length;
}

// Pasul 5: Căutarea după titlu, ignorând literele mari/mici
function cautaDupaTitlu(lista, text) {
  return lista.filter((c) => 
    c.titlu.toLowerCase().includes(text.toLowerCase())
  );
}

// Funcție ajutătoare pentru generarea următorului ID folosind reduce
function nextId(lista) {
  return lista.reduce((max, c) => Math.max(max, c.id), 0) + 1;
}

// Pasul 6: Adăugarea unui element cu validare și imutabilitate
function adaugaComanda(lista, titlu, eticheta) {
  const titluCurat = titlu.trim();
  
  if (titluCurat === "") {
    console.log("Titlul nu poate fi gol!");
    return lista;
  }
  
  if (!TIPURI_PREPARAT.includes(eticheta)) {
    console.log("Etichetă invalidă:", eticheta);
    return lista;
  }
  
  const nou = { 
    id: nextId(lista), 
    titlu: titluCurat, 
    inPreparare: true, 
    eticheta: eticheta 
  };
  
  return [...lista, nou];
}

// Pasul 7: Comutarea stării folosind map
function comutaStare(lista, id) {
  return lista.map((c) => 
    c.id === id ? { ...c, inPreparare: !c.inPreparare } : c
  );
}

// Pasul 7: Ștergerea folosind filter
function stergeComanda(lista, id) {
  return lista.filter((c) => c.id !== id);
}

// Pasul 8: Testele din consolă
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(comenzi).join(", "));
console.log("În preparare:", numaraActive(comenzi));
console.log("Căutare 'pizza':", listeazaTitluri(cautaDupaTitlu(comenzi, "pizza")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaComanda(comenzi, "Ciorbă de burtă", "fel-principal");
console.log("Lista nouă:", listaNoua.length, "comenzi");
console.log("Originalul a rămas cu:", comenzi.length, "comenzi");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("După servirea id 1, în preparare au rămas:", numaraActive(listaNoua));
listaNoua = stergeComanda(listaNoua, 3);
console.log("După ștergerea id 3, titlurile sunt:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaComanda(listaNoua, "   ", "bautura");
adaugaComanda(listaNoua, "Cartofi prăjiți", "garnitura");