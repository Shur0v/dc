import aboutbg from '../../assets/Backgrounds/bg2.svg';

import about1 from '../../assets/Images/abt1.png';
import about2 from '../../assets/Images/abt2.png';
import about3 from '../../assets/Images/abt3.png';
import about4 from '../../assets/Images/abt4.png';

import brand1 from '../../assets/Images/bn1.svg';
import brand2 from '../../assets/Images/bn2.svg';
import brand3 from '../../assets/Images/bn3.svg';
import brand4 from '../../assets/Images/bn4.svg';
import brand5 from '../../assets/Images/bn5.svg';

const aboutData = [
  {
    id: 1,
    title: 'Event Creation',
    description:
      'From immersive events to large-scale activations, we bring concepts to life with precision and creativity, delivering experiences that captivate audiences and achieve goals.',
  },
  {
    id: 2,
    title: 'Small Business Support',
    description:
      'We champion local entrepreneurs, especially women and people of color, with initiatives that boost visibility, spark growth, and foster lasting success.',
  },
  {
    id: 3,
    title: 'Cultural & Community Connection',
    description:
      'Our events celebrate diverse cultures and bring communities together, building relationships that extend beyond the event itself.',
  },
  {
    id: 4,
    title: 'Seamless Project Leadership',
    description:
      'With a strategic yet hands-on approach, we coordinate complex projects with ease, uniting teams and partners to exceed expectations.',
  },
];
const cardData = [
  {
    id: 1,
    name: 'Ayanna Smith',
    experiance:
      'Founder · Ecosystem Builder · Communications Executive & Strategy Consultant',
    img: about1,
  },
  {
    id: 2,
    name: 'Maisha Stephens-Teacher',
    experiance:
      'Boutique Salon Owner · Children’s Boutique Owner Salon Startup Consultant',
    img: about2,
  },
  {
    id: 3,
    name: 'Melody Jackson',
    experiance:
      'Relationship Management & Strategic Partnerships Executive',
    img: about3,
  },
  {
    id: 4,
    name: 'Porchfest DC',
    experiance:
      'A nonprofit 501 (C)3 supporting creatives',
    img: about4,
  },
];

const About2 = () => {
  return (
    <>
      {/* Background Container */}
      <div
        className="background h-auto w-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        {/* Heading */}
        <h1 className="text-left md:text-center px-6 text-5xl font-semibold pt-16">About</h1>
        {/* Subheading/Description */}
        <p className="text-left px-6 md:text-center text-md py-6 md:w-2/6 mx-auto text-[#4A4C56]">
          Our team is a powerhouse of passionate strategists, event architects, and ecosystem builders with over
          75 years of combined experience in making bold visions come to life. We bring a deep commitment to
          empowering small businesses, orchestrating memorable events, and driving meaningful impact through
          every project we touch.
        </p>



        <h1 className="text-center text-4xl font-bold py-8">Our Specialties</h1>


        <div className="content w-full md:w-[1420px] grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center mx-auto ">
          {/* Mapping through aboutData */}
          {aboutData.map(({ title, description, id }) => (
            <div
              key={id}
              className="w-[337px] h-[268px] p-4 bg-[#f6dc0e] rounded-xl flex-col justify-start items-start gap-3 inline-flex"
            >
              {/* Title */}
              <div className="self-stretch text-[#070707] text-2xl font-bold leading-9">{title}</div>
              {/* Description */}
              <div className="self-stretch text-[#4a4c56] text-xl font-normal leading-[30px]">{description}</div>
            </div>
          ))}
        </div>

        <h1 className="text-center text-5xl font-bold py-12 mt-6">The Curators</h1>


{/* ==============User card start=============== */}
          <div className="cards w-full md:w-[1420px] grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center mx-auto ">

          {cardData.map(({name, experiance, img}) => (

                <div className="w-[337px] h-[574px] relative">
                {/* Wrapper div with fixed width and height, positioned relative */}

                <div className="w-full h-[88px] absolute bottom-0 flex flex-col justify-center items-start gap-4">
                {/* Footer section with full width, fixed height, and positioned at the bottom */}
                <div className="self-stretch text-[#070707] text-2xl font-bold leading-7">
                {name}
                </div>
                <div className="self-stretch text-[#4a4c56] text-sm font-medium leading-normal">
                {/* Description text with custom gray color, normal font size (16px), medium weight, and normal line height */}
                {experiance}
                </div>
                </div>
                <div className="w-full h-[466px] absolute top-0 rounded-tl-lg rounded-tr-lg overflow-hidden">
                {/* Image container with full width, fixed height, light yellow background, and rounded top corners */}
                <img
                className="w-full h-full object-cover rounded-lg"
                src={img}
                alt="Profile"
                />
                {/* Image spanning full width and height with rounded corners and proper scaling */}

                </div>
                </div>

          ))}



          </div>
{/* ==============User card End=============== */}



<div className="bottomCard md:w-[1420px] mx-auto h-auto py-24 md:hidden">
  <div className="w-full py-6 bg-[#f6dc0e] rounded-[20px] flex flex-col justify-start items-center gap-8">
    <div className="text-center text-[#070707] text-5xl font-medium capitalize">
      Our Partners
    </div>
    <div className="md:w-[1186px] p-12 grid grid-cols-3 gap-4 justify-between items-center">
      <img className="h-auto max-h-20 w-auto" src={brand1} alt="Brand 1" />
      <img className="h-auto max-h-20 w-auto" src={brand2} alt="Brand 2" />
      <img className="h-auto max-h-20 w-auto" src={brand3} alt="Brand 3" />
      <img className="h-auto max-h-20 w-auto" src={brand4} alt="Brand 4" />
      <img className="h-auto max-h-20 w-auto" src={brand5} alt="Brand 5" />
    </div>
  </div>
</div>

<div className="bottomCard md:w-[1420px] mx-auto h-auto py-24 hidden md:block">
  <div className="w-full py-6 bg-[#f6dc0e] rounded-[20px] flex flex-col justify-start items-center gap-8">
    <div className="text-center text-[#070707] text-5xl font-medium capitalize">
      Our Partners
    </div>
    {/* Responsive grid */}
    <div className="w-full p-6 grid grid-cols-1 gap-4 md:grid-cols-5 justify-items-center items-center">
      <img className="h-auto max-h-20 w-auto" src={brand1} alt="Brand 1" />
      <img className="h-auto max-h-20 w-auto" src={brand2} alt="Brand 2" />
      <img className="h-auto max-h-20 w-auto" src={brand3} alt="Brand 3" />
      <img className="h-auto max-h-20 w-auto" src={brand4} alt="Brand 4" />
      <img className="h-auto max-h-20 w-auto" src={brand5} alt="Brand 5" />
    </div>
  </div>
</div>


      </div>
    </>
  );
};

export default About2;
