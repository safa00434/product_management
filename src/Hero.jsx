import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-texte">
                <span className="hero-tag">Soin & Beauté ✦</span>
                <h1>Bloomy</h1>
                <h2>
                    Révélez votre <em>éclat naturel.</em>
                </h2>
                <p>
                    Prenez soin de votre peau avec douceur et découvrez une beauté
                    qui vous ressemble.
                </p>
                <button className="btn-hero">
                    Découvrir nos produits <FiArrowRight />
                </button>

                <p className="hero-script">
                    Une peau plus belle, chaque jour ♡
                </p>
            </div>
        </section>
    );
}