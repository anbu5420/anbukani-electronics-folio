
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
const Header = () => {
  return <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
      <div className="container mx-auto px-4">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img src="/lovable-uploads/21d18483-a242-455f-ad8d-6c5fadac95e5.png" alt="Anbukani T" className="w-48 h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Anbukani T
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4">
                Electronics & PCB Design Enthusiast
              </p>
              <p className="text-lg text-blue-200 mb-6 max-w-2xl">
                Passionate college student specializing in electronics engineering and PCB design, 
                dedicated to creating innovative solutions through technology.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>anbukani510@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 7092675688</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <a href="https://github.com/anbu5420/Anbukani" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 hover:text-blue-200 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/anbu-kani-snsinstitutions" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 hover:text-blue-200 cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </header>;
};
export default Header;
