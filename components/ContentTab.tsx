import { View, StyleSheet } from "react-native"
import { ReactNode, useState } from "react";
import Button from "./buttons/Button";

interface ContentTabProps {
    tabs: Array<{
        name: string;
        component: ReactNode;
    }>
}

export default function ContentTab(props: ContentTabProps) {
    const { tabs } = props;
    const [activeTab, setActiveTab] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {tabs.map((tab, index) =>
                    <Button
                        variant="toggle"
                        key={"TabButton-" + index} 
                        onPress={() => setActiveTab(index)} 
                        label={tab.name} 
                    />
                )}
            </View>

            <View>
                {tabs[activeTab].component}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 10
    },

    buttonContainer: {
        flexDirection: "row",
        gap: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30
    }
})