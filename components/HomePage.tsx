// Landing page shell: header, hero, friction, conversation, FAQ, footer — locale-aware.
import Conversation from "@/components/Conversation";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Friction from "@/components/Friction";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { getDictionary, type Locale } from "@/lib/i18n";

type HomePageProps = {
  locale: Locale;
};

const HomePage = ({ locale }: HomePageProps) => {
  const t = getDictionary(locale);

  return (
    <div id="top" className="min-h-screen bg-cream">
      <Header locale={locale} t={t} />
      <main id="main">
        <Hero t={t} />
        <Friction t={t} />
        <Conversation t={t} />
        <Faq t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default HomePage;
