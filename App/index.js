// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const tales = [
    { id: '1', title: 'Cinderella', content: 'Once upon a time...' },
    { id: '2', title: 'Snow White', content: 'Once upon a time...' },
    { id: '3', title: 'Rapunzel', content: 'Once upon a time...' },
];

function HomeScreen() {
    const navigation = useNavigation();

    const handlePress = (tale) => {
        navigation.navigate('Tale', { tale });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Select a Tale</Text>
            {tales.map((tale) => (
                <View key={tale.id} style={styles.buttonContainer}>
                    <Button title={tale.title} onPress={() => handlePress(tale)} />
                </View>
            ))}
        </SafeAreaView>
    );
}

function TaleScreen({ route }) {
    const { tale } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.title}>{tale.title}</Text>
                <Text style={styles.content}>{tale.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        marginVertical: 10,
    },
    contentContainer: {
        paddingBottom: 20,
    },
    content: {
        fontSize: 18,
        lineHeight: 28,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Kids Tales' }} />
                <Stack.Screen name="Tale" component={TaleScreen} options={{ title: 'Tale' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}