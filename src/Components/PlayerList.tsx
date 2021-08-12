import { useState } from "react";
import { Player } from "../Models/PlayerInterface";
import PlayerForm from "./PlayerForm";
import PlayerRow from "./PlayerRow";
import "./PlayerList.css";

const PlayerList = () => {

    const [playerList, setPlayerList] = useState<Player[]>([
            {
                name: "Fox",
                score: 12
            },
            {
                name: "Turtle",
                score: 5
            }
        ]);

    function clearList() {
        setPlayerList([])
    }

    function addPlayer(player: Player){
        let newPlayerList: Player[] = playerList;
        console.log(newPlayerList);
        newPlayerList.push(player);
        console.log(newPlayerList);
        setPlayerList(newPlayerList);
        console.log(playerList);
    }


    return (
        <section className="PlayerListContainer">
            <div>
                <h1 className="PlayerTitle">Players</h1>
                <button onClick={clearList}>Clear List</button>
            </div>
            <div>
                <table>
                    <tbody>
                        {playerList.map((player, index) =>
                        <PlayerRow
                            key={player.name}
                            player={player}
                        />
                        )}
                    </tbody>
                </table>
            </div>
            <div>
                <PlayerForm
                onSubmit={addPlayer}
                />
            </div>
        </section>
    );
}

export default PlayerList;