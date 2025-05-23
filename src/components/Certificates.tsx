
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "PCB Design Fundamentals",
      issuer: "Electronics Institute",
      date: "March 2023",
      description: "Comprehensive course covering PCB design principles, layout techniques, and manufacturing processes.",
      skills: ["KiCad", "PCB Layout", "Design Rules"],
      status: "Verified"
    },
    {
      title: "Arduino Programming & Projects",
      issuer: "Tech Academy",
      date: "January 2023",
      description: "Hands-on certification in Arduino programming, sensor integration, and project development.",
      skills: ["Arduino", "C++", "Sensors", "IoT"],
      status: "Verified"
    },
    {
      title: "Electronics Circuit Analysis",
      issuer: "Engineering Foundation",
      date: "November 2022",
      description: "Advanced course in analog and digital circuit analysis, simulation, and troubleshooting.",
      skills: ["Circuit Analysis", "SPICE Simulation", "Troubleshooting"],
      status: "Verified"
    },
    {
      title: "Embedded Systems Basics",
      issuer: "Microcontroller Institute",
      date: "September 2022",
      description: "Introduction to embedded systems programming and microcontroller applications.",
      skills: ["Embedded C", "Microcontrollers", "Real-time Systems"],
      status: "In Progress"
    }
  ];

  return (
    <section id="certificates" className="scroll-mt-20">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Award className="w-8 h-8 text-blue-600" />
            Certificates & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        className={cert.status === "Verified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                      >
                        {cert.status}
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-gray-600 font-medium">{cert.issuer}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Certificates;
