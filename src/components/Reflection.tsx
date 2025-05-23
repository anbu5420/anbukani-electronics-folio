
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Lightbulb, TrendingUp, Users } from "lucide-react";

const Reflection = () => {
  return (
    <section id="reflection" className="scroll-mt-20">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Heart className="w-8 h-8 text-blue-600" />
            Personal Reflection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-blue-200 bg-blue-50/50">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Learning Journey</h3>
                  <p className="text-sm text-gray-600">
                    Every circuit I design teaches me something new about the elegant balance 
                    between theory and practical application.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-green-200 bg-green-50/50">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Growth Mindset</h3>
                  <p className="text-sm text-gray-600">
                    Challenges in PCB design have taught me patience, precision, and the 
                    importance of iterative improvement.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-purple-200 bg-purple-50/50">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Collaboration</h3>
                  <p className="text-sm text-gray-600">
                    Working on team projects has shown me the value of diverse perspectives 
                    in solving complex engineering problems.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                What Drives Me
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  My passion for electronics stems from the incredible potential to create solutions 
                  that can improve people's lives. Whether it's designing a more efficient power 
                  management system or creating an innovative sensor interface, each project represents 
                  an opportunity to contribute to technological advancement.
                </p>
                <p className="leading-relaxed">
                  The journey from my foundational education at Thambu Higher Secondary to my 
                  specialized diploma at Sri Ramakrishna Mission Vidyalaya has been transformative. 
                  Despite early academic challenges, I've learned that persistence and genuine 
                  interest in a subject can overcome any obstacle.
                </p>
                <p className="leading-relaxed">
                  What excites me most about PCB design is the intersection of creativity and 
                  precision it demands. Every trace placement, component selection, and design 
                  decision impacts the final product's performance, reliability, and cost-effectiveness.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Reflection;
