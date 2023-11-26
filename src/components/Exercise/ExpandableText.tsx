import { useState } from "react";

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 15 }: Props) => {
    const [textLen, setTextLen] = useState(maxChars);
    const handleLen = () => {
        textLen === maxChars
            ? setTextLen(children.length)
            : setTextLen(maxChars);
    };
    return (
        <p>
            {children.substring(0, textLen)}{"..."}
            <button onClick={handleLen}>
                {textLen === maxChars ? "More" : "Less"}
            </button>
        </p>
    );
};

export default ExpandableText;
