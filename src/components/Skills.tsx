import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Wrench, Code, Palette, Briefcase } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "PCB Design & CAD Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "KiCad", level: 85 },
        { name: "Eagle CAD", level: 76 },
        { name: "Altium Designer", level: 60 },
        { name: "Circuit Simulation", level: 85 }
      ]
    },
    {
      title: "Programming & Microcontrollers",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Arduino Programming", level: 90 },
        { name: "C/C++", level: 75 },
        { name: "Java", level: 84 },
        { name: "Python", level: 65 }
      ]
    },
    {
      title: "Electronics & Hardware",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Circuit Analysis", level: 85 },
        { name: "PCB Assembly", level: 80 },
        { name: "Troubleshooting", level: 88 },
        { name: "Component Selection", level: 75 }
      ]
    },
    {
      title: "Professional Skills",
      icon: <Briefcase className="w-6 h-6" />,
      skills: [
        { name: "Project Management", level: 70 },
        { name: "Technical Documentation", level: 80 },
        { name: "Team Collaboration", level: 85 },
        { name: "Problem Solving", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-20">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Wrench className="w-8 h-8 text-blue-600" />
            Skills & Expertise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-blue-600">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
