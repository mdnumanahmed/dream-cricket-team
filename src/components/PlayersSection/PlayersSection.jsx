import { useEffect, useState } from "react";
import Player from "../Player/Player";

const PlayersSection = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      const res = await fetch("players.json");
      const data = await res.json();
      setPlayers(data);
    };
    loadPlayers();
  }, []);
  return (
    <div className="container mx-auto py-20">
      <div className="flex justify-between">
        <h3 className="text-3xl font-bold">
          Available Players : {players.length}
        </h3>
        <div>
          <button className="text-base font-bold px-8 py-4 border-2 border-[#E7FE29]  bg-[#E7FE29] rounded-l-2xl">
            Availabe
          </button>
          <button className="text-base font-bold px-8 py-4 border-2 border-[#E7FE29] bg-[#E7FE29] rounded-r-2xl">
            Selected (0){" "}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {players.map((player) => (
          <Player key={player.playerId} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersSection;
