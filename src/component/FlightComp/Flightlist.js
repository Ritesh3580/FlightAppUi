import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';




const Flightlist = ({ data }) => {
  console.log("da6alsalaskfk  ", data);
  return (
    <View style={styles.flightContainer}>
      <View style={styles.flightInfo}>
        <Text style={styles.airline}>{data?.airline}</Text>
        <Text style={styles.flightName}>{data?.flightName}</Text>
        <Text style={styles.price}>${data?.price}</Text>
      </View>

      <View style={styles.timeInfo}>
        <View style={styles.timeItem}>
          <Text style={styles.timeLabel}>Depart</Text>
          <Text style={styles.timeValue}> {new Date(data.departureTime).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}</Text>
        </View>

        <View style={styles.timeItem}>
          <Text style={styles.timeLabel}>Arrive</Text>
          <Text style={styles.timeValue}> {new Date(data.arrivalTime).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}</Text>
        </View>

        <View style={styles.timeItem}>
          <Text style={styles.timeLabel}>Duration</Text>
          <Text style={styles.timeValue}>{data.duration}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flightContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    //marginTop: 5,
    paddingHorizontal: 10,
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop:10
  },
  airline: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flightName: {
    fontSize: 16,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    
  },
  timeItem: {
    flex: 1,
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    fontWeight:'500'
  },
  timeValue: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
});

export default Flightlist;