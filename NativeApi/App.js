import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});




