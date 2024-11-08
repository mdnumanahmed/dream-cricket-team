import PropTypes from "prop-types";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ choosedPlayers, handleRemove }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Country</th>
              <th>Role</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {choosedPlayers.map((player) => (
              <SelectedPlayer
                key={player.playerId}
                player={player}
                handleRemove={handleRemove}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  choosedPlayers: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default SelectedPlayers;
