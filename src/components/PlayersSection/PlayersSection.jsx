import { useEffect, useState } from "react";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const PlayersSection = () => {
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
    const newChoosed = [...choosedPlayers, player];
    setChoosedPlayers(newChoosed);
    const newAvailable = players.filter(
      (pl) => pl.playerId !== player.playerId
    );
    setPlayers(newAvailable);
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
      <div className="flex justify-between">
        <h3 className="text-3xl font-bold">
          Available Players : {players.length}
        </h3>
        <div>
          <button
            onClick={handleAvailableBtn}
            className="text-base font-bold px-8 py-4 border-2 border-[#E7FE29]  bg-[#E7FE29] rounded-l-2xl"
          >
            Availabe
          </button>
          <button
            onClick={handleSelectedBtn}
            className="text-base font-bold px-8 py-4 border-2 border-[#E7FE29] bg-[#E7FE29] rounded-r-2xl"
          >
            Selected {choosedPlayers.length}{" "}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
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
      </div>
    </div>
  );
};

export default PlayersSection;
