import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      {/* TOP BAR */}
      <View>
        <Text>ootd_everyday</Text>
        <Text>Via: frenchie_fry39</Text>
      </View>

      {/* Likes */}
      <View>
        <Text>Liked by paisley.print.48 and 7 others</Text>
      </View>

      {/* Caption */}
      <View>
        <Text>Fresh shot on a sunny day!🌞 </Text>
      </View>

      {/* Comments */}
      <View>
        <Text>View all 12 comments</Text>
        <Text>lil_wyatt838: Awesome tones</Text>
        <Text>pia.in.a.pod: Gorg. Love it! ❤️</Text>
      </View>

      {/* Time */}
      <View>
        <Text>1 day ago</Text>
      </View>
    </ScrollView>
  );
}
