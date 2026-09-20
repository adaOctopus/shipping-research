// Landing page for Greek Ships XYZ: research hero, ocean-cargo friction, and a Calendly conversation.
import Conversation from "@/components/Conversation";
import Footer from "@/components/Footer";
import Friction from "@/components/Friction";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const HomePage = () => (
  <div id="top" className="min-h-screen bg-cream">
    <Header />
    <main>
      <Hero />
      <Friction />
      <Conversation />
    </main>
    <Footer />
  </div>
);

export default HomePage;
