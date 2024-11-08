import PropTypes from "prop-types";
import { FaRegTrashAlt } from "react-icons/fa";

const SelectedPlayer = ({ player, handleRemove }) => {
  const { name, role, image, biddingPrice, country } = player;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt={`Image of ${name}`} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <h3 className="text-2xl font-semibold">{name}</h3>
      </td>
      <td>
        <p className="text-base">{country}</p>
      </td>
      <td>
        <p className="text-base ">{role}</p>
      </td>
      <td>
        <p className="text-base">{biddingPrice}</p>
      </td>
      <th>
        <button
          onClick={() => handleRemove(player.playerId)}
          className="btn btn-ghost btn-xs"
        >
          <FaRegTrashAlt />
        </button>
      </th>
    </tr>
  );
};

SelectedPlayer.propTypes = {
  player: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default SelectedPlayer;
