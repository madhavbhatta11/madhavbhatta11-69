import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Photography = () => {
  // Placeholder photos - you can replace these with your actual photos
  const photos = [
    {
      id: 1,
      src: "/lovable-uploads/placeholder-photo-1.jpg",
      alt: "Photography 1",
      title: "Landscape"
    },
    {
      id: 2,
      src: "/lovable-uploads/placeholder-photo-2.jpg", 
      alt: "Photography 2",
      title: "Portrait"
    },
    {
      id: 3,
      src: "/lovable-uploads/placeholder-photo-3.jpg",
      alt: "Photography 3", 
      title: "Street"
    },
    {
      id: 4,
      src: "/lovable-uploads/placeholder-photo-4.jpg",
      alt: "Photography 4",
      title: "Nature"
    },
    {
      id: 5,
      src: "/lovable-uploads/placeholder-photo-5.jpg",
      alt: "Photography 5",
      title: "Architecture"
    }
  ];

  return (
    <section id="photography" className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section mb-6">
            PHOTOGRAPHY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of moments captured through my lens, showcasing different perspectives and stories.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {photos.map((photo) => (
                <CarouselItem key={photo.id}>
                  <div className="flex justify-center">
                    <div className="relative group">
                      <div className="aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback to a gradient background if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.style.background = 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))';
                            target.parentElement!.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center text-white">
                                <div class="text-center">
                                  <div class="text-2xl mb-2">📸</div>
                                  <div class="text-lg">${photo.title}</div>
                                  <div class="text-sm opacity-80">Photo placeholder</div>
                                </div>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {photo.title}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Use the arrow buttons to navigate through the gallery
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photography;