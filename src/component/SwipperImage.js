import { View, Text, StyleSheet, Image, FlatList, Dimensions, Animated } from 'react-native'
import React, { useRef } from 'react'


const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.27;

const SwipperImage = () => {


    const scrollX = useRef(new Animated.Value(0)).current;

    const images = [
        'https://plus.unsplash.com/premium_photo-1697729454319-d4405602379a?w=500',
        'https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=500',
        'https://images.unsplash.com/photo-1616884950055-861aeb5eb380?w=500',
        'https://i.pinimg.com/originals/5c/f1/c7/5cf1c7e2be0daff372d45017a84723ba.jpg',
        'https://i.pinimg.com/originals/9d/ba/9e/9dba9e7991a210ed84b7f8a5b49d3f30.jpg',
        'https://www.swantour.com/blogs/wp-content/uploads/2017/01/Places-to-Visit-in-Mathura-and-Vrindavan.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/34/Nidhivan.jpg',
        'https://t3.ftcdn.net/jpg/03/29/01/42/360_F_329014233_hcG2NmFNw4nRXA1YRnEHl3mpa1sx78De.jpg',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjyuOxB43ftOlcOD9GDsA1718ZZsIQuj7wTHDgBACkXGsEc0kYHH10qTvkf7D8BUhsPfEHAz7cuDvKH9TIf5Z-pBs4qh3uVWu4BG2KrW1D_xN0FP_qHHi1_6HMaiZBnccuM1ppWenDQQ1j5uPg3Ajc22ummp2P9ftzSD0WfBl8GcNhcG6NkYXwrnGg/s800/Radha%20Kund.jpg',
        'https://miro.medium.com/v2/resize:fit:1400/1*p81piCv_oOi510EirtcWyA.jpeg',
    ];
    const data = images.map((image, index) => ({
        key: String(index),
        photo: image,
        avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
            Math.random() * 40
        )}.jpg`,
    }));



    return (
        <View style={styles.container}>


            <Animated.FlatList
                data={data}
                keyExtractor={item => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
                // pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width
                    ];

                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [-width * 0.7, 0, width * 0.7]
                    })
                    return (
                        <View style={{ width, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                       //backgroundColor:'white'
                         }}>
                            <View style={styles.cardView}>

                                <View style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT,
                                     overflow: 'hidden',
                                      alignItems: 'center', borderRadius: 18 }}>
                                    <Animated.Image source={{ uri: item?.photo }}
                                        style={{
                                            width: ITEM_WIDTH * 1.4,
                                            height: ITEM_HEIGHT,
                                            resizeMode: 'cover',
                                            transform: [
                                                {
                                                    translateX
                                                }
                                            ]
                                        }}
                                    />

                                </View>

                                {/* <Image source={{ uri: item?.avatar_url }} style={{ width: 60, height: 60, borderRadius: 60, borderWidth: 2, borderColor: 'white', position: 'absolute', bottom: -30, right: 60, }} /> */}


                            </View>


                        </View>
                    )
                }}
            />
            {/* <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item, index) => {
            return (
                <View style={styles.cardView}>
               { console.log("-------->>Item",item)}
                    <Image source={{uri : item?.item?.avatar_url}} style={{ height: 100, width: 100 }} />
                </View>
            )
          }}
        /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
        backgroundColor: '#fff',
       alignItems: 'center',
        justifyContent: 'center',
    },
    cardView: {
        borderRadius: 18,
        // borderWidth:10,
        // borderColor:'white',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 13,
        shadowOffset: {
            width: 0,
            height: 0
        },
        borderRadius: 18,
        backgroundColor: '#cacfd9',
        padding: 10
    }
})

export default SwipperImage;