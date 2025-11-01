import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Moon, Sun } from 'lucide-react'
import todoImage from '@/assets/todo.png'
import profileImage from '@/assets/profile-fetcher.png'
import colorSchemeImage from '@/assets/color-scheme.png'
import profileImage2 from '@/assets/profile-fetcher-react.png'
import warGameImage from '@/assets/war-game.png'
import urlShortnerImage from '@/assets/url-shortner.png'
import myImg from '@/assets/myImg.jpg'
import storyWeaverImage from '@/assets/story-weaver.jpg'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "Todo Task Manager",
      description: "A feature-rich task management application with drag-and-drop functionality, priority levels, and real-time filtering.",
      technologies: ["React", "Tailwind CSS", "shadcn/ui", "Vite", "Vercel"],
      image: todoImage,
      liveDemo: "https://todo-app-81lw.vercel.app/",
      github: "https://github.com/Hassan-Adelani-Luqman/todo-app",
      details: "A feature-rich task management application demonstrating modern React development skills. Features include drag-and-drop reordering, priority levels, due date tracking, real-time search/filtering, and responsive design using Tailwind CSS and shadcn/ui components. Implemented with React 19, Vite, and deployed on Vercel with proper state management and data persistence."
    },
    {
      id: 2,
      title: "Github Profile Fetcher with JavaScript",
      description: "A web application that allows users to search for GitHub profiles and view their information and repositories.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: profileImage,
      liveDemo: "https://github-profile-fetcher-one.vercel.app/",
      github: "https://github.com/Hassan-Adelani-Luqman/github-profile-fetcher",
      details: "A web application that allows users to search for GitHub profiles and view their information and repositories."
    },
    {
      id: 3,
      title: "Github profile fetcher with React",
      description: "A web application that allows users to search for GitHub profiles and view their information and repositories.",
      technologies: ["React", "Tailwind CSS", "Semantic UI React 2.1.5", "GitHub REST API", "JavaScript ES6+", "Vite", "Vercel"],
      image: profileImage2,
      liveDemo: "https://github-profile-fetcher-with-react-c.vercel.app/",
      github: "https://github.com/Hassan-Adelani-Luqman/Github-profile-fetcher-with-React",
      details: "created a web application that allows users to search for GitHub profiles and view their information and repositories using React"
    },
    {
      id: 4,
      title: "Color Scheme Generator",
      description: "A web application that allows users to generate color schemes based on a color input.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: colorSchemeImage,
      liveDemo: "https://color-scheme-generator-rouge.vercel.app/",
      github: "https://github.com/Hassan-Adelani-Luqman/color-scheme-generator",
      details: "This is a simple web app that allows users to generate and explore color schemes based on a seed color and a selected mode using The Color API."
    },
    {
      id: 5,
      title: "War Game",
      description: `A simple browser-based card game implementation of "War" built with HTML, CSS, and JavaScript. The game uses the Deck of Cards API to handle card deck operations.`,
      technologies: ["HTML", "CSS", "JavaScript"],
      image: warGameImage,
      liveDemo: "https://war-game-snowy.vercel.app/",
      github: "https://github.com/Hassan-Adelani-Luqman/war-game",
      details: "This is a simple web app that allows users to generate and explore color schemes based on a seed color and a selected mode using The Color API."
    },
    {
      id: 6,
      title: "URL Shortener",
      description: "A modern, full-featured URL shortener web app. Shorten long links, customize your short URLs",
      technologies: ["React", "Vite", "Tailwind CSS"],
      image: urlShortnerImage,
      liveDemo: "https://url-shortner-flax-delta.vercel.app/",
      github: "https://github.com/Hassan-Adelani-Luqman/url-shortner",
      details: "A modern, full-featured URL shortener web app. Shorten long links, customize your short URLs"
    },
    {
      id: 7,
      title: "Story weaver bot",
      description: "Story Weaver Bot is a web application that generates creative short stories based on user prompts and selected moods (such as fantasy, sci-fi, mystery, adventure, or romance). Powered by Google Gemini AI, the app crafts engaging narratives and suggests story titles, while also fetching relevant images from Unsplash to visually enhance each story",
      technologies: ["HTML (Jinja2 templates)", "CSS", "JavaScript", "Python", "Flask", "Google Gemini AI", "Unsplash API"],
      image: storyWeaverImage,
      liveDemo: "https://hassanadelani1.pythonanywhere.com/",
      github: "https://github.com/Hassan-Adelani-Luqman/story-weaver-bot",
      details: "Story Weaver Bot is a web application that generates creative short stories based on user prompts and selected moods (such as fantasy, sci-fi, mystery, adventure, or romance). Powered by Google Gemini AI, the app crafts engaging narratives and suggests story titles, while also fetching relevant images from Unsplash to visually enhance each story"
    }
  ]

  const skills = {
    "Languages": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Node JS", "Python"],
    "Frameworks/Libraries": ["React", "Express"],
    "Styling": ["Tailwind CSS", "Sass/SCSS", "Styled Components", "CSS Grid/Flexbox"],
    "Tools & Others": ["Git/GitHub", "Vite", "npm/Yarn", "REST APIs", "Responsive Design"]
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Hassan's Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 text-foreground hover:text-primary transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-foreground hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-foreground hover:text-primary transition-colors">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-left py-2 text-foreground hover:text-primary transition-colors">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-foreground hover:text-primary transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Hassan Adelani
              <br />
              <span className="text-xl sm:text-2xl text-muted-foreground">Software Developer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Building seamless web experiences with a focus on user-centric design and modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={() => scrollToSection('projects')} className="w-full sm:w-auto">
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="w-full sm:w-auto">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Hassan Adelani, a passionate frontend developer with a love for creating beautiful, functional, and user-friendly web experiences. 
                My journey into web development started with curiosity about how websites work, and it has evolved into a deep 
                appreciation for the craft of building digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in React and modern JavaScript, with a strong focus on responsive design, accessibility, and performance optimization. 
                I'm always eager to learn new technologies and take on challenging projects that push my skills to the next level.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
                or learning about the latest developments in web technology.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-6xl text-primary-foreground"><img src={myImg} /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-4xl"><img src={project.image} alt={project.title} className="w-full h-full object-cover" /></span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Let's work together</h3>
              <p className="text-lg text-muted-foreground">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">luqmanadelani1@gmail.com</span>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/Hassan-Adelani-Luqman" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/hassan-adelani" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  action="https://formspree.io/f/xwpbakej"
                  method="POST"
                >
                  <div>
                    <Input name="name" placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <Input name="subject" placeholder="Subject" required />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Hassan Adelani. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

