import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  vote_average,
  release_date,
  title,
}: {
  id: number;
  poster_path: string;
  vote_average: number;
  release_date: string;
  title: string;
}) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "https://via.placeholder.com/600*400/1a1a1a/ffffff.padding",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-white text-xs font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-xs text-light-300 font-medium uppercase">
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
