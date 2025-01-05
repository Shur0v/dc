import '../../index.css'
import bg1 from '../../assets/Backgrounds/Homebg.png'

const Home = () => {
  return (
    <>
        <div className="background h-screen w-full bg-no-repeat bg-cover relative flex flex-col justify-center" style={{ backgroundImage: `url(${bg1})` }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent"></div>

        <div className="content relative md:w-[1420px] md:mx-auto">
            <div className="Left w-full ">
            <h1 className="text-6xl md:text-9xl font-semibold text-white pb-32 ">The<br />Experience</h1>
            <p className="uppercase inline-block p-2 font-semibold text-white text-2xl md:text-5xl bg-black">
            An immersive discovery <br /> of the real DC </p>
            </div>
        </div>
        </div>

    </>
  )
}

export default Home;