import { useState, useEffect } from "react";
import GameCard from "./gamecard/GameCard";

export default function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/games")
            .then(response => response.json())
            .then(result => {
                const gameArr = Object.entries(result).map(([_id, game]) => ({
                    _id,
                    game
                }));
                setGames(gameArr);
            });
    }, [])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            <div className="catalog-container">

                {games.length ?
                    games.map(g => <GameCard key={g._id} {...g.game} gameId={g._id}/>)
                    : <p className="no-articles">No games yet</p>}

            </div>
            {/* <!-- <h3 className="no-articles">No Added Games Yet</h3> --> */}
        </section>
    );
}