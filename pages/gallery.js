import GallerySwiper from "../components/gallerySwiper";

const fifiImages = [
  "/img/gallery/fifi/1fifi.png",
  "/img/gallery/fifi/2fifi.png",
  "/img/gallery/fifi/3fifi.png",
  "/img/gallery/fifi/4fifi.png",
  "/img/gallery/fifi/5fifi.png",
  "/img/gallery/fifi/6fifi.jpg",
];

const Gallery = () => {
  return (
    <div className="text-center bg-cyan-500 h-[100vh]">
      <div className="py-28">
        <h1 className="font-bold text-3xl">Fifi</h1>
        <GallerySwiper images={fifiImages} />
      </div>
    </div>
  );
};

export default Gallery;
