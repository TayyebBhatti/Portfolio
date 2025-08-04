import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Code, Database, Settings, Monitor } from "lucide-react";

const SkillsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skillCategories = [
    {
      title: "Langages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "Java", "React", "Node.js", "Express.js", "Vite", "Next"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Base de données",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "Merise", "NoSQL", "Big Data", "Supabase"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Outils & Environnements",
      icon: <Settings className="w-6 h-6" />,
      skills: ["GitHub", "Visual Studio Code", "Figma", "Postman", "Cloud Native AWS", "UML"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Systèmes",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Windows", "Linux", "Mac"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skillCategories.length) % skillCategories.length);
  };

  const currentSkill = skillCategories[currentIndex];

  return (
    <div className="relative">
      <Card className="shadow-card">
        <CardHeader className="text-center pb-4">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${currentSkill.color} flex items-center justify-center text-white`}>
            {currentSkill.icon}
          </div>
          <CardTitle className="text-2xl">{currentSkill.title}</CardTitle>
        </CardHeader>
        <CardContent className="min-h-[200px] flex flex-col justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {currentSkill.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-secondary/50 px-3 py-2 rounded-lg text-center text-sm font-medium hover:bg-secondary/80 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Précédent</span>
        </Button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {skillCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="flex items-center space-x-2"
        >
          <span>Suivant</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SkillsCarousel;