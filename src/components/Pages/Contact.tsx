import "../../index.css";
import cbg from "../../assets/Backgrounds/contactHor.svg";
import cbg2 from "../../assets/Backgrounds/contactVar.svg";
import logo from "../../assets/Images/Logo.svg";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { ImArrowUpRight2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";



const Contact = () => {
  return (
    <>

  {/* ================= Responsive Sign-up Section Start ================= */}
  <div
    className="background min-h-screen w-full bg-no-repeat bg-cover md:hidden overflow-hidden"
    style={{ backgroundImage: `url(${cbg2})` }}
  >

    <div className="box w-full max-w-full mx-auto px-4">





 {/* ============= Left Content Section Start ============ */}
 <div className="left w-full max-w-full px-4">
    <div className="relative top-0 left-0 flex flex-col gap-6 w-full max-w-full h-auto">
      {/* Logo Section */}
      <div className="relative flex justify-start w-full">
        <div className="relative w-[148px] h-16">
          <div className="absolute left-[47px] top-0 w-[100px] h-16">
            <div className="absolute top-[14px] left-0 w-[100px] h-[50px]" />
          </div>
          <div className="">
            {/* Logo Image */}
            <img src={logo} alt="Logo" className="h-20 w-auto my-3 pb-4" />
          </div>
        </div>
      </div>

      {/* Content Buttons Section */}
      <div className="flex flex-col gap-8 w-full pb-8">
        <div className="flex flex-col flex-wrap gap-4 items-start justify-between">
          {/* Sponsor or Partner Section */}
          <div className="flex flex-col gap-4 bg-white/10 rounded-lg backdrop-blur-[20px] w-full">
            <div className="flex items-center gap-2 px-4 py-4 border border-white rounded-lg">
              <div className="text-white text-base font-medium">
                Sponsor or Partner &#129122;
              </div>
            </div>
          </div>

          {/* Exhibit Section */}
          <div className="flex flex-col gap-4 bg-white/10 rounded-lg backdrop-blur-[20px] w-full">
            <div className="flex items-center gap-2 px-4 py-4 border border-white rounded-lg">
              <div className="text-white text-base font-medium">
                Exhibit (Small businesses & Artists) &#129122;
              </div>
            </div>
          </div>
        </div>

        {/* Learn More & Waitlist Section */}
        <div className="flex flex-wrap gap-4 w-full">
          <div className="w-full">
            <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-[20px] rounded-lg">
              <div className="flex items-center gap-2 px-4 py-4 border border-white rounded-lg">
                <div className="text-white text-base font-medium">
                  Learn More &#129122;
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-[20px] rounded-lg">
              <div className="flex items-center gap-2 px-4 py-4 border border-white rounded-lg">
                <div className="text-white text-base font-medium">
                  Join Ticket Waitlist &#129122;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ============= Left Content Section End ============ */}





      {/* ============= Right Content Section Start ============ */}
      <div className="right p-4 flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-full">
          {/* Heading Section */}
          <div className="text-left mb-6">
            <div className="text-[#e9e9ea] text-lg leading-[18px] tracking-tight mb-2">
              We can’t wait to see you in Washington, DC!
            </div>
            <div className="text-white text-2xl font-bold leading-snug tracking-wide flex">
              SIGN UP FOR UPDATES <ImArrowUpRight2 className="pt-1 pl-2 h-8 w-8 font-bold" />
            </div>
          </div>

          <hr className="py-4 border-[#64C2C9]"/>

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="flex flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-white border border-[#d9f3f4] rounded-xl py-3 px-4 text-[#777980] outline-none text-base placeholder:text-[#777980]"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white border border-[#d9f3f4] rounded-xl py-3 px-4 text-[#777980] outline-none text-base placeholder:text-[#777980]"
              />
            </div>

            {/* Subscribe Button */}
            <div className="flex justify-center">
              <button className="w-full bg-[#e5cc0c] hover:bg-[#f6dc0e] text-[#070707] font-medium py-3 px-8 rounded-xl transition-all border border-[#d9f3f4] text-lg">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-8 flex flex-col items-start gap-4">
            <div className="text-[#e9e9ea] text-sm font-semibold flex">
            <MdEmail className="mx-1 h-5 w-5 font-semibold" />  Email: <span className="font-medium">hello@celebratedc.com</span>
            </div>
            <div className="flex items-center gap-4">
              <BiLogoInstagramAlt className="h-8 w-8 text-white" />
              <AiFillTikTok className="h-8 w-8 text-white" />
              <FaSquareFacebook className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
      {/* ============= Right Content Section End ============ */}
    </div>
  </div>
  {/* ================= Responsive Sign-up Section End ================= */}











      {/* ================= Main Background Section Start ================= */}
      <div
        className="background h-auto w-full bg-no-repeat bg-cover hidden md:block"
        style={{ backgroundImage: `url(${cbg})` }}
      >
        <div className="box">
          {/* ================= Contact Form Section Start ================= */}
          <div className="w-full h-[600px] relative flex flex-col justify-center">
            {/* ================= Left and Right Containers Start ================= */}
            <div className="absolute flex flex-col justify-start items-start gap-10">
              {/* ================= Left Section Start ================= */}
              <div className="flex flex-col self-stretch h-[278px] gap-8">
                <div className="relative w-full h-[280px]">
                  {/* ============= Left Content Section Start ============ */}
                  <div className="left">
                    <div className="absolute top-0 left-0 flex flex-col gap-6 w-[592px] h-56">
                      <div className="relative w-[148.6px] h-16">
                        <div className="absolute left-[47.66px] top-0 w-[100.94px] h-16">
                          <div className="absolute top-[13.66px] left-0 w-[100.94px] h-[50.34px]" />
                        </div>

                        <div className="">
                          {/* Add SVG or image elements here if necessary */}
                          <img src={logo} alt="" className="h-24 w-auto py-2" />
                        </div>
                      </div>
                      <div className="flex flex-col self-stretch gap-8">
                        <div className="flex flex-col gap-6">
                          <div className="flex items-start gap-6">
                            <div className="flex flex-col gap-10 bg-white/10 rounded-lg backdrop-blur-[20px]">
                              <div className="flex items-center gap-2 px-5 py-4 border border-white rounded-lg">
                                <div className="text-white text-lg font-medium">
                                  Sponsor or Partner &#129122;
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-10 bg-white/10 rounded-lg backdrop-blur-[20px]">
                              <div className="flex items-center gap-2 px-5 py-4 border border-white rounded-lg">
                                <div className="text-white text-lg font-medium">
                                  Exhibit (Small businesses & Artists) &#129122;
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex self-stretch items-start gap-6">
                            <div className="w-[220px] flex flex-col gap-10 backdrop-blur-[20px]">
                              <div className="flex items-center gap-2 px-5 py-4 bg-white/10 border border-white rounded-lg">
                                <div className="text-white text-lg font-medium">
                                  Learn More &#129122;
                                </div>
                              </div>
                            </div>
                            <div className="w-[344px] flex flex-col gap-10 bg-white/10 rounded-lg backdrop-blur-[20px]">
                              <div className="flex items-center gap-2 px-5 py-4 border border-white rounded-lg">
                                <div className="text-white text-lg font-medium">
                                  Join Ticket Waitlist &#129122;
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ============= Left Content Section End ============ */}

                  {/* ============= Right Content Section Start ============ */}
                  <div className="right">
                    <div className="absolute top-0 left-[803px] flex flex-col items-end gap-5 w-[617px] h-[246px]">
                      <div className="flex flex-col items-end gap-5">
                        <div className="text-[#e9e9ea] text-lg leading-[18px] tracking-tight">
                          We can’t wait to see you in Washington, DC!
                        </div>
                        <div className="text-white text-[40px] leading-10 tracking-wide">
                          SIGN UP FOR UPDATES
                        </div>
                      </div>
                      <div className="flex items-start gap-6">
                        <div className="flex items-center gap-1.5 pl-6 pr-2 py-2 w-[296px] h-16 bg-white border border-[#d9f3f4] rounded-2xl">
                          <input
                            type="text"
                            placeholder="Enter your full name"
                            className="text-[#777980] outline-none text-base leading-none tracking-tight"
                          />
                        </div>
                        <div className="flex items-center gap-1.5 pl-6 pr-2 py-2 w-[296px] h-16 bg-white border border-[#d9f3f4] rounded-2xl">
                          <input
                            type="text"
                            placeholder="Enter your email address"
                            className="text-[#777980] outline-none text-base leading-none tracking-tight"
                          />
                        </div>
                      </div>
                      <div className="flex self-stretch items-start gap-6 cursor-pointer ">
                        <div className="flex items-center justify-center gap-1.5 pl-6 pr-2 py-2 grow bg-[#e5cc0c] hover:bg-[#f6dc0e] border border-[#d9f3f4] rounded-2xl">
                          <div className="text-[#070707] text-lg font-medium tracking-tight">
                            Subscribe
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ============= Right Content Section End ============ */}
                </div>
                <div className="self-stretch border border-[#d9f3f4]" />
              </div>
              {/* ================= Left Section End ================= */}

              {/* ================= Footer Contact Section Start ================= */}
              <div className="flex items-center justify-center gap-10 w-[1420px]">
                <div className="flex items-center gap-2">
                  <div className="text-[#e9e9ea] text-base font-semibold flex">
                  <MdEmail className="mx-1 mt-[2px] h-5 w-5 font-semibold" />  Email:
                  </div>
                  <div className="text-[#e9e9ea] text-base font-medium">
                    hello@celebratedc.com
                  </div>
                </div>
                <div className="flex items-center justify-end gap-[5.63px] grow">
                  <div className="flex items-center gap-[13.5px]">
                    {/* Add social media icons here */}
                    <BiLogoInstagramAlt className="h-14 w-14 text-white" />
                    <AiFillTikTok className="h-14 w-14 text-white" />
                    <FaSquareFacebook className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
              {/* ================= Footer Contact Section End ================= */}
            </div>
            {/* ================= Left and Right Containers End ================= */}
          </div>
          {/* ================= Contact Form Section End ================= */}
        </div>
      </div>
      {/* ================= Main Background Section End ================= */}
    </>
  );
};

export default Contact;
