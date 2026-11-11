import { FiTruck, FiShield, FiHeadphones, FiHeart, FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

// les 4 garanties (bandeau du haut)
const garanties = [
    { icone: <FiTruck />, texte: "Livraison partout au Maroc" },
    { icone: <FiShield />, texte: "Paiement à la livraison" },
    { icone: <FiHeadphones />, texte: "Service client réactif" },
    { icone: <FiHeart />, texte: "Qualité garantie" },
];

// liens rapides
const liensRapides = ["Accueil", "Produits", "Contact", "Panier"];

// catégories (même noms que dans produits.js)
const categories = ["Nettoyants", "Sérums", "Crèmes", "Soins ciblés", "Solaires"];

export default function Footer() {
    const annee = new Date().getFullYear();   // année automatique

    return (
        <footer className="footer">
            {/* bandeau des garanties */}
            <div className="garanties">
                {garanties.map((g) => (
                    <div key={g.texte} className="garantie">
                        {g.icone}
                        <span>{g.texte}</span>
                    </div>
                ))}
            </div>

            {/* contenu principal */}
            <div className="footer-contenu">
                {/* marque */}
                <div className="footer-col footer-marque">
                    <h3 className="footer-logo">Bloomy</h3>
                    <p>Des soins doux et naturels pour révéler l'éclat de votre peau, chaque jour.</p>
                    <div className="reseaux">
                        <a href="#" aria-label="Instagram"><FiInstagram /></a>
                        <a href="#" aria-label="Facebook"><FiFacebook /></a>
                        <a href="#" aria-label="TikTok"><FaTiktok /></a>
                        <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                    </div>
                </div>

                {/* liens rapides */}
                <div className="footer-col">
                    <h4>Navigation</h4>
                    <ul>
                        {liensRapides.map((lien) => (
                            <li key={lien}><a href="#">{lien}</a></li>
                        ))}
                    </ul>
                </div>

                {/* catégories */}
                <div className="footer-col">
                    <h4>Nos soins</h4>
                    <ul>
                        {categories.map((cat) => (
                            <li key={cat}><a href="#">{cat}</a></li>
                        ))}
                    </ul>
                </div>

                {/* contact */}
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul className="footer-contact">
                        <li><FiMail /> contact@bloomy.ma</li>
                        <li><FiPhone /> +212 6 00 00 00 00</li>
                        <li><FiMapPin /> Maroc</li>
                    </ul>
                </div>
            </div>

            {/* barre du bas */}
            <div className="footer-bas">
                © {annee} Bloomy. Tous droits réservés.
            </div>
        </footer>
    );
}