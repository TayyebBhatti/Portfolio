import SkillsCarousel from "@/components/SkillsCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Lightbulb } from "lucide-react";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Mes Compétences
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez les technologies et outils que j'ai appris et maîtrisés au cours de ma formation à Epitech et M2I
            </p>
          </div>

          {/* Skills Carousel */}
          <div className="mb-16">
            <SkillsCarousel />
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Niveau débutant</h3>
                <p className="text-muted-foreground text-sm">
                  En constante évolution, je consolide mes acquis à travers des projets pratiques et variés
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Approche pratique</h3>
                <p className="text-muted-foreground text-sm">
                  Apprentissage par la pratique avec des projets concrets et des défis techniques variés
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Curiosité technique</h3>
                <p className="text-muted-foreground text-sm">
                  Toujours prêt à découvrir de nouvelles technologies et à relever de nouveaux défis
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Progress Overview */}
          <div className="mt-16">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Répartition de mes compétences</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">9</div>
                    <p className="text-muted-foreground">Langages & Frameworks</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <p className="text-muted-foreground">Technologies de BDD</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <p className="text-muted-foreground">Outils de développement</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <p className="text-muted-foreground">Systèmes d'exploitation</p>
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

export default Skills;