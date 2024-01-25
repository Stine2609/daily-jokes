import HeaderCenter from "./HeaderCenter"

const HeaderOptions = ({  }) => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: "transparent",
      elevation: 0, // for Android
      shadowOpacity: 0, // for iOS
    },
    headerTitle: () => (
        <HeaderCenter />
    ),
    headerTitleAlign: "center" as const, // Explicitly typing as "center"
    headerLeft: () => (
        <>
        </>
    ),
    headerRight: () => (
        <>
        </>
    ),
})

export default HeaderOptions