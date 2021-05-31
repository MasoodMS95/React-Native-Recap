import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';


const Feelings = ({ navigation }) => {
    const [feeling, setFeeling] = useState('');
    const update = () => {
        navigation.navigate('Well...', { feeling });
    }
    return (
        <View style={styles.basicContainer}>
            <Text style={styles.title}>How are you feeling?</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="I'm feeling..."
                onChangeText={feeling => setFeeling(feeling)}
                defaultvalue={feeling}
            />
            <Button
                title="Well?"
                onPress={update}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    basicContainer: {
        flex: 1,
        padding: 30,
        backgroundColor: "#C7C0BE"
    },
    searchBar: {
        height: 50,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        textAlign: "center"
    },
    title: {
        borderColor: "#000000",
        backgroundColor: "#D61411",
        color: "#FFFFFF",
        textAlign: "center"
    }
});

export default Feelings;
