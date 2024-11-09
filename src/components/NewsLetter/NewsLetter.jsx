const NewsLetter = () => {
  return (
    <div className="container mx-auto bg-slate-50 bg-[url('https://i.ibb.co.com/S5Z3Qvt/bg-shadow.png')] bg-no-repeat bg-cover bg-center px-5 py-3 lg:px-60 lg:py-24 rounded-3xl ring-2 ring-white ring-offset-[24px] ring-offset-current relative top-48 shadow-xl">
      <div className="space-y-4 max-w-4xl text-center">
        <h3 className="text-4xl font-bold text-[#131313]">
          Subscribe to our Newsletter
        </h3>
        <p className="text-xl font-medium text-[#131313B3]">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="pt-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-bordered w-full h-14 max-w-xs mr-4"
          />
          <button className="text-base font-bold text-[#131313] px-7 py-4 rounded-xl bg-gradient-to-r from-purple-400 hover:from-purple-600 to-orange-400 hover:to-orange-600 hover:text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
