import { useEffect, useState } from "react";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const PlayersSection = ({ coin, setCoin }) => {
  const [players, setPlayers] = useState([]);
  const [choosedPlayers, setChoosedPlayers] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const loadPlayers = async () => {
      const res = await fetch("players.json");
      const data = await res.json();
      setPlayers(data);
    };
    loadPlayers();
  }, []);

  const handleChoosePlayer = (player) => {
    // const isExists = choosedPlayers.find(
    //   (pl) => pl.playerId === player.playerId
    // );
    // if (!isExists) {
    // }

    if (choosedPlayers.length < 6 && player.biddingPrice < coin) {
      const newChoosed = [...choosedPlayers, player];
      setChoosedPlayers(newChoosed);
      const newAvailable = players.filter(
        (pl) => pl.playerId !== player.playerId
      );
      setPlayers(newAvailable);
      setCoin(coin - player.biddingPrice);
      return;
    }
    toast.warning("You have not enough coin Or reached limit!");
  };

  const handleSelectedBtn = () => {
    setIsSelected(true);
  };

  const handleAvailableBtn = () => {
    setIsSelected(false);
  };

  const handleRemove = (id) => {
    const remaining = choosedPlayers.filter((pl) => pl.playerId !== id);
    setChoosedPlayers(remaining);
    const removedPlayer = choosedPlayers.find((pl) => pl.playerId === id);
    setPlayers([...players, removedPlayer]);
  };

  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h3 className="text-xl md:text-3xl font-bold">
          {!isSelected
            ? `Available Players : ${players.length}`
            : `Selected Players : ${choosedPlayers.length}/6`}
        </h3>
        <div>
          <button
            onClick={handleAvailableBtn}
            className={`text-base font-bold px-4 py-2 md:px-8 md:py-4  border-2 border-[#E7FE29]  ${
              !isSelected && "bg-[#E7FE29]"
            } rounded-l-2xl`}
          >
            Availabe
          </button>
          <button
            onClick={handleSelectedBtn}
            className={`text-base font-bold px-4 py-2 md:px-8 md:py-4 border-2 border-[#E7FE29] ${
              isSelected && "bg-[#E7FE29]"
            } rounded-r-2xl`}
          >
            Selected {choosedPlayers.length}{" "}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {!isSelected &&
          players.map((player) => (
            <Player
              key={player.playerId}
              player={player}
              handleChoosePlayer={handleChoosePlayer}
            />
          ))}
      </div>
      <div>
        {isSelected && (
          <SelectedPlayers
            choosedPlayers={choosedPlayers}
            handleRemove={handleRemove}
          />
        )}
        {isSelected && (
          <div className="text-center py-8">
            <button
              onClick={handleAvailableBtn}
              className="text-base font-bold px-8 py-4 border-2 border-[#E7FE29]  bg-[#E7FE29] rounded-2xl"
            >
              Add More Player
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

PlayersSection.propTypes = {
  coin: PropTypes.number.isRequired,
  setCoin: PropTypes.func.isRequired,
};

export default PlayersSection;
