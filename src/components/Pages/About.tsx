import '../../index.css'
import aboutbg from "../../assets/Backgrounds/bg2.svg";
import map from "../../assets/Images/map.svg";


const About = () => {
  return (
    <>
  <div className="background h-auto w-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${aboutbg})` }}>

        <h1 className="text-left px-6 md:text-center text-5xl font-semibold pt-16">Celebrate! DC - The Experience</h1>
        <p className="text-left px-6 md:text-center text-3xl font-medium pt-6 md:py-4 text-[#4a4c56]">Cooming Soon</p>


            <div className="content lg:w-[1420px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 py-14 mx-auto">
                <div className="left">
                    <img className="h-full w-auto px-8" src={map} alt="map" />
                </div>
                <div className="right flex flex-col justify-center">
                    <p className="text-xl font-normal text-[#4a4c56] px-8">
                    Discover Washington, DC beyond the iconic national monuments—a city where people live,
                    thrive and play. <br />  <br /> 

                    Celebrate! DC - The Experience brings the best of all "eight Wards" into one immersive
                    destination. Through 3D visuals, virtual reality tours and life-sized installations of local
                    landmarks, you can 'Walk" the streets, explore neighborhood attractions, and uncover hidden
                    gems. <br /> <br /> 

                    Feel the rhythm of live GoGo music, savor DC's mouth-watering eats like fried chicken with Mumbo Sauce, and experience art, innovations and small businesses from around the city. Celebrate! DC invites you to experience the real DC—an immersive event that brings the city's true character to life. <br />

                    <button className="bg-[#e5cc0c] hover:bg-[#f6dc0e] transition drop-shadow-xl rounded-md border border-white w-full py-6 md:py-2 md:px-5 mt-10 text-black font-medium">Join the Waitlist &#11166;</button>

                    </p>
                </div>
            </div>


        </div>
    </>
  )
}

export default About