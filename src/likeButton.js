"use strict";

function likeButton() {
    const [liked, setLiked] = React.useState(false);

    if (liked) {
        return "You liked this";
    }

    return (
        <button onClick={() => setLiked(true)}>
            Like
        </button>
    );
}

const rootNode = document.getElementById("likeButtonRoot");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(likeButton));

// for anotherRoot div 
const anotherRootNode = document.getElementById("anotherRoot");
const anotherRoot = ReactDOM.createRoot(anotherRootNode);
anotherRoot.render(React.createElement(likeButton));