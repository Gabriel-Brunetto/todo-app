import { View, ActivityIndicator, Text, StyleSheet } from "react-native";


export default function Loading(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Loading...</Text>
            <ActivityIndicator size={50} color={'#fff'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        color: '#FFF'
    }
})