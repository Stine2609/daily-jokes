import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import ContentBox from "../../components/ContentBox";
import InputField from "../../components/InputField";
import Button from "../../components/buttons/Button";
import MascotTip from "../../components/MascotTip";
import { create as uploadJoke } from "../../services/joke";
import JokesLeftIndicator from "../../components/JokesLeftIndicator";

export default function Write() {
    const [inputValue, setInputValue] = useState('');

    let submitJoke = async () => {
        let result = await uploadJoke(inputValue);
    }

    return(
        <View style={styles.container}>
            <ContentBox>
                <InputField 
                    placeholder="Write your joke here..." 
                    onChangeText={setInputValue}
                />
                <View style={{alignItems: "center"}}>
                    <Button variant="submit" onPress={submitJoke}  label="Sumbit" />
                </View>
            </ContentBox>
            <JokesLeftIndicator used={1} />
            {/* <MascotTip /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
})