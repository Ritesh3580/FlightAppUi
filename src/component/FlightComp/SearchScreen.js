import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import DropDownCmp from './DropDownCmp';
import Flightlist from './Flightlist';
import axios from 'axios';




const SearchScreen = () => {

    const [flightdata, setflightdata] = useState(['']);
    const [fromOrigin, setfromOrigin] = useState('');
    const [toDestination, setToDestination] = useState('');
    const [flightSearchData, setflightSearchData] = useState([]);

    console.log("Origin------- "+fromOrigin+"Tooodes-----<>", toDestination);



    useEffect(() => {
        getFlight();
    }, []);

    const getFlight = () => {
        axios.get('https://api.npoint.io/378e02e8e732bb1ac55b', {})
            .then(res => {
                setflightdata(res?.data);
            })
            .catch(err => {
                console.log("Error --->>", err);
            })
    }

    const handleorigin = (data) => {
        setfromOrigin(data);
    }
    const handleDestinaton = (data) => {
        setToDestination(data);
    }

    //Get data from API 


    const pressFlightSearch = () => {
        const filteredFlights = flightdata?.filter(
            (flight) => flight.origin === fromOrigin && flight.destination === toDestination
        );

        console.log("----filteredFlights--->>", filteredFlights);

        if (filteredFlights?.length > 0) {
            setflightSearchData(filteredFlights);
        }
        else {
            setflightSearchData([]);
        }

    };


    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Book your next flight
            </Text>

            <DropDownCmp data={flightdata}  labelField={'origin'} sendData={handleorigin} />

            <DropDownCmp data={flightdata} labelField={'destination'} sendData={handleDestinaton} />

            <TouchableOpacity style={styles.searchButton} onPress={() => { pressFlightSearch() }}>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>Search</Text>
            </TouchableOpacity>

            <View style={{ flex: 1, marginTop: 20 }}>

                {
                    flightSearchData ? <FlatList
                        data={flightSearchData}
                        keyExtractor={(item) => item?.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        renderItem={({ item }) => <Flightlist data={item} />}
                    /> : 
                    null

                }

            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        //borderRadius:40,
        // height:400
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        //   marginBottom: 20,
        color: 'black'
    },
    searchButton: {
        backgroundColor: '#5390ff',
        width: '60%',
        alignSelf: "center",
        marginTop: 20, height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default SearchScreen;