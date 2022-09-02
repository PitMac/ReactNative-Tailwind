import { View, Text, Pressable } from "react-native";
import React from "react";

export default function App() {
  return (
    <View className="flex h-screen items-center justify-center">
      <Text className="font-bold text-3xl">This is a example</Text>
      <Pressable
        onPress={() => console.log("Hello")}
        className="bg-slate-700 p-6 rounded active:bg-slate-900"
      >
        <Text className="text-white">This is a button</Text>
      </Pressable>
    </View>
  );
}
