import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from 'react-native';
import TabBarIcon from "../components/TabBarIcon";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import InvoiceScreen from "../screens/InvoiceScreen";
import { RootTabParamList, RootTabScreenProps } from "../types";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();

 export default function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       initialRouteName="Invoice"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
       }}>
       <BottomTab.Screen
         name="Invoice"
         component={InvoiceScreen}
         options={({ navigation }: RootTabScreenProps<'Invoice'>) => ({
           title: 'Create Invoice',
           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
         })}
       />
     </BottomTab.Navigator>
   );
 }