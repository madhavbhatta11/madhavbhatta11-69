import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

const Photography = () => {
  // Replace with your actual photos
  const photos = [
    { id: 1, src: "/lovable-uploads/placeholder-photo-1.jpg", alt: "Photography 1", title: "Landscape" },
    { id: 2, src: "/lovable-uploads/placeholder-photo-2.jpg", alt: "Photography 2", title: "Portrait" },
    { id: 3, src: "/lovable-uploads/placeholder-photo-3.jpg", alt: "Photography 3", title: "Street" },
    { id: 4, src: "/lovable-uploads/placeholder-photo-4.jpg", alt: "Photography 4", title: "Nature" },
    { id: 5, src: "/lovable-uploads/placeholder-photo-5.jpg", alt: "Photography 5", title: "Architecture" },
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  const updateCenter = () => {
    if (!api) return;
    // Slides currently in view (accounting for loop & partially visible)
    const inView = api.slidesInView(true);
    if (inView.length > 0) {
      const middle = inView[Math.floor(inView.length / 2)];
      setCenterIndex(middle);
    } else {
      // Fallback to selected snap
      setCenterIndex(api.selectedScrollSnap());
    }
  };

  const startAuto = () => {
    if (!api) return;
    stopAuto();
    timerRef.current = window.setInterval(() => {
      api.scrollNext();
    }, 3500);
  };

  const stopAuto = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!api) return;

    // Initial center calc
    updateCenter();

    // Update center on relevant events
    const onSelect = () => updateCenter();
    const onScroll = () => updateCenter();
    const onReInit = () => updateCenter();

    api.on("select", onSelect);
    api.on("scroll", onScroll);
    api.on("reInit", onReInit);

    // Start autoplay
    startAuto();

    return () => {
      stopAuto();
      api.off("select", onSelect);
      api.off("scroll", onScroll);
      api.off("reInit", onReInit);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  return (
    <section id="photography" className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section mb-6">PHOTOGRAPHY</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of moments captured through my lens, showcasing different perspectives and stories.
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
              align: "center", // center alignment for a clear focused slide
              loop: true,
            }}
          >
            {/* -ml padding helps align the gutter nicely; adjust if needed */}
            <CarouselContent className="-ml-2 md:-ml-3 lg:-ml-4">
              {photos.map((photo, idx) => {
                const isCenter = idx === centerIndex;
                return (
                  <CarouselItem
                    key={photo.id}
                    className="
                      pl-2 md:pl-3 lg:pl-4
                      basis-full sm:basis-1/2 lg:basis-1/3
                    "
                  >
                    <div
                      className={`relative group transition-transform duration-300`}
                      style={{
                        transform: `scale(${isCenter ? 1.05 : 0.95})`,
                        zIndex: isCenter ? 2 : 1,
                      }}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.parentElement!.setAttribute(
                              "style",
                              "background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));"
                            );
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
                  </CarouselItem>
                );
              })}
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
