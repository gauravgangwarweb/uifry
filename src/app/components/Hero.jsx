const Hero = () => {
  return (
    <section className="relative px-2 md:px-0 md:pl-40">
      <img
        className="w-16 h-16 absolute md:-top-11 right-5 md:right-10"
        src="star-1.png"
        alt="star"
      />
      <img
        className="w-12 h-12 hidden md:block absolute left-8"
        src="star-2.png"
        alt="star-2"
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img
            className="absolute -top-10 md:-top-14 right-8 z-0"
            src="hero-text-bg.png"
            alt="text-bg"
          />
          <h3 className="text-5xl md:text-[64px] font-bold md:leading-[70px] mt-16 md:mt-24 relative z-10">
            {"Make The Best Financial Decisions"}
          </h3>
          <p className="relative text-lg font-medium z-10 mt-5">
            {"Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor."}
          </p>
          <div className="flex gap-6 mt-6">
            <button className="bg-black text-white flex gap-2 items-center px-4 py-3">
              <span>Get Started</span>
              <svg
                width="25"
                height="8"
                viewBox="0 0 25 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="flex gap-3 items-center">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                <path
                  d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              <span>Watch Video</span>
            </button>
          </div>
          <img className="hidden md:block absolute bottom-72 left-32" src="star-3.png" alt="star-3" />
          <img src="strip-image.png" alt="strip" />
        </div>
        <div className="">
          <div className="relative">
            <img
              className="absolute top-32 md:top-64 right-10 z-0"
              src="hero-mobile-bg.png"
              alt="hero-mobile-bg"
            />
            <img className="absolute -top-12 right-5 md:right-0" src="rings.png" alt="rings" />
            <img
              className="md:w-auto h-[480px] md:h-auto absolute top-8 md:top-20 -right-2 md:right-0 z-10"
              src="hero-phone-1.png"
              alt="hero-phone-1"
            />
            <img
              className="md:w-auto h-[480px] md:h-auto absolute -top-4 md:top-3 -right-1 md:right-6 z-10"
              src="hero-phone-2.png"
              alt="hero-phone-2"
            />
            <img
              className="md:w-auto h-[480px] md:h-auto absolute -top-14 right-16 md:right-36 z-10"
              src="hero-phone-3.png"
              alt="hero-phone-3"
            />
            <img
              className="absolute top-[560px] right-[500px] z-20"
              src="star-2.png"
              alt="star"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
