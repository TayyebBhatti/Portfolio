import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, GraduationCap, Download, Github, Linkedin } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full shadow-elegant overflow-hidden">
              <img 
                src={profileAvatar} 
                alt="Tayyeb Bhatti" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Tayyeb Bhatti
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Concepteur et Développeur Web 
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>24 ans</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Strasbourg, France</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4" />
                <span>M2I Strasbourg</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="flex items-center space-x-2 shadow-card">
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Button>
          </div>

          {/* About Me Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">À propos de moi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionné par le développement web, je suis actuellement en formation a M2I Strasbourg. 
                  Mon parcours m'a permis de découvrir et maîtriser diverses technologies, du front-end au back-end, 
                  en passant par la gestion de bases de données.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Formation</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">M2I Strasbourg</h4>
                    <p className="text-sm text-muted-foreground">Centre De Formation</p>
                    <p className="text-sm text-muted-foreground">Première année • 2025-2026</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Epitech Strasbourg</h4>
                    <p className="text-sm text-muted-foreground">École d'informatique</p>
                    <p className="text-sm text-muted-foreground">Première année • 2024-2025</p>
                  </div>
                  
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Objectifs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Approfondir mes connaissances en développement©</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Maîtriser de nouvelles technologies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Contribuer à des projets </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Centres d'intérêt</h3>
                <div className="flex flex-wrap gap-2">
                  {["Développement", "Gaming", "Tech", "Pop Culture"].map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;