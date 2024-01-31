// Colors named "highlight" for buttons denote the bottom section of an element, used to create a 3d effect
const colors = {
    // For app backgorund gradient, starts with center color
    mainBg: {
        start: "#A559FE",
        end: "#7053FD",
    },

    button: { // The default color for all buttons if their color has not been specifically specified
        border: "white",
        text: "white",
    },

    backButton: {
        background: "#FFF635",
        highlight: "#FFC90C",
    },

    submitButton: {
        bgLeft: "#FFC715",
        bgRight: "#FFB213",
        highlight: "#FF8413",
    },

    playButton: {
        bgLeft: "#86EE04",
        bgRight: "#67EB00",
        highlight: "#4EC307",
    },

    noButton: {
        background: "#FF4672",
        highlight: "#E90038",
    },

    yesButton: {
        background: "#92F200",
        highlight: "#39BD01",
    },

    toggleButton: {
        bgLeft: "#CC9AFF",
        bgRight: "#C286FF",
        highlight: "#A75CF4",
    },

    input: {
        text: "#9D86B9",
    },

    contentBox: {
        background: "white",
        highlight: "#4CDAFE",
        text: "#3B0E72",
    },

    text: {
        default: "white",
        contentBox: "#3B0E72",
        placeholder: "#9D86B9"
    },

    tabBar: {
        border: "white",
        background: "white",
        home: {
            background: "#4CDAFE",
            highlight: "#09B9FF",
        },
        daily: {
            background: "#FC8AFF",
            highlight: "#DA57F0",
        },
        browse: {
            background: "#C286FF",
            highlight: "#A75CF4",
        },
        profile: {
            background: "#FFDD17",
            highlight: "#FFB213",
        },
    }

}

export default colors