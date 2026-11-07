import { useState } from 'react';

export default function LikeButton() {
    let [liked, setLiked] = useState(false);
    function toggleLike() {
        setLiked(!liked);
    };
    let likeStyle = { color: "red" };
    return (
        <p onClick={toggleLike} style={likeStyle}>
            {liked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </p>
    );
}