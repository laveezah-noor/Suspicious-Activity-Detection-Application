// import React from 'react';
// // import {Text, View} from 'react-native';
// import { View, Text, StatusBar } from "react-native";
// import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

// const MyList = () => {
//   return (
//     <FlashList
//       data={DATA}
//       renderItem={({ item }) => <Text style={{color:'black'}}>{item.title}</Text>}
//       estimatedItemSize={10}
//     />
//   );
// };
// const NotificationScreen = () => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Notification</Text>
//       <MyList/>
//     </View>
//   );
// };

// export default NotificationScreen;

import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  LayoutAnimation,
  StyleSheet,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import MainHeader from "../components/shared/MainHeader";
import { colors } from "../constants/theme";

const generateArray = (size) => {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = i;
  }
  return arr;
};

const NotificationScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  // const [data, setData] = useState(generateArray(100));
  const notification = [
    {
      id: 1,
      notification: "Camera 1 got an suspicious activity",
      time: "00:00",
      title: "Camera1",
      location: "Entrance",
      image: require("../../assets/images/cameras/KitchenCamera2.jpg"),
      description: "A person was seen loitering near the entrance for an extended period of time.",
      date: "2022-01-20",
      isNotificationRead: false
    },
    {
      id: 2,
      notification: "Camera 2 got an suspicious activity",
      time: "00:00",
      title: "Camera2",
      location: "Parking Lot",
      image: require("../../assets/images/cameras/KitchenCamera2.jpg"),
      description: "A car was parked in the parking lot for an extended period of time without any occupants.",
      date: "2022-01-20",
      isNotificationRead: false
    },
    {
      id: 3,
      notification: "Camera 3 got an suspicious activity",
      time: "00:00",
      title: "Camera3",
      location: "Back Door",
      image: require("../../assets/images/cameras/KitchenCamera2.jpg"),
      description: "A person was seen trying to enter the building through the back door.",
      date: "2022-01-20",
      isNotificationRead: false
    },
    {
      id: 4,
      notification: "Camera 4 got an suspicious activity",
      time: "00:00",
      title: "Camera4",
      location: "Staircase",
      image: require("../../assets/images/cameras/KitchenCamera2.jpg"),
      description: "A person was seen using the staircase without proper authorization.",
      date: "2022-01-20",
      isNotificationRead: true
    },
  ];
  
  const obj = Object.values(notification)
  console.log(obj);
  const [data, setData] = useState(obj);
  const list = useRef(null);
  
  const today = new Date().toISOString().slice(0, 10);
  const todayNotifications = notification.filter((item) => item.date === today);
  const earlierNotifications = notification.filter((item) => item.date !== today);
  
  console.log("Today's notifications:", todayNotifications);
  console.log("Earlier notifications:", earlierNotifications);

  const removeItem = (item) => {
    setData(
      data.filter((dataItem) => {
        return dataItem !== item;
      })
    );
    list.current?.prepareForLayoutAnimationRender();
    // after removing the item, we start animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <Pressable 
        key={item.id}
        onPress={() => {
          removeItem(item);
        }}
      >
         {/* <View
           style={{
             ...styles.container,
           }}
         >
           <View style={styles.HeaderLeftImageView}>
             <Image
             style={styles.HeaderLeftImage}
             source={require("../../assets/images/cameras/KitchenCamera2.jpg")}
             />
           </View>
           <View style={styles.HeaderRight}>
          <View><Text style={{fontSize: 15, color: "#171717"}}>{item.notification}</Text></View>
           <View><Text style={{color: "#64676B"}}>{item.time}</Text></View>
           </View>
         </View>  */}
         <View style={[styles.notificationContainer, item.isNotificationRead ? styles.readNotification : styles.unreadNotification]}>
    <Image source={item.image} style={styles.notificationImage} />
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDescription}>{item.description}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
  </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.MainContainer}>
      <MainHeader title="Notifications" />
      <View 
        style={styles.notificationList}
        >
          {/* <Text>Hello</Text> */}
      <FlashList
        ref={list}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          setTimeout(() => {
            setRefreshing(false);
          }, 2000);
        }}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        getItemType={(item) => {
          return item > 97 ? "even" : "odd";
        }}
        data={data}
        renderItem={renderItem}
        estimatedItemSize={100}
        
      />
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  notificationList:{
    marginVertical: 5,
    marginHorizontal: 5,
    height: "100%",
    width: '97.5%',
    
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 15,
    backgroundColor: 'white',
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#00a1f1",
    border: 1
  },
  HeaderLeftImage:{
    width: '100%',
    height: '100%',
    
  },
  HeaderLeftImageView:{
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  HeaderRight: {
    display: "flex",
    flexDirection:"column", 
    marginLeft: 10
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  notificationImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  notificationDescription: {
    fontSize: 14,
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
  },
  readNotification: {
    backgroundColor: "#f5f5f5",
  },
  unreadNotification: {
    backgroundColor: "#fff",
  },
});
