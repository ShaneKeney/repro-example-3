import React from "react";
import { View } from "react-native";

export default function({ className }: { className?: string }) {
  return <View className={`pb-12 ${className}`}></View>
}