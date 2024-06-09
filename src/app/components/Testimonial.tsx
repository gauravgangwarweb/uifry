interface TestimonialProps {}

const Testimonial: React.FC<TestimonialProps> = () => {
  return (
    <section className="relative mt-96 md:mt-48">
      <p className="text-lg font-medium uppercase text-center">Testimonial</p>
      <h4 className="text-5xl font-bold text-center">
        What Our Users <br /> Say About Us
      </h4>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 px-2 md:px-32">
        <div className="relative">
          <img
            loading="lazy"
            className="absolute z-10 right-6 md:right-0"
            src="rings.png"
            alt="ring"
          />
          <img
            loading="lazy"
            className="absolute top-32 z-0"
            src="testimonial-bg.png"
            alt="testimonial"
          />
          <img
            loading="lazy"
            className="absolute w-52 md:w-auto md:h-auto top-10 left-4 md:left-14 z-10"
            src="testimonial-1.png"
            alt="testimonial-1"
          />
          <img
            loading="lazy"
            className="absolute w-56 md:w-auto md:h-auto top-10 -right-1 md:-right-24 z-10"
            src="testimonial-2.png"
            alt="testimonial-2"
          />
          <img
            loading="lazy"
            className="absolute w-52 md:w-auto md:h-auto top-52 md:top-80 left-3 md:left-14 z-10"
            src="testimonial-3.png"
            alt="testimonial-3"
          />
          <img
            loading="lazy"
            className="absolute w-52 md:w-auto md:h-auto top-72 md:top-[350px] -right-2 md:-right-28 z-10"
            src="testimonial-4.png"
            alt="testimonial-4"
          />
          <img
            loading="lazy"
            className="absolute w-60 md:w-auto md:h-auto top-32 right-12 md:-right-2 z-10"
            src="testimonial-5.png"
            alt="testimonial-5"
          />
          <img
            loading="lazy"
            className="hidden md:block absolute top-[276px] right-[135px] bg-[#FF5555] px-2 py-3 rounded-full z-10"
            src="comma.png"
            alt="comma"
          />
        </div>
        <div className="mt-10 md:mt-0">
          <div className="md:mt-36">
            <h4 className="text-[28px] font-semibold pr-0 md:pr-6 leading-tight">
              The Best Financial Accounting App Ever!
            </h4>
            <p className="text-lg font-medium mt-2">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
          </div>
          <div className="flex gap-2 mt-4">
            <img loading="lazy" src="testimonial-user.png" alt="testimonial" />
            <img loading="lazy" src="testimonial-user.png" alt="testimonial" />
            <img loading="lazy" src="testimonial-user.png" alt="testimonial" />
            <img loading="lazy" src="testimonial-user.png" alt="testimonial" />
          </div>
          <p className="text-lg font-semibold mt-4">Nich Jones</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
