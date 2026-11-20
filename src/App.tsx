import { useEffect } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Directory from "./components/directory/Directory";
import { startSmoothScroll } from "./lib/smoothScroll";

const App = () => {
  useEffect(() => startSmoothScroll(), []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Directory />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
