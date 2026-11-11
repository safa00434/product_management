import { useState } from "react";
import { FiHome, FiMail, FiSearch, FiShoppingCart, FiUser, FiChevronDown } from "react-icons/fi";

// les liens de la navbar
const liens = [
    { id: "accueil", texte: "Accueil", icone: <FiHome />, fleche: false },
    { id: "produits", texte: "Produits", icone: null, fleche: true },
    { id: "contact", texte: "Contact", icone: <FiMail />, fleche: false },
];

export default function Header() {
    const [actif, SetActif] = useState("accueil");     
    const [recherche, SetRecherche] = useState("");     
    const nbPanier = 0;                                  

    return (
        <header className="header">
            <img className="logo" src="\public\logo.jpeg" alt="Bloomy" />

            <nav className="navbar">
                {liens.map((lien) => (
                    <button
                        key={lien.id}
                        className={actif === lien.id ? "lien actif" : "lien"}
                        onClick={() => SetActif(lien.id)}
                    >
                        {lien.icone}
                        {lien.texte}
                        {lien.fleche && <FiChevronDown />}
                    </button> 
                ))}
            </nav>

            <div className="actions">
                <div className="recherche-header">
                    <input type="text" placeholder="Rechercher un produit..." value={recherche} onChange={(e) => SetRecherche(e.target.value)} />
                    <FiSearch />
                </div>

                <button className="icone" aria-label="Panier">
                    <FiShoppingCart />
                    <span className="badge">{nbPanier}</span>
                </button>

                <button className="icone" aria-label="Compte">
                    <FiUser />
                </button>
            </div>
        </header>
    );
}