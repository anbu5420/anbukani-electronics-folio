
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Rocket, BookOpen, Globe } from "lucide-react";

const FutureGoals = () => {
  const goals = [
    {
      category: "Short-term (6-12 months)",
      icon: <Target className="w-6 h-6" />,
      color: "bg-blue-50 border-blue-200",
      items: [
        "Complete advanced PCB design certification",
        "Master high-speed digital design techniques",
        "Develop portfolio with 5 complex PCB projects",
        "Learn advanced simulation tools (ANSYS, CST)"
      ]
    },
    {
      category: "Medium-term (1-2 years)",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-green-50 border-green-200",
      items: [
        "Pursue Bachelor's degree in Electronics Engineering",
        "Gain internship experience at electronics company",
        "Specialize in RF and microwave PCB design",
        "Contribute to open-source electronics projects"
      ]
    },
    {
      category: "Long-term (3-5 years)",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-purple-50 border-purple-200",
      items: [
        "Become a certified PCB design engineer",
        "Lead electronic product development teams",
        "Start own electronics design consultancy",
        "Mentor upcoming electronics enthusiasts"
      ]
    }
  ];

  const aspirations = [
    "IoT Device Development",
    "Automotive Electronics",
    "Medical Device Design",
    "Renewable Energy Systems",
    "Aerospace Electronics",
    "Consumer Electronics"
  ];

  return (
    <section id="future-goals" className="scroll-mt-20">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Rocket className="w-8 h-8 text-blue-600" />
            Future Goals & Vision
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-6">
            {goals.map((goalCategory, index) => (
              <Card key={index} className={`${goalCategory.color} border`}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-blue-600">{goalCategory.icon}</span>
                    {goalCategory.category}
                  </h3>
                  <ul className="space-y-2">
                    {goalCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                Areas of Interest & Specialization
              </h3>
              <p className="text-gray-700 mb-4">
                I aspire to specialize in cutting-edge electronics domains that are shaping the future:
              </p>
              <div className="flex flex-wrap gap-2">
                {aspirations.map((area, index) => (
                  <Badge key={index} className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">My Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              "To become a leading PCB design engineer who contributes to innovative electronic solutions 
              that make technology more accessible, sustainable, and beneficial for society. I envision 
              myself at the forefront of emerging technologies, designing circuits that power the next 
              generation of smart devices and systems."
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FutureGoals;
