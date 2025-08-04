import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Download, Github, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { toast } = useToast();
  const form = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.sendForm('service_dis36l6', 'template_d359soh', form.current, 'oVybyrAnfimAh_PdU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Contactez-moi
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour discuter d'opportunités, de projets ou simplement pour échanger
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">tayyebbhatti9701@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Localisation</h3>
                      <p className="text-sm text-muted-foreground">Strasbourg, France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Disponibilité</h3>
                      <p className="text-sm text-muted-foreground">Recherche un Stage de octobre 2025 a janvier 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Mes liens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("https://www.linkedin.com/in/tbhatti97/", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("https://github.com/TayyebBhatti", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
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
                  <Download className="w-4 h-4 mr-2" />
                    Télécharger CV
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nom complet
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre.email@exemple.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Sujet
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Sujet de votre message"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Votre message..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full md:w-auto flex items-center space-x-2 shadow-card"
                    >
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </Button>
                  </form>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default Contact;