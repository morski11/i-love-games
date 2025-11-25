import { useEffect, useState } from "react";
import GameCard from "../gamecard/GameCard";

export default function () {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/games")
            .then(response => response.json())
            .then(result => {
                const gameArr = Object.entries(result).map(([_id, game]) => ({
                    _id,
                    game
                }));
                setGames(gameArr.sort((g1, g2) => g2.game._createdOn - g1.game._createdOn).slice(0, 3));
            });
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src="./images/logo.png" alt="logo" />
            </div>

            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="latest-wrap">
                    <div className="home-container">

                        {games.length ?
                            games.map(g => <GameCard key={g._id} {...g.game} />)
                            : <p className="no-articles">No games yet</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}