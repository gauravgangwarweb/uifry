const GetStarted: React.FC = () => {
  return (
    <section className="w-full relative mt-8 md:mt-20">
      <img
        loading="lazy"
        className="hidden md:block absolute top-0"
        src="get-started-bg.png"
        alt="get-started-bg"
      />
      <div className="w-full px-2 md:px-32">
        <div className="w-full h-[470px] bg-black relative flex flex-col items-center md:items-start py-2 rounded-md">
          <img
            loading="lazy"
            className="absolute bottom-0 z-0"
            src="down-lines-get.png"
            alt="down-line-get"
          />
          <img
            loading="lazy"
            className="absolute right-0 bottom-0 z-0"
            src="get-started-phone-bg.png"
            alt="get-started-phone-bg"
          />
          <img
            loading="lazy"
            className="absolute left-0 top-0 z-30"
            src="star-1.png"
            alt="star-1"
          />
          <img
            className="hidden md:block absolute right-0"
            loading="lazy"
            src="phones-get-started.png"
            alt="phones-get-started"
          />
          <div className="relative z-40 text-center md:text-start px-2 md:px-0 flex flex-col items-center md:items-start">
            <h4 className="text-white text-5xl md:ml-10 mt-32 md:mt-40">
              Ready To Get Started?
            </h4>
            <p className="text-white text-lg md:ml-10">
              Risus habitant leo egestas mauris diam eget morbi tempus
              vulputate.
            </p>
            <button className="bg-white text-black flex gap-2 items-center justify-center py-3 px-3 md:ml-10 mt-2 rounded-md cursor-pointer hover:bg-[#FF5555] hover:text-white required: z-10">
              <span className="text-lg font-medium uppercase">
                download app
              </span>
              <svg
                width="26"
                height="33"
                viewBox="0 0 26 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5273 17.5307C21.4939 13.536 24.8032 11.5889 24.9573 11.5019C23.0815 8.77184 20.1742 8.39714 19.1492 8.37037C16.7041 8.11614 14.3393 9.82909 13.0933 9.82909C11.8271 9.82909 9.91117 8.39714 7.84121 8.43732C5.18165 8.47743 2.69631 10.0164 1.33641 12.3985C-1.4772 17.263 0.61963 24.4092 3.31934 28.3436C4.6658 30.2707 6.24014 32.4186 8.30346 32.3449C10.3198 32.2646 11.0768 31.0602 13.5086 31.0602C15.9203 31.0602 16.6303 32.3449 18.7339 32.2981C20.8977 32.2646 22.2643 30.3643 23.5639 28.4239C25.1248 26.2158 25.7478 24.0412 25.7746 23.9341C25.721 23.9006 21.5676 22.3149 21.5273 17.5307ZM17.5548 5.78089C18.6401 4.42259 19.3836 2.58252 19.176 0.708984C17.6084 0.77586 15.6389 1.79292 14.5134 3.11782C13.5153 4.28877 12.6176 6.20242 12.8521 8.00237C14.6072 8.12949 16.4227 7.11242 17.5548 5.78089Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
