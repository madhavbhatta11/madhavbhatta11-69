import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

// Import 7 photos (with .jpeg extension)
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";
import photo5 from "@/assets/photo5.jpeg";
import photo6 from "@/assets/photo6.jpeg";
import photo7 from "@/assets/photo7.jpeg";

const Photography = () => {
  const photos = [
    { id: 1, src: photo1, alt: "Photography 1", title: "Photo 1" },
    { id: 2, src: photo2, alt: "Photography 2", title: "Photo 2" },
    { id: 3, src: photo3, alt: "Photography 3", title: "Photo 3" },
    { id: 4, src: photo4, alt: "Photography 4", title: "Photo 4" },
    { id: 5, src: photo5, alt: "Photography 5", title: "Photo 5" },
    { id: 6, src: photo6, alt: "Photography 6", title: "Photo 6" },
    { id: 7, src: photo7, alt: "Photography 7", title: "Photo 7" },
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  const updateCenter = () => {
    if (!api) return;
    const inView = api.slidesInView();
    if (inView.length > 0) {
      const middle = inView[Math.floor(inView.length / 2)];
      setCenterIndex(middle);
    } else {
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

    updateCenter();

    const onSelect = () => updateCenter();
    const onScroll = () => updateCenter();
    const onReInit = () => updateCenter();

    api.on("select", onSelect);
    api.on("scroll", onScroll);
    api.on("reInit", onReInit);

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
            A collection of moments captured through my lens, showcasing
            different perspectives and stories.
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
              align: "center",
              loop: true,
            }}
          >
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
                      className="relative group transition-transform duration-300"
                      style={{
                        transform: `scale(${isCenter ? 1.05 : 0.95})`,
                        zIndex: isCenter ? 2 : 1,
                      }}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-primary to-secondary">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
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

            {/* Navigation buttons */}
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
