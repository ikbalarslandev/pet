import { useRef, useEffect } from "react";
import GallerySwiper from "../components/gallerySwiper";

const fifiImages = [
  "/img/gallery/fifi/1.jpg",
  "/img/gallery/fifi/2.jpg",
  "/img/gallery/fifi/3.jpg",
  "/img/gallery/fifi/4.jpg",
  "/img/gallery/fifi/5.jpg",
  "/img/gallery/fifi/6.jpg",
];

const Gallery = () => {
  const fifiRef = useRef(null);
  const dolmaRef = useRef(null);

  const handleScroll = (e) => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Midpoint of the viewport
    const fifiPosition = fifiRef.current.offsetTop;
    const dolmaPosition = dolmaRef.current.offsetTop;

    // If scrolling down and near the bottom of the fifi section
    if (
      scrollPosition >= fifiPosition &&
      scrollPosition < dolmaPosition &&
      e.deltaY > 0
    ) {
      dolmaRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // If scrolling up and near the top of the dolma section
    else if (scrollPosition >= dolmaPosition && e.deltaY < 0) {
      fifiRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="text-center">
      {/* fifi */}
      <div ref={fifiRef} className="bg-cyan-500 h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Fifi</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>
      {/* dolma */}
      <div ref={dolmaRef} className="bg-orange-500 h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Dolma</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
