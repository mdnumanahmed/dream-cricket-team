import PropTypes from "prop-types";
import { FaUser, FaFlag } from "react-icons/fa";

const Player = ({ player, handleChoosePlayer }) => {
  const { name, country, image, battingType, bowlingType, biddingPrice, role } =
    player;
  return (
    <div className="space-y-4 p-6 rounded-2xl border hover:shadow-lg">
      <img
        className="w-full object-cover object-top  max-h-72 border rounded-2xl"
        src={image}
        alt={"Image of" + name}
      />
      <h3 className="flex gap-4 text-xl font-semibold">
        {" "}
        <FaUser />
        {name}
      </h3>
      <div className="flex justify-between">
        <p className="flex gap-4">
          {" "}
          <FaFlag />
          {country}
        </p>
        <p className="btn btn-sm">{role}</p>
      </div>
      <hr />
      <h3 className="text-lg font-semibold">Rating</h3>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">
          {role === "Batsman"
            ? "Batting Type"
            : role === "Bowler"
            ? "Bowling Type"
            : role === "Wicketkeeper"
            ? "Batting Type"
            : "Batting/Bowling Type"}
        </h3>
        <p>
          {role === "Batsman"
            ? battingType
            : role === "Bowler"
            ? bowlingType
            : role === "Wicketkeeper"
            ? battingType
            : `${battingType} / ${bowlingType}`}
        </p>
      </div>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">Price: {biddingPrice}</h3>
        <button
          onClick={() => handleChoosePlayer(player)}
          className="btn btn-outline btn-sm"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
};
export default Player;
