import { LiquidCursor } from './components/LiquidCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { ProjectsDashboard } from './components/ProjectsDashboard';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <LiquidCursor />
        <Navigation />
        <main>
          <Hero />
          <Gallery />
          <ProjectsDashboard />
          <About />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
