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
    <div className="text-center">
      {/* jamie */}
      <div className="bg-cyan-500 min-h-[100vh]">
        <div className="pt-5">
          <h1 className="font-bold text-3xl">Jamie</h1>
          <GallerySwiper images={fifiImages} />
        </div>
        <div className="text-sm mx-2 text-left flex flex-col gap-2 my-4">
          <p>
            I had the delightful opportunity to care for Fifi, a senior cat,
            during a two-week drop-in visit. Fifi’s affectionate and cuddly
            nature made each visit a pleasure.
          </p>
          <p>
            She particularly enjoyed being brushed and would eagerly seek out
            attention and gentle grooming.
          </p>
          <p>
            Additionally, she had a quirky habit of crunching on leaves, which
            added a charming touch to our time together.
          </p>
          <p>
            My experience with Fifi was truly enjoyable, as her loving
            personality and unique preferences made each interaction special.
          </p>
        </div>
      </div>
      {/* daphnie */}
      <div className="bg-orange-500 h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Daphnie</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>
      {/* dolma */}
      <div className="bg-yellow h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Dolma</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>
      {/* fifi */}
      <div className="bg-cyan-500 h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Fifi</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>
      {/* tobey */}
      <div className="bg-orange-500 h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Tobey</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>

      {/* milky */}
      <div className="bg-yellow h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Milky</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>
      {/* soda */}
      <div className="bg-cyan-500 h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Soda</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>
      {/* bean */}
      <div className="bg-orange-500 h-[100vh]">
        <div className="pt-16">
          <h1 className="font-bold text-3xl">Bean</h1>
          <GallerySwiper images={fifiImages} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
