import React from 'react';
import { View, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from "../../state-management/reduxStore";
import Button from "../buttons/Button";
import { ProfilePicture } from './Avatar';
import PriceDisplay from '../misc/PriceDisplay';
import { buyAvatar, selectAvatar } from '../../state-management/profile';

export default function AvatarSelection() {
    const { ownedAvatars, remainingAvatars, avatarId } = useSelector((state: RootState) => state.profile);

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
            <View style={styles.container}>
                {/* Loop through ownedAvatars */}
                {ownedAvatars.map((id) => (
                    <View key={id} style={styles.avatarContainer}>

                        <ProfilePicture size={100} id={id} />
                        {id == avatarId ? (
                            <Button disabled={true} height={34} label="Selected" variant="pink" />
                        ) : (
                            <Button onPress={() => selectAvatar(id)} height={34} label="Select" variant="pink" />
                        )}
                    </View>
                ))}

                {/* Loop through remainingAvatars */}
                {remainingAvatars.map((id) => (
                    <View key={id} style={styles.avatarContainer}>
                        <ProfilePicture size={100} id={id} />
                        <PriceDisplay price={"TODO: Price"} />
                        <Button onPress={() => buyAvatar(id)} height={34} label="Buy" variant="blue" />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
        rowGap: 20,
    },

    avatarContainer: {
        gap: 10,
        justifyContent: "center",
        margin: 5, // Add margin for spacing around avatar and button
    },
});
