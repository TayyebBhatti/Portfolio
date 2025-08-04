import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar, Users, Target } from "lucide-react";

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Puissance 4",
      duration: "2 semaines",
      technologies: ["JavaScript"],
      objective: "Faire un puissance 4",
      teamSize: "Individuel",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Refaire Twitter",
      duration: "4 semaines",
      technologies: ["PHP", "SQL"],
      objective: "Refaire Twitter",
      teamSize: "Groupe de 4",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Refaire Spotify",
      duration: "2 jours",
      technologies: ["ReactJS", "JSON"],
      objective: "Afficher les informations d'une API",
      teamSize: "Groupe de 4",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "My Meetic",
      duration: "2 semaines",
      technologies: ["PHP", "SQL"],
      objective: "Refaire Meetic",
      teamSize: "Individuel",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Cinema",
      duration: "2 semaines",
      technologies: ["PHP", "SQL"],
      objective: "Faire un site de gestion d'un cinéma",
      teamSize: "Individuel",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      title: "E-commerce",
      duration: "2 mois",
      technologies: ["React", "Supabase"],
      objective: "Faire un site de E-Commerce",
      teamSize: "Groupe de 2",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative">
      <Card className="shadow-card min-h-[400px]">
        <CardHeader className="text-center pb-6">
          <div className={`h-20 mx-auto mb-4 rounded-lg bg-gradient-to-r ${currentProject.gradient} flex items-center justify-center`}>
            <CardTitle className="text-2xl text-white px-4">{currentProject.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Durée</p>
                <p className="font-medium">{currentProject.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Équipe</p>
                <p className="font-medium">{currentProject.teamSize}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg">
              <Target className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-medium">Projet étudiant</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Technologies utilisées</h4>
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Objectif</h4>
            <p className="text-muted-foreground leading-relaxed">
              {currentProject.objective}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={prevProject}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Précédent</span>
        </Button>

        {/* Project Counter */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {projects.length}
          </span>
          <div className="flex space-x-1">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextProject}
          className="flex items-center space-x-2"
        >
          <span>Suivant</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;