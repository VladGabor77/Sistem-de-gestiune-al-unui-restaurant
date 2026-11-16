# Jurnal utilizare AI - Etapa 8

Am folosit AI-ul (Gemini) pentru a mă ghida în transformarea aplicației într-un Single Page Application (SPA) și pentru modularizarea stilurilor:
- Am instalat și configurat `react-router-dom` cu rute pentru `/`, `/comenzi/:id`, `/despre` și o pagină de eroare `*`.
- Am creat un `Layout` comun care folosește `NavLink` pentru a evidenția pagina curentă în navigație și am transformat logo-ul în link navigabil către pagina principală.
- Am separat stilurile globale din `index.css` în fișiere specifice `.module.css` pentru fiecare componentă (`ComandaCard`, `ComandaForm`, `ComandaList`, `Layout` și pagini).
- Am extras categoriile comenzilor într-un fișier separat `constants.js`.
- Am creat pagina `ComandaDetaliuPage` care extrage `id`-ul din adresă cu `useParams()` și face fetch doar pentru acea comandă.
- AI-ul m-a ajutat să adaug câteva funcționalități extra pentru o experiență mai bună (UX): bară de căutare live (filtrare) în pagina principală, animații fluide (fade & slide-in) la apariția cardurilor și un scrollbar personalizat pe tema neon.