import { useTheme } from './hooks/useTheme';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { Nav } from './components/layout/Nav';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Stats } from './components/sections/Stats';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Faq } from './components/sections/Faq';
import { Footer } from './components/sections/Footer';
import styles from './App.module.scss';

export function App() {
  const { theme, setTheme, toggle } = useTheme();

  return (
    <div className={styles.app}>
      <BackgroundCanvas />
      <Nav theme={theme} onThemeToggle={toggle} />
      <main className={styles.main}>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Contact onThemeCommand={setTheme} />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
