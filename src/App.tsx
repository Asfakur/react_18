import { useState } from "react";
import ExpandableText from "./components/Exercise/ExpandableText";

function App() {
    return (
        <div>
            <ExpandableText maxChars={20}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                neque omnis, fugit nesciunt labore sunt accusantium dolorum
                veniam temporibus porro tempora animi cupiditate delectus ullam.
                Deserunt explicabo temporibus, molestiae blanditiis facilis
                iusto eligendi minima maxime architecto modi harum ducimus sint
                dolor magni quos nihil magnam voluptatum quas. Officia, quo
                rerum.
            </ExpandableText>
        </div>
    );
}

export default App;
