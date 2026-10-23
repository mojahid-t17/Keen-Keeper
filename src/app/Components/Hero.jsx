const Hero = () => {
  return (
    <div className="hero md:pt-8 pt-4 md:my-8 my-4">
      <div className="hero-content text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">
            Friends to keep close in your life
          </h1>
          <p className="py-5 text-[#64748B]">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br></br>
            relationships that matter most.
          </p>
          <button className=" bg-[#244D3F]  hover:bg-[#1a3a2d] text-white font-bold py-2 px-4 rounded">
            + Add Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
