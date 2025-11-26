import { Link } from 'react-router'

export default function ({
    title,
    genre,
    imageUrl,
    gameId
}) {
    return (
        <div className="game">
            <img src={imageUrl} alt={title} />
            <div className="details-overlay">
                <p className="name">{title}</p>
                <p className="genre">{genre}</p>
                <Link to={`/details/${gameId}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}