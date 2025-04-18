// import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { useFonts } from 'expo-font';
// import React, { useEffect } from 'react';
// import SplashScreen from 'react-native-splash-screen';



// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hide();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return <RootLayoutNav />;
// }

// function RootLayoutNav() {
//   return (
//     <Tabs>
//       <Tabs.Screen
//         name="(tabs)/Profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="(tabs)/Shop"
//         options={{
//           title: "Shop",
//           tabBarIcon: ({ color }) => <Ionicons name="cart" size={24} color={color} />,
//         }}
//       />
//        <Tabs.Screen name="(tabs)/Crates" options={{ title: "Crates", tabBarIcon: ({ color }) => <Ionicons name="archive" size={24} color={color} /> }} />
//     </Tabs>
//   );
// }
