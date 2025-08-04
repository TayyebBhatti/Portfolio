import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { LinkedInLogoIcon, GitHubLogoIcon, HamburgerMenuIcon, DownloadIcon } from "@radix-ui/react-icons";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();


  const navigation = [
    { name: "Mes infos", href: "/" },
    { name: "Compétences", href: "/competences" },
    { name: "Projets", href: "/projets" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const NavLinks = ({ mobile = false }) => (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive(item.href)
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-accent"
          } ${mobile ? "block w-full text-left" : ""}`}
          onClick={() => mobile && setIsOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  const ActionButtons = ({ mobile = false }) => (
    <div className={`flex ${mobile ? "flex-col space-y-2" : "space-x-2"}`}>
      <Button
        variant="outline"
        size="sm"
        className={mobile ? "w-full justify-start" : ""}
        onClick={() => {
          const link = document.createElement("a");
          link.href = "../../public/CV Bhatti Tayyeb.pdf"; 
          link.download = "Tayyeb_Bhatti_CV.pdf"; 
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          toast({
            title: "Téléchargement lancé",
            description: "Le CV est en cours de téléchargement.",
          });
      }}>

      
        <DownloadIcon className="w-4 h-4 mr-2" />
        Télécharger CV
      </Button>
      <Button
        variant="outline"
        size="sm"
        className={mobile ? "w-full justify-start" : ""}
        onClick={() => {
          window.open("https://www.linkedin.com/in/tbhatti97", "_blank");
        }}
      >
        <LinkedInLogoIcon className="w-4 h-4 mr-2" />
        LinkedIn
      </Button>
      <Button
        variant="outline"
        size="sm"
        className={mobile ? "w-full justify-start" : ""}
        onClick={() => {
          window.open("https://github.com/nerod100", "_blank");
        }}
      >
        <GitHubLogoIcon className="w-4 h-4 mr-2" />
        GitHub
      </Button>
    </div>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Tayyeb Bhatti
          </Link>   

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <div className="ml-4">
              <ActionButtons />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <HamburgerMenuIcon className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="mt-6 space-y-4">
                  <NavLinks mobile />
                  <div className="pt-4 border-t">
                    <ActionButtons mobile />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;