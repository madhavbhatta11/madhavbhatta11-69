import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/new-project-image.jpg";
import stockPredictorImg from "@/assets/project-stockpredictor.jpg";
import sentimentImg from "@/assets/project-sentiment.jpg";
import cpuImg from "@/assets/project-cpu.jpg";
import osImg from "@/assets/project-os.jpg";
import reactUiImg from "@/assets/project-react-ui.jpg";

const Portfolio = () => {
  const projects = {
    webDevelopment: [
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
        image: ecommerceImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
      {
        title: "Task Management App",
        description: "Real-time collaborative task manager with WebSocket integration",
        image: taskManagerImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
      {
        title: "Portfolio Website",
        description: "Responsive portfolio site with modern design and animations",
        image: stockPredictorImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
    ],
    dataScience: [
      {
        title: "Stock Price Predictor",
        description: "Machine learning model for stock market prediction using LSTM",
        image: stockPredictorImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
      {
        title: "Sentiment Analysis Tool",
        description: "NLP-based sentiment analyzer for social media data",
        image: sentimentImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
      {
        title: "Image Classification",
        description: "CNN model for computer vision tasks with 95% accuracy",
        image: taskManagerImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
    ],
    academic: [
      {
        title: "CPU Design Project",
        description: "32-bit RISC processor design in Verilog with full pipeline",
        image: cpuImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
      {
        title: "Operating System",
        description: "Custom OS kernel with memory management and scheduling",
        image: osImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
      {
        title: "Network Protocol",
        description: "Implementation of TCP/IP stack from scratch in C",
        image: ecommerceImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
    ],
    openSource: [
      {
        title: "React UI Library",
        description: "Contribution to popular React component library",
        image: reactUiImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
      {
        title: "Algorithm Visualizer",
        description: "Interactive tool for visualizing sorting and graph algorithms",
        image: taskManagerImg,
        github: "https://github.com/madhavbhatta11",
        demo: "#",
      },
    ],
  };

  const [api, setApi] = useState<CarouselApi | null>(null);
  const timerRef = useRef<number | null>(null);

  const startAuto = () => {
    if (!api) return;
    stopAuto();
    timerRef.current = window.setInterval(() => {
      api.scrollNext();
    }, 4000);
  };

  const stopAuto = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!api) return;
    startAuto();
    const onReInit = () => startAuto();
    api.on("reInit", onReInit);
    return () => {
      stopAuto();
      api.off("reInit", onReInit);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  const ProjectCard = ({
    title,
    description,
    image,
    github,
    demo,
  }: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string;
  }) => (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group max-w-sm mx-auto">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex gap-3">
          <a
            href={github}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={demo}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );

  const allProjects = [
    ...projects.webDevelopment,
    ...projects.dataScience,
    ...projects.academic,
    ...projects.openSource,
  ];

  return (
    <section id="portfolio" className="section-spacing bg-gradient-subtle">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section mb-6">FEATURED WORK</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my journey through computer engineering, from web
            development to machine learning and systems programming.
          </p>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <Carousel
            className="w-full"
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allProjects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard {...project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom nav buttons that use the Embla API */}
            <button
              type="button"
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border-0 shadow-lg rounded-full flex items-center justify-center cursor-pointer z-10"
              onClick={() => api?.scrollPrev()}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border-0 shadow-lg rounded-full flex items-center justify-center cursor-pointer z-10"
              onClick={() => api?.scrollNext()}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
