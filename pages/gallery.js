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
  return (
    <div className="text-center bg-cyan-500 h-[100vh] ">
      <div className="pt-16">
        <h1 className="font-bold text-3xl">Fifi</h1>
        <GallerySwiper images={fifiImages} />
      </div>
    </div>
  );
};

export default Gallery;
