
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-800/50 border-gray-700 p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <span>anbukani.t@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span>+91 9876543210</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
              <div className="flex gap-4">
                <Github className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#education" className="block text-gray-300 hover:text-white transition-colors">Education</a>
                <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">Skills</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Anbukani T • Electronics Enthusiast
            </p>
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
