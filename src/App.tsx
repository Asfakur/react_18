import { useState } from "react";

function App() {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John",
        },
    });
    const handleChange = () => {
        setGame({ ...game, player: { ...game.player, name: "Bob" } });
    };

    return (
        <div>
            <li>Game id: {game.id}</li>
            <li>Player name: {game.player.name}</li>
            <button onClick={handleChange}>Change Name</button>
        </div>
    );
}

export default App;
