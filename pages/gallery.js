import GallerySwiper from "../components/gallerySwiper";
import { IoIosArrowBack } from "react-icons/io";

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
    <div className="text-center relative min-h-[100vh] bg-cyan-500">
      <div
        className="sticky top-4 mx-2 text-left  "
        onClick={() => window.history.back()}
      >
        <IoIosArrowBack />
      </div>
      {/* jamie */}
      <div className="bg-cyan-500 min-h-[100vh]">
        <div className="pt-2">
          <h1 className="font-bold text-3xl">Jamie</h1>
          <GallerySwiper images={fifiImages} />
        </div>
        <div className="text-sm mx-2 text-left flex flex-col gap-2 my-4">
          <p>
            During my drop-in visits with Jamie, a playful and affectionate cat,
            I had the pleasure of engaging with his energetic personality.
          </p>
          <p>
            Jamie followed me everywhere, eager for interaction and affection.
          </p>
          <p>
            Although he had a playful tendency to bite, it was always in a
            lighthearted manner.
          </p>
          <p>
            He adored cuddles and was especially fond of playing with his toys.
          </p>
          <p>
            Each visit was filled with fun and warmth, making my time with Jamie
            both enjoyable and memorable.
          </p>
        </div>
      </div>
      {/* daphnie */}
      <div className="bg-orange-500 min-h-[100vh]">
        <div className="pt-5">
          <h1 className="font-bold text-3xl">Daphne</h1>
          <GallerySwiper images={fifiImages} />
        </div>
        <div className="text-sm mx-2 text-left flex flex-col gap-2 py-4">
          <p>
            During my drop-in visits with Daphne, a sweet and laid-back Golden
            Retriever, I experienced the joy of caring for a truly affectionate
            companion.
          </p>
          <p>
            Daphne’s favorite pastime is cuddling and she particularly loves
            sitting on your lap, making her a warm and comforting presence.
          </p>
          <p>
            Her calm demeanor and love for close contact ensured that each visit
            was both relaxing and enjoyable.
          </p>
          <p>
            He adored cuddles and was especially fond of playing with his toys.
          </p>
          <p>
            My time with Daphne was marked by her gentle nature and the special
            bond we developed through our cuddles and shared moments.
          </p>
        </div>
      </div>
      {/* dolma */}
      <div className="bg-yellow min-h-[100vh]">
        <div className="pt-5">
          <h1 className="font-bold text-3xl">Dolma</h1>
          <GallerySwiper images={fifiImages} />
        </div>
        <div className="text-sm mx-2 text-left flex flex-col gap-2 py-4">
          <p>
            I had the pleasure of pet sitting Dolma, a senior poodle with a
            relaxed and affectionate personality.
          </p>
          <p>
            Dolma is a lovable companion who enjoys short walks and is always
            ready for a cuddle.
          </p>
          <p>
            During the month I cared for him, he followed me everywhere and
            quickly adapted to our routine, making the experience both enjoyable
            and rewarding.
          </p>
        </div>
      </div>
      {/* fifi */}
      <div className="bg-cyan-500 min-h-[100vh]">
        <div className="pt-5">
          <h1 className="font-bold text-3xl">Fifi</h1>
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
