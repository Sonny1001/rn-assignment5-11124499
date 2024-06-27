import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Switch } from 'react-native';


export default function Settings() {
    return (
        <View style={styles.whole}>
            <Text style={styles.settings}>
        Settings
            </Text>
        
        <View>
            <Text>
                Language
            </Text>
        <Image source={ require("./assets/greaterThan.png")} style = {styles.imageAll}/>
        </View>

        <View>
            <Text>
                My Profile
            </Text>
        <Image source={ require("./assets/greaterThan.png")} style = {styles.imageAll}/>
        </View>

        <View>
            <Text>
                Contact Us
            </Text>
            <Image source={ require("./assets/greaterThan.png")} style = {styles.imageAll}/>
        </View>

        <View>
            <Text>
                Change Password
            </Text>
            <Image source={ require("./assets/greaterThan.png")} style = {styles.imageAll}/>
        </View>

        <View>
            <Text>
                Privacy Policy
            </Text>
            <Image source={ require("./assets/greaterThan.png")} style = {styles.imageAll}/>

        </View>

        <View style= {styles.SwitchContainer}>
            <Text>
                Theme
            </Text>
            <Switch/>
        </View>
    
        </View>
 
    );
}





const styles = StyleSheet.create({

    imageAll: {
        width: 60,
        height: 40,
        marginLeft: 300
    },

    settings:{
        marginTop: 40,
        fontSize: 30,
        marginBottom: 80,
    },

        whole: {
            marginLeft: 20,
        },
        
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    }
});