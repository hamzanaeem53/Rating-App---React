const Star = ({ star, rating, hover, clickStar, hoverStar, leaveStar }) => {
    return (
        <span
            onClick={() => clickStar(star)}
            onMouseEnter={() => hoverStar(star)}
            onMouseLeave={leaveStar}
            className={`star ${star <= (hover || rating) ? 'active' : ''}`}
        >
            {'\u2605'}
        </span>
    );
}

export default Star;