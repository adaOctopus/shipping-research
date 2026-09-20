// Landing page for Greek Ships XYZ: research hero, freight-charge friction, FAQ, and a Calendly conversation.
import Conversation from "@/components/Conversation";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Friction from "@/components/Friction";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const HomePage = () => (
  <div id="top" className="min-h-screen bg-cream">
    <Header />
    <main id="main">
      <Hero />
      <Friction />
      <Conversation />
      <Faq />
    </main>
    <Footer />
  </div>
);

export default HomePage;
