
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <User className="w-8 h-8 text-blue-600" />
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Who I Am
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm Anbukani T, a dedicated electronics engineering student with a deep passion for 
                PCB design and electronic circuit development. My journey in electronics began with 
                curiosity about how devices work, which has evolved into a strong technical foundation 
                and practical experience in designing and implementing electronic solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                My Focus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I specialize in PCB design using industry-standard tools, microcontroller programming, 
                and electronic circuit analysis. My approach combines theoretical knowledge with 
                hands-on experience, always striving to create efficient, reliable, and innovative 
                electronic solutions that solve real-world problems.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <p className="text-gray-700 italic text-center text-lg">
              "Innovation in electronics isn't just about creating new circuits—it's about designing 
              solutions that make technology more accessible and efficient for everyone."
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
