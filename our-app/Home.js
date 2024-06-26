import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            style={styles.profileImage}
            source={require("./assets/profile.png")}
          />
          </View>
          <View style={{flexDirection: 'column', left: -30}}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
          </View>
        <TouchableOpacity style={styles.searchIcon}>
          <Image
            style={styles.searchIconImage}
            source={require("./assets/search.png")}
          />
        </TouchableOpacity>
        
     
          
        </View>

        <View style={styles.cardLogo}>
            <Image
              style={styles.bigcardLogo}
              source={require("./assets/bigcard.png")}
            />
          </View>
   
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            style={styles.optionIcon}
            source={require("./assets/send.png")}
          />
          <Text style={styles.optionText}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            style={styles.optionIcon}
            source={require("./assets/recieve.png")}
          />
          <Text style={styles.optionText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            style={styles.optionIcon}
            source={require("./assets/loan.png")}
          />
          <Text style={styles.optionText}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            style={styles.optionIcon}
            source={require("./assets/topup.png")}
          />
          <Text style={styles.optionText}>Topup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <TouchableOpacity style={styles.sellAllButton}>
          <Text style={styles.sellAllButtonText}>Sell All</Text>
        </TouchableOpacity>
        <View style={styles.transactionItem}>
          <Image
            style={styles.transactionIcon}
            source={require("./assets/apple.png")}
          />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Apple Store</Text>
            <Text style={styles.transactionDescription}>Entertainment</Text>
          </View>
          <Text style={styles.transactionAmount}>-$5,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image
            style={styles.transactionIcon}
            source={require("./assets/spotify.png")}
          />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Spotify</Text>
            <Text style={styles.transactionDescription}>Music</Text>
          </View>
          <Text style={styles.transactionAmount}>-$12,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image
            style={styles.transactionIcon}
            source={require("./assets/moneyTransfer.png")}
          />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Money Transfer</Text>
            <Text style={styles.transactionDescription}>Transaction</Text>
          </View>
          <Text style={styles.transactionAmount}>$300</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image
            style={styles.transactionIcon}
            source={require("./assets/grocery.png")}
          />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Grocery</Text>
          </View>
          <Text style={styles.transactionAmount}>-$88</Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  profile: {
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchIcon: {
    padding: 8,
    backgroundColor: '#F2F2F3',
    borderRadius: 20,
    marginRight: 100,
  },
  searchIconImage: {
    width: 20,
    height: 30,
    marginLeft: 180,
    
  },
  
  
  cardLogo: {
    alignItems: "center",
    width: 100
  },
  bigcardLogo: {
    width: 700,
    height: 350,
    marginTop: 30,
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "space-around"
    
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    
  },
  optionButton: {
    alignItems: "center",
    backgroundColor: '#F2F2F3',
    borderRadius: 20,
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  optionText: {
    top: 15,
    fontSize: 12,
  },
  transactionContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    margin: 16,
    borderRadius: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sellAllButton: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  sellAllButtonText: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  transactionIcon: {
    width: 32,
    height: 32,
  },
  transactionDetails: {
    flexDirection: "column",
    marginLeft: 16,
  },
  transactionName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  transactionDescription: {
    fontSize: 12,
  },
  transactionAmount: {
    fontSize: 16,
  },

});

export default HomeScreen;