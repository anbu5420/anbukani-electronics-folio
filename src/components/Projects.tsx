
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Cpu, Zap, Settings } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "IoT-Based Home Automation System",
      description: "Designed and developed a comprehensive home automation system utilizing ESP32 Wi-Fi module for wireless connectivity. The system enables remote control of household appliances, lighting, and security systems through a mobile application.",
      technologies: ["ESP32", "IoT", "PCB Design", "Mobile App"],
      icon: <Settings className="w-6 h-6" />,
      status: "Completed"
    },
    {
      title: "Water Quality Monitoring System",
      description: "Created an IoT-based water quality monitoring system that automatically measures and monitors various parameters such as pH, turbidity, temperature, and dissolved oxygen. The system provides real-time data analysis and alerts.",
      technologies: ["IoT", "Sensors", "Data Analytics", "Arduino"],
      icon: <Lightbulb className="w-6 h-6" />,
      status: "Completed"
    },
    {
      title: "Digital Voltmeter Circuit",
      description: "Designed a precise digital voltmeter with LCD display, featuring multiple range selection and high accuracy measurements using custom PCB layout.",
      technologies: ["Analog Circuits", "LCD Interface", "PCB Design"],
      icon: <Zap className="w-6 h-6" />,
      status: "In Progress"
    },
    {
      title: "Microcontroller-based Weather Station",
      description: "Developing a comprehensive weather monitoring system with multiple sensors, data logging, and wireless connectivity using custom PCB design.",
      technologies: ["Microcontroller", "Sensors", "Data Logging", "Wireless"],
      icon: <Cpu className="w-6 h-6" />,
      status: "Planning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Planning": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="scroll-mt-20">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Lightbulb className="w-8 h-8 text-blue-600" />
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-blue-600">
                      {project.icon}
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
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

export default Projects;
