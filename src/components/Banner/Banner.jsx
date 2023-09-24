const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-[#FFFFFFF2]"
      style={{
        backgroundImage: "url(https://i.ibb.co/hLQfPrj/Banner-Img.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-10">
        <img src="/images/BannerImg.png" alt="" />
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-black font-bold">
            I Grow By Helping People In Need
          </h1>
          <input
            className="h-10 px-4 rounded-l-lg text-black"
            type="text"
            placeholder="Search here..."
            name=""
            id=""
          />
          <button className="h-10 bg-[#FF444A] text-white px-4 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
