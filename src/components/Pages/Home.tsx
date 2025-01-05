import '../../index.css'
import bg1 from '../../assets/Backgrounds/bg.mp4'

const Home = () => {
  return (
    <>
      <div className="background h-screen w-full relative flex flex-col justify-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={bg1}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent z-10"></div>

        {/* Content */}
        <div className="content relative z-20 md:w-[1420px] md:mx-auto px-6">
          <div className="Left w-full">
            <h1 className="text-6xl md:text-9xl font-semibold text-white pb-32">
              The<br />Experience
            </h1>
            <p className="uppercase inline-block p-2 font-semibold text-white text-2xl md:text-5xl bg-black">
              An immersive discovery <br /> of the real DC
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;