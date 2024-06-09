const Footer: React.FC = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-6 gap-4 px-2 md:px-32 mt-20">
      <div>
        <img loading="lazy" src="logo.png" alt="logo" />
        <h6 className="flex gap-2 items-center mt-3">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9394 3.70898C18.2804 3.70898 19.5704 4.23898 20.5194 5.18998C21.4694 6.13898 22.0004 7.41898 22.0004 8.75898V16.659C22.0004 19.449 19.7304 21.709 16.9394 21.709H7.06043C4.26943 21.709 2.00043 19.449 2.00043 16.659V8.75898C2.00043 5.96898 4.25943 3.70898 7.06043 3.70898H16.9394ZM18.0704 8.90898C17.8604 8.89798 17.6604 8.96898 17.5094 9.10898L13.0004 12.709C12.4204 13.19 11.5894 13.19 11.0004 12.709L6.50043 9.10898C6.18943 8.87898 5.75943 8.90898 5.50043 9.17898C5.23043 9.44898 5.20043 9.87898 5.42943 10.179L5.56043 10.309L10.1104 13.859C10.6704 14.299 11.3494 14.539 12.0604 14.539C12.7694 14.539 13.4604 14.299 14.0194 13.859L18.5304 10.249L18.6104 10.169C18.8494 9.87898 18.8494 9.45898 18.5994 9.16898C18.4604 9.01998 18.2694 8.92898 18.0704 8.90898Z"
              fill="#FF5555"
            />
          </svg>
          <span className="text-base font-medium">help@frybix.com</span>
        </h6>
        <h6 className="flex gap-2 items-center mt-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.53174 10.1814C13.5208 14.1693 14.4258 9.5557 16.9656 12.0938C19.4143 14.5417 20.8216 15.0322 17.7192 18.1337C17.3306 18.446 14.8616 22.2032 6.1846 13.5287C-2.49348 4.85298 1.26158 2.38143 1.57397 1.99293C4.68387 -1.11717 5.16586 0.298367 7.61449 2.74631C10.1544 5.28548 5.54266 6.1934 9.53174 10.1814Z"
              fill="#FF5555"
            />
          </svg>
          <span className="text-base font-medium">+1 234 456 678 89</span>
        </h6>
      </div>
      <div className="hidden md:block">
        <h6 className="text-[32px] font-medium">Links</h6>
        <p className="text-base font-medium mt-3">Home</p>
        <p className="text-base font-medium mt-3">About Us</p>
        <p className="text-base font-medium mt-3">Bookings</p>
        <p className="text-base font-medium mt-3">Blog</p>
      </div>
      <div className="hidden md:block">
        <h6 className="text-[32px] font-medium">Legal</h6>
        <p className="text-base font-medium mt-3">Terms Of Use</p>
        <p className="text-base font-medium mt-3">Privacy Policy</p>
        <p className="text-base font-medium mt-3">Cookie Policy</p>
      </div>
      <div className="hidden md:block">
        <h6 className="text-[32px] font-medium">Product</h6>
        <p className="text-base font-medium mt-3">Take Tour</p>
        <p className="text-base font-medium mt-3">Live Chat</p>
        <p className="text-base font-medium mt-3">Reviews</p>
      </div>
      <div className="col-span-2">
        <h6 className="text-[32px] font-medium">Newsletter</h6>
        <p className="text-base font-medium mt-3">Stay Up To Date</p>
        <div className="flex mt-2">
            <input className="p-2" type="text" placeholder="Your email" />
            <button className="bg-black text-white py-2 px-4 rounded-md cursor-pointer hover:bg-[#FF5555]">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
