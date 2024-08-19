import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Icon } from 'react-native-elements'; 
import React from 'react';
import { Text, View } from 'react-native';

const TabIcon = ({icon, color, focused}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Icon name={icon} color={color} />
      {focused && <View style={{ backgroundColor: color, height: 2, width: 25 }} />}
    </View>
  )
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#DA733A' }}>

      <Tabs.Screen
        name="Announcements"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="home" color={color} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="Schedule"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="clock-o" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Profile"
        headerShown={false}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="circle-o" color={color} />,
        }}
      />  

      {/* <Tabs.Screen
        name="Browse"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
        }}
      /> */}

      <Tabs.Screen
        name="LostAndFound"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-square-o" color={color} />,
        }}
      />

    </Tabs>
  );
}
