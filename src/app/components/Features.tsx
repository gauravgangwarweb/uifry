const Features: React.FC = () => {
  return (
    <section className="relative mt-8">
      <img
        className="w-12 h-12 hidden md:block absolute left-8"
        src="star-3.png"
        alt="star-3"
      />
      <img className="absolute top-20 md:-top-6 right-0 z-0" src="features-text-bg.png" alt="text-bg" />
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 px-2 md:px-32">
        <div className="relative mt-20 md:mt-0">
          <img className="absolute -top-20 right-8 md:right-0 z-0" src="rings.png" alt="rings" />
          <img
            className="absolute -top-24 right-4 md:right-0 z-10"
            src="features-mobile-bg.png"
            alt="features-mobile-bg"
          />
          <img
            className="absolute h-[460px] md:h-[630px] -top-11 md:-top-7 right-8 md:right-4 z-20"
            src="features-phone.png"
            alt="phone-3"
          />
        </div>
        <div className="text-left mt-20 md:mt-0">
          <p className="text-[#FF5555] text-lg font-medium uppercase text-center md:text-left">
            Features
          </p>
          <h4 className="text-5xl font-bold text-center md:text-left">Uifry Premium</h4>
          <div className="relative mt-6 z-10">
            <h6 className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
                  stroke="#FF5555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-lg font-semibold">Budgeting Intervals</span>
            </h6>
            <p className="text-lg font-medium mt-2">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="relative mt-6 z-10">
            <h6 className="flex items-center gap-2">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.50002V11M10 11L18.5 6.27773M10 11L1.5 6.27773M10 11V20.5M18.5 15.7222L10.777 11.4317C10.4934 11.2741 10.3516 11.1954 10.2015 11.1645C10.0685 11.1371 9.93146 11.1371 9.79855 11.1645C9.64838 11.1954 9.50658 11.2741 9.22297 11.4317L1.5 15.7222M19 15.0586V6.94147C19 6.59883 19 6.4275 18.9495 6.27471C18.9049 6.13953 18.8318 6.01545 18.7354 5.91076C18.6263 5.79242 18.4766 5.70922 18.177 5.54282L10.777 1.43171C10.4934 1.27415 10.3516 1.19537 10.2015 1.16448C10.0685 1.13715 9.93146 1.13715 9.79855 1.16448C9.64838 1.19537 9.50658 1.27415 9.22297 1.43171L1.82297 5.54282C1.52345 5.70922 1.37369 5.79242 1.26463 5.91076C1.16816 6.01545 1.09515 6.13953 1.05048 6.27471C1 6.42751 1 6.59883 1 6.94147V15.0586C1 15.4012 1 15.5725 1.05048 15.7253C1.09515 15.8605 1.16816 15.9846 1.26463 16.0893C1.37369 16.2076 1.52345 16.2908 1.82297 16.4572L9.22297 20.5683C9.50658 20.7259 9.64838 20.8047 9.79855 20.8356C9.93146 20.8629 10.0685 20.8629 10.2015 20.8356C10.3516 20.8047 10.4934 20.7259 10.777 20.5683L18.177 16.4572C18.4766 16.2908 18.6263 16.2076 18.7354 16.0893C18.8318 15.9846 18.9049 15.8605 18.9495 15.7253C19 15.5725 19 15.4012 19 15.0586Z"
                  stroke="#FF5555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-lg font-semibold">Budgeting Intervals</span>
            </h6>
            <p className="text-lg font-medium mt-2">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="relative mt-6 z-10">
            <h6 className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 16H8M8 16V3.5M8 16L3.5 20.5M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z"
                  stroke="#FF5555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-lg font-semibold">Budgeting Intervals</span>
            </h6>
            <p className="text-lg font-medium mt-2">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
