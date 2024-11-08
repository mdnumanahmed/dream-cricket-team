import { useEffect, useState } from "react";
import { FaUser, FaFlag } from "react-icons/fa";

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
      <div className="grid grid-cols-3">
        <div className="space-y-4">
          <img src="" alt="" />
          <h3 className="flex gap-4 text-xl font-semibold">
            {" "}
            <FaUser />
            Tamim Ekbal
          </h3>
          <div className="flex justify-between">
            <p className="flex gap-4">
              {" "}
              <FaFlag />
              Country
            </p>
            <p className="btn btn-sm">All Rounder</p>
          </div>
          <hr />
          <h3 className="text-lg font-semibold">Rating</h3>
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Batting/Bowlling Type</h3>
            <p>Batting/Bowlling Type</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Price: 1500000</h3>
            <button className="btn btn-outline btn-sm">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersSection;
