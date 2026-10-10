import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Leaf, Sparkles, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import bannerLogo from "@/../public/banner-logo.png";
import fullLogo from "@/../public/full-logo.png";
import marketImage from "@/assets/sokosmart-market.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "SokoSmart — A fresh take on everyday shopping" },
    { name: "description", content: "Meet SokoSmart. A fresh perspective, thoughtful choices, and a simpler everyday — inspired by the spirit of the market." },
    { property: "og:title", content: "SokoSmart — A fresh take on everyday shopping" },
    { property: "og:description", content: "A fresh perspective, thoughtful choices, and a simpler everyday. Good things are growing at SokoSmart." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const values = [
    { number: "01", icon: Leaf, title: "A fresh perspective", text: "Rooted in the energy of the market. Inspired by the possibilities of a new day.", className: "value-green" },
    { number: "02", icon: Sparkles, title: "Thoughtful choices", text: "A little more intention. A little less noise. More room for what matters to you.", className: "value-pink" },
    { number: "03", icon: ShoppingBag, title: "Everyday simplicity", text: "Because the everyday should feel effortless, welcoming, and a little more joyful.", className: "value-rind" },
  ];
  return (
    <div className="landing" id="top">
      <header className="site-header">
        <div className="page-width header-inner">
          <a href="#top" aria-label="SokoSmart home" className="header-logo"><img src={bannerLogo} alt="SokoSmart" width={1422} height={473} /></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#story">Our story</a><a href="#values">What matters</a>
          </nav>
          <Button asChild variant="outline" className="header-cta"><a href="#growing">Meet SokoSmart <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#values" onClick={() => setMenuOpen(false)}>What matters</a><a href="#growing" onClick={() => setMenuOpen(false)}>Meet SokoSmart</a></nav>}
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={marketImage} alt="Fresh watermelon, cucumbers, tomatoes, and lime on a sunlit table" width={1920} height={1024} fetchPriority="high" />
          <div className="page-width hero-inner">
            <div className="hero-copy">
              <span className="eyebrow"><span className="status-dot" /> A FRESH BEGINNING</span>
              <h1 id="hero-title">Soko<span>Smart.</span></h1>
              <h2>A fresh take on<br />everyday shopping.</h2>
              <p>Fresh thinking. Thoughtful choices.<br />A little more joy in your everyday.</p>
              <Button asChild size="lg" className="primary-cta"><a href="#story">Discover SokoSmart <ArrowUpRight /></a></Button>
            </div>
            <a className="hero-scroll" href="#story"><ArrowDown size={15} /> GOOD THINGS START HERE</a>
            <span className="hero-caption">Fresh by nature. Smart by choice.</span>
          </div>
        </section>
        <section className="story-section page-width" id="story" aria-labelledby="story-title">
          <div className="section-label"><span className="small-line" /> THE SOKOSMART SPIRIT</div>
          <div className="story-body"><h2 id="story-title">The heart of a market.<br />A <span>smarter</span> way forward.</h2><p>There’s something special about a market. The colour. The connections. The feeling of finding just what you need. SokoSmart is inspired by that spirit — with a fresh outlook on the everyday.</p></div>
        </section>
        <section className="values-section page-width" id="values" aria-label="What matters to SokoSmart">
          {values.map(({ number, icon: Icon, title, text, className }) => <article key={number} className="value-item"><div className="value-top"><span className={`value-icon ${className}`}><Icon size={24} strokeWidth={1.5} /></span><span className="value-number">{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}
        </section>
        <section className="growing-section" id="growing" aria-labelledby="growing-title"><div className="page-width growing-inner"><div><span className="eyebrow">A LITTLE FRESHNESS. A LOT OF POSSIBILITY.</span><h2 id="growing-title">Good things<br />are <span>growing.</span></h2><p>A new chapter for the everyday. This is SokoSmart.</p><Button asChild variant="outline" className="back-top"><a href="#top">Back to the beginning <ArrowUpRight /></a></Button></div><img src={fullLogo} alt="SokoSmart watermelon shopping bag logo" width={2001} height={1480} loading="lazy" /></div></section>
      </main>
      <footer className="site-footer page-width"><a href="#top" aria-label="SokoSmart home"><img src={bannerLogo} alt="SokoSmart" width={1422} height={473} loading="lazy" /></a><p>Fresh by nature. Smart by choice.</p><span>© 2026 SokoSmart</span></footer>
    </div>
  );
}
