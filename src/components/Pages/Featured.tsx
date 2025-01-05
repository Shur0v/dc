// src/components/Featured.tsx
import "../../index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from 'swiper';

// Import your images here
import c1 from "../../assets/Images/c1.png";
import c2 from "../../assets/Images/c2.png";
import c3 from "../../assets/Images/c3.png";
import c4 from "../../assets/Images/c4.png";

// Define the data array
const featuredData = [
  {
    id: 1,
    title: "Porchfest DC",
    description:
      "Porchfest DC is a Washington, DC nonprofit (501(c)(3)) that produces unique multidimensional activations, showcasing local creatives and performers.",
    image: c1,
    link: {
      text: "Read More",
      url: "#", // Replace with actual URL
    },
  },
  {
    id: 2,
    title: "Creative Minds",
    description:
      "Creative Minds empowers artists and entrepreneurs to bring their innovative ideas to life through community support and resources.",
    image: c2,
    link: {
      text: "Discover",
      url: "#", // Replace with actual URL
    },
  },
  {
    id: 3,
    title: "Innovate Hub",
    description:
      "Innovate Hub is dedicated to fostering technological advancements and supporting startups in the tech ecosystem.",
    image: c3,
    link: {
      text: "Explore",
      url: "#", // Replace with actual URL
    },
  },
  {
    id: 4,
    title: "Artisan Market",
    description:
      "Artisan Market connects skilled craftsmen with consumers, offering a diverse range of handmade products and unique creations.",
    image: c4,
    link: {
      text: "Shop Now",
      url: "#", // Replace with actual URL
    },
  },
];


const Featured = () => {
  return (
    <>
      {/* Background Container */}
      <div className="background h-auto w-full bg-[#f5f3e0]">
        {/* Heading */}
        <h1 className="text-left px-6 md:text-center text-5xl pt-16">
          Featured Collaborators
        </h1>
        {/* Subheading/Description */}
        <p className="text-left px-6 md:text-center font-medium py-6 text-[#4A4C56] w-4/6 md:mx-auto">
          Discover a carefully curated selection of small businesses, creatives,
          and founders,
          <br className="hidden md:block" />
          showcasing their distinct products, services, and innovations at
          Celebrate! DC.
        </p>

        {/* Content Grid / Slider */}
        <div className="w-full lg:w-[1420px] mx-auto pb-20 px-6">
          {/* মোবাইলে স্লাইডার এবং ডেক্সটপে গ্রিড দেখানোর জন্য */}
          <div className="block md:hidden">
            <Swiper
              // modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
            >
              {featuredData.map(({ id, title, description, image, link }) => (
                <SwiperSlide key={id}>
                  <div className="h-[440px] w-full flex flex-col justify-between">
                    {/* Image Section */}
                    <img
                      className="h-48 w-full object-cover rounded-tl-xl rounded-tr-xl"
                      src={image}
                      alt={title}
                    />
                    {/* Content Section */}
                    <div className="w-full flex-1 px-4 py-5 bg-white rounded-bl-2xl rounded-br-2xl flex flex-col justify-between gap-5">
                      {/* Title and Description */}
                      <div className="flex flex-col justify-start items-start gap-6">
                        {/* Title */}
                        <div className="flex flex-col justify-start items-start gap-3">
                          <div className="text-[#211a1d] text-2xl leading-normal">
                            {title}
                          </div>
                        </div>
                        {/* Description */}
                        <div className="text-[#4a4c56] text-base leading-normal line-clamp-3">
                          {description}
                        </div>
                      </div>
                      {/* Read More Link */}
                      <div className="flex justify-start gap-1">
                        <div className="flex justify-start items-center gap-2">
                          <a
                            href={link.url}
                            className="text-[#2a5660] text-base underline leading-none"
                          >
                            {`${link.text} `}&#11106;
                          </a>
                          {/* Placeholder for an icon or additional content */}
                          <div className="w-4 relative overflow-hidden" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 drop-shadow-xl place-items-center">
            {featuredData.map(({ id, title, description, image, link }) => (
              <div
                key={id}
                className="h-[440px] w-[337px] flex flex-col justify-between"
              >
                {/* Image Section */}
                <img
                  className="h-48 w-full object-cover rounded-tl-xl rounded-tr-xl"
                  src={image}
                  alt={title}
                />
                {/* Content Section */}
                <div className="w-full flex-1 px-4 py-5 bg-white rounded-bl-2xl rounded-br-2xl flex flex-col justify-between gap-5">
                  {/* Title and Description */}
                  <div className="flex flex-col justify-start items-start gap-6">
                    {/* Title */}
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div className="text-[#211a1d] text-2xl leading-normal">
                        {title}
                      </div>
                    </div>
                    {/* Description */}
                    <div className="text-[#4a4c56] text-base leading-normal line-clamp-3">
                      {description}
                    </div>
                  </div>
                  {/* Read More Link */}
                  <div className="flex justify-start gap-1">
                    <div className="flex justify-start items-center gap-2">
                      <a
                        href={link.url}
                        className="text-[#2a5660] text-base underline leading-none"
                      >
                        {`${link.text} `}&#11106;
                      </a>
                      {/* Placeholder for an icon or additional content */}
                      <div className="w-4 relative overflow-hidden" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="center md:flex md:justify-center py-8 hidden md:block ">
          <button className="bg-[#e5cc0c] hover:bg-[#f6dc0e] transition drop-shadow-xl rounded-md border border-white py-3 px-5 mt-10 text-black font-medium my-6">
            View All &#11166;
          </button>
        </div>
      </div>
    </>
  );
};


export default Featured;
