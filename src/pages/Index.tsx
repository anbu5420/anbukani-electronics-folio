
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Reflection from "@/components/Reflection";
import FutureGoals from "@/components/FutureGoals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Reflection />
        <FutureGoals />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
