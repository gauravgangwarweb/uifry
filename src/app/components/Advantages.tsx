const Advantages: React.FC = () => {
  return (
    <section className="relative mt-72 md:mt-40">
      <img
        loading="lazy"
        className="hidden md:block w-14 h-14 absolute -top-10 right-2"
        src="star-1.png"
        alt="star-1"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-32">
        <div className="text-left mt-28 md:mt-0">
          <p className="text-[#FF5555] text-lg font-medium uppercase text-center md:text-left">
            Advantages
          </p>
          <h4 className="text-5xl font-bold text-center md:text-left">
            Why Choose Uifry
          </h4>
          <div className="mt-6">
            <h4 className="flex gap-3 items-center">
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24.488" r="24" fill="#FF5555" />
                <path
                  d="M26 33.488H22M30 20.488C30 18.8967 29.3679 17.3706 28.2427 16.2454C27.1174 15.1202 25.5913 14.488 24 14.488C22.4087 14.488 20.8826 15.1202 19.7574 16.2454C18.6322 17.3706 18 18.8967 18 20.488C18 23.5782 17.2205 25.694 16.3497 27.0934C15.6151 28.2739 15.2479 28.8641 15.2613 29.0288C15.2763 29.2111 15.3149 29.2806 15.4618 29.3896C15.5945 29.488 16.1926 29.488 17.3889 29.488H30.6112C31.8074 29.488 32.4056 29.488 32.5382 29.3896C32.6852 29.2806 32.7238 29.2111 32.7387 29.0288C32.7522 28.8641 32.3849 28.2739 31.6504 27.0935C30.7795 25.694 30 23.5782 30 20.488Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[28px] font-semibold">
                Clever Notifications
              </span>
            </h4>
            <p className="text-lg font-medium mt-2">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        <div className="relative mt-24 md:mt-0">
          <img
            loading="lazy"
            className="absolute -top-32 right-4 md:right-0 z-10"
            src="rings.png"
            alt="rings"
          />
          <img
            loading="lazy"
            className="absolute top-8 right-16 z-0"
            src="advantage-phone-bg.png"
            alt="advantage-bg"
          />
          <img
            loading="lazy"
            className="absolute h-[460px] md:h-[630px] -top-24 md:-top-20 right-6 md:right-2 z-20"
            src="advantages-phone.png"
            alt="advantages-phone"
          />
        </div>
      </div>
      <div className="relative mt-72 md:mt-40 flex flex-col-reverse md:grid md:grid-cols-2 gap-4 px-2 md:px-32">
        <img className="absolute hidden md:block right-1/2" src="star-3.png" alt="star-3" />
        <div className="relative mt-20 md:mt-0">
          <img
            loading="lazy"
            className="absolute -top-20 right-8 md:right-0 z-0"
            src="rings.png"
            alt="rings"
          />
          <img
            loading="lazy"
            className="absolute -right-5"
            src="advantages-second-phone-bg.png"
            alt="phone-bg"
          />
          <img
            loading="lazy"
            className="absolute h-[460px] md:h-[630px] -top-8 right-5"
            src="advantages-second-phone.png"
            alt="phone"
          />
        </div>
        <div className="text-left mt-20 md:mt-32">
          <div className="mt-6">
            <h4 className="flex gap-3 items-center">
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24.9761" r="24" fill="#FF5555" />
                <path
                  d="M24 14.9761L22.6985 20.1821C22.4445 21.1979 22.3176 21.7059 22.0531 22.1192C21.8192 22.4848 21.5087 22.7952 21.1431 23.0292C20.7298 23.2936 20.2218 23.4206 19.206 23.6746L14 24.9761L19.206 26.2776C20.2218 26.5315 20.7298 26.6585 21.1431 26.923C21.5087 27.1569 21.8192 27.4674 22.0531 27.833C22.3176 28.2463 22.4445 28.7542 22.6985 29.7701L24 34.9761L25.3015 29.7701C25.5555 28.7542 25.6824 28.2463 25.9469 27.833C26.1808 27.4674 26.4913 27.1569 26.8569 26.923C27.2702 26.6585 27.7782 26.5315 28.794 26.2776L34 24.9761L28.794 23.6746C27.7782 23.4206 27.2702 23.2936 26.8569 23.0292C26.4913 22.7952 26.1808 22.4848 25.9469 22.1192C25.6824 21.7059 25.5555 21.1979 25.3015 20.1821L24 14.9761Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[28px] font-semibold">
                Fully Customizable
              </span>
            </h4>
            <p className="text-lg font-medium mt-2">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
