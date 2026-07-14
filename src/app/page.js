
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import DesignProcess from '@/components/sections/DesignProcess';
import UserResearch from '@/components/sections/UserResearch';
import UserPersona from '@/components/sections/UserPersona';
import UserFlow from '@/components/sections/UserFlow';
import Wireframes from '@/components/sections/Wireframes';
import UserInterface from '@/components/sections/UserInterface';
import Thanks from '@/components/sections/Thanks';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <DesignProcess />
      <UserResearch />
      <UserPersona />
      <UserFlow />
      <Wireframes />
      <UserInterface />
      <Thanks />
    </main>
  );
}
