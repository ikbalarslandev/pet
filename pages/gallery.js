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
  const honeyRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const sections = [
      { ref: fifiRef, position: fifiRef.current.offsetTop },
      { ref: dolmaRef, position: dolmaRef.current.offsetTop },
      { ref: honeyRef, position: honeyRef.current.offsetTop },
    ];

    // Find the closest section
    const closestSection = sections.reduce((prev, curr) => {
      return Math.abs(curr.position - scrollPosition) <
        Math.abs(prev.position - scrollPosition)
        ? curr
        : prev;
    });

    // Scroll to the closest section
    closestSection.ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let timeoutId;
    const scrollListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", scrollListener);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollListener);
      clearTimeout(timeoutId);
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
      {/* honey */}
      <div ref={honeyRef} className="bg-yellow h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Honey</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
