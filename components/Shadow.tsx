/**
 * The shadow on buttons, created with a view as native shadows are inconsitent and sub-optimal
 * Inserted before the contents of the component in which it is used
 */

import { View, StyleSheet } from "react-native";

interface ShadowProps{
    /** 
    * @property The full height of the container + the height of the shadow
    */
    height: number;
    /** 
    * @property The full width of the container + the width of the horizontal border on both sides
    */
    width: number;
    backgroundColor?: string;
    borderRadius: number;
}

export default function Shadow(props:ShadowProps) {
    const { height, width, borderRadius, backgroundColor = "rgba(0,0,0, 0.15)"} = props;
    return(
        <View style={[
            styles.container,
            {
                height: height,
                width: width,
                borderRadius: borderRadius,
                backgroundColor: backgroundColor,
            }
        ]} />
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
    },
})