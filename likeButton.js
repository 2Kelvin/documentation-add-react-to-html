"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function likeButton() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        liked = _React$useState2[0],
        setLiked = _React$useState2[1];

    if (liked) {
        return "You liked this";
    }

    // return React.createElement(
    //     'button',
    //     {
    //         onClick: () => setLiked(true),
    //     },
    //     'Like'
    // );
    return React.createElement(
        "button",
        { onClick: function onClick() {
                return setLiked(true);
            } },
        "Like"
    );
}

var rootNode = document.getElementById("likeButtonRoot");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(likeButton));

// for anotherRoot div 
var anotherRootNode = document.getElementById("anotherRoot");
var anotherRoot = ReactDOM.createRoot(anotherRootNode);
anotherRoot.render(React.createElement(likeButton));