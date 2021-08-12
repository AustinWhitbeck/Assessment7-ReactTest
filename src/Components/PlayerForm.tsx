import { FormEvent, useState } from "react";
import { Player } from "../Models/PlayerInterface";

interface Props {
    onSubmit: (player: Player) => void;
}

const PlayerForm = ({onSubmit}: Props) => {

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        onSubmit({
            name,
            score
        });
        setName('');
        setScore(0);
    }

    const [name, setName] = useState('');
    const [score, setScore] = useState(0);

    console.log(name);
    console.log(score);

    return (
        <section>
            <form action="submit" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={ (e) => setName(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="score">Score</label>
                    <input type="number" id="score" name="score" value={score} onChange={ (e) => setScore(parseInt(e.target.value)) }/>
                </div>
                <div>
                    <button type="submit"> Add Player</button>
                </div>
            </form>

        </section>
    );
}

export default PlayerForm;


