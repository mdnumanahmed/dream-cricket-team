import PropTypes from "prop-types";

const Banner = ({ handleClaimCoin }) => {
  return (
    <div>
      <div
        className={`container mx-auto bg-[url(https://i.ibb.co.com/TMrjGCk/bg-shadow1.png)] bg-no-repeat bg-cover bg-center text-center  mt-6 rounded-3xl`}
      >
        <div className="py-16 rounded-3xl space-y-6">
          <img
            src="https://i.ibb.co.com/sRYzPJx/banner-main.png"
            alt=""
            className="inline-block"
          />
          <h2 className="text-4xl font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <h4 className="text-2xl font-medium text-[#FFFFFFB3]">
            Beyond Boundaries Beyond Limits
          </h4>
          <button
            onClick={handleClaimCoin}
            className="sora text-base font-bold px-5 py-3 rounded-2xl bg-gradient-to-t from-[#e9fe29cf] via-[#E7FE29] to-[#e9fe29cf] ring-2 ring-[#E7FE29] ring-offset-8 ring-offset-[#131313]"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleClaimCoin: PropTypes.func.isRequired,
};

export default Banner;
