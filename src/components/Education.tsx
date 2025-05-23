
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-20">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Academic Background
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800">Diploma in Electrical and Electronics Engineering</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  84% - Distinction
                </span>
              </div>
              <p className="text-gray-600 font-medium mb-2">
                Sri Ramakrishna Mission Vidyalaya Polytechnic College, Periyanaickenpalayam
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Completed: 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>Specialization: EEE</span>
                </div>
              </div>
              <p className="text-gray-600 mt-3">
                Comprehensive study of electrical systems, electronics, power generation, 
                circuit analysis, and practical applications in industrial settings.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800">Higher Secondary Education (10th Grade)</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  53% - Pass
                </span>
              </div>
              <p className="text-gray-600 font-medium mb-2">
                Thambu Higher Secondary School
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Completed: 2020</span>
                </div>
              </div>
              <p className="text-gray-600 mt-3">
                Foundation education with focus on mathematics, science, and general studies 
                that sparked my interest in electronics and technology.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Education;
