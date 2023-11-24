import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface Props {
    isLiked: boolean;
}

function Like({ isLiked }: Props) {
    const [liked, setIsLiked] = useState(isLiked);
    
    const handleLike = () => {
        setIsLiked(!liked);
        liked === true ? console.log("Liked") : console.log("UnLiked");
    };
    return (
        <span className="" onClick={handleLike}>
            {liked === true ? <GoHeartFill size="40" /> : <GoHeart size="40" />}
        </span>
    );
}

export default Like;
