import { Player } from "../Models/PlayerInterface";

interface Prop {
    player: Player;
}

const PlayerRow = ({player}: Prop) => {


    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.score}</td>
        </tr>
    );
}

export default PlayerRow;