const FriendContent = () => {
  return (
    <div className="max-w-5xl mx-auto px-4"> {/* Added px-4 so text doesn't touch the screen edge on mobile */}
      {/* summary section */}
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 justify-items-center items-center">
        
        {/* Card 1 */}
        <div className="card w-full max-w-xs card-sm shadow-sm text-center"> {/* w-full allows fluid scaling, max-w-xs stops it from getting too stretched */}
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
            <p className="text-[#64748B]">Total Friends</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-full max-w-xs card-sm shadow-sm text-center">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
            <p className="text-[#64748B]">On Track</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-full max-w-xs card-sm shadow-sm text-center">   
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
            <p className="text-[#64748B]">Need Attention</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card w-full max-w-xs card-sm shadow-sm text-center">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
            <p className="text-[#64748B]">Interactions This Month</p>
          </div>
        </div>

      </div>
      {/* Friends content section*/}
      <hr className="my-8 text-[#E9E9E9]" />
      <div>
        

      </div>
    </div>
  );
};

export default FriendContent;
