export const colors = {
        // Base colors
        purple: {
            light: "#C286FF",
            medium: "#A75CF4",
            dark: "#9F51FE",
            highlight: "#7054FE",
        },
    
        blue: {
            light: "#4CDAFE",
            medium: "#09B9FF",
        },
    
        pink: {
            light: "#FC8AFF",
            medium: "#DA57F0",
        },
    
        yellow: {
            light: "#FFDD17",
            medium: "#FFC715",
            dark: "#FFB213",
            highlight: "#FF8413",
        },

        green: {
            light: "#92F200",
            medium: "#86EE04",
            dark: "#67EB00",
            highlight: "#4EC307",
        },

        red: {
            medium: "#FF4672",
            dark: "#E90038",
        },

        border: "white",
}

// Colors named "highlight" for buttons denote the bottom section of an element, used to create a 3d effect
export const componentColors = {

    // For app backgorund gradient, starts with center color
    mainBg: {
        start: "#A559FE",
        end: "#7053FD",
    },

    button: { // The default color for all buttons if their color has not been specifically specified
        border: colors.border,
        text: "white",
    },

    submitButton: {
        bgLeft: colors.yellow.medium,
        bgRight: colors.yellow.dark,
        highlight: colors.yellow.highlight,
    },

    playButton: {
        bgLeft: colors.green.medium,
        bgRight: colors.green.dark,
        highlight: colors.green.highlight,
    },

    backButton: {
        background: colors.purple.medium,
        highlight: colors.purple.dark,
    },

    noButton: {
        background: colors.red.medium,
        highlight: colors.red.dark,
    },

    yesButton: {
        background: colors.green.light,
        highlight: colors.green.medium,
    },

    expandButton: {
        background: colors.purple.light,
        highlight: colors.purple.medium,
    },

    superlikeButton: {
        background: colors.blue.light,
        highlight: colors.blue.medium,
    },

    toggleButton: {
        bgLeft: colors.purple.light,
        bgRight: colors.purple.medium,
        highlight: colors.purple.dark,
    },

    // input: {
    //     text: "#9D86B9",
    // },

    contentBox: {
        background: "white",
        highlight: colors.blue.light,
        backgroundHighlight: "#D1D8FF",
        text: colors.purple.dark,
    },

    text: {
        default: "white",
        contentBox: colors.purple.dark,
        placeholder: "rgba(159, 81, 254, 0.5)"
    },

    contentTab: {
        border: colors.border,
        background: colors.purple.dark,
        focused: colors.purple.highlight,
    },

    tabBar: {
        border: colors.border,
        home: {
            background: colors.blue.light,
            highlight: colors.blue.medium,
        },
        daily: {
            background: colors.pink.light,
            highlight: colors.pink.medium,
        },
        browse: {
            background: colors.purple.light,
            highlight: colors.purple.medium,
        },
        profile: {
            background: colors.yellow.light,
            highlight: colors.yellow.dark,
        },
    }
}