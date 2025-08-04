import ProjectsCarousel from "@/components/ProjectsCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Clock, Zap } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Mes Projets
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques projets que j'ai réalisés pendant ma première année à Epitech, 
              des applications web aux systèmes de gestion
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="mb-16">
            <ProjectsCarousel />
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">6</div>
                <p className="text-sm text-muted-foreground">Projets réalisés</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">4</div>
                <p className="text-sm text-muted-foreground">Projets en équipe</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">2</div>
                <p className="text-sm text-muted-foreground">année de développement</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">7</div>
                <p className="text-sm text-muted-foreground">Technologies utilisées</p>
              </CardContent>
            </Card>
          </div>

          {/* Project Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Types de projets</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Jeux interactifs</span>
                    <span className="text-sm font-medium">1 projet</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Réseaux sociaux</span>
                    <span className="text-sm font-medium">2 projets</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Plateformes de rencontre</span>
                    <span className="text-sm font-medium">1 projet</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Systèmes de gestion</span>
                    <span className="text-sm font-medium">1 projet</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">E-commerce</span>
                    <span className="text-sm font-medium">1 projet</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Technologies favorites</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">PHP + SQL</span>
                    <span className="text-sm font-medium">4 projets</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">JavaScript</span>
                    <span className="text-sm font-medium">1 projet</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">React</span>
                    <span className="text-sm font-medium">2 projets</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Supabase + Next</span>
                    <span className="text-sm font-medium">1 projet</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;