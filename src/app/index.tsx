import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topBar}>
        <Ionicons name="arrow-back" size={24} />
        <View style={styles.topCenter}>
          <Text style={styles.topUsername}>OOTD_EVERYDAY</Text>
          <Text style={styles.topTitle}>Posts</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
          }}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.username}>ootd_everyday</Text>
          <Text style={styles.subUsername}>via frenchie_fry39</Text>
        </View>

        <Ionicons name="ellipsis-horizontal" size={20} />
      </View>

      {/* Post Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900",
        }}
        style={styles.postImage}
      />

      {/* Action Icons */}
      <View style={styles.actions}>
        <View style={styles.leftIcons}>
          <Pressable>
            <Ionicons name="heart-outline" size={26} />
          </Pressable>

          <Pressable>
            <Ionicons name="chatbubble-outline" size={26} />
          </Pressable>

          <Pressable>
            <Ionicons name="paper-plane-outline" size={26} />
          </Pressable>
        </View>

        <Pressable>
          <Ionicons name="bookmark-outline" size={26} />
        </Pressable>
      </View>

      {/* Caption */}
      <Text style={styles.caption}>
        <Text style={styles.bold}>frenchie_fry39 </Text>
        Fresh shot on a sunny day! ☀️
      </Text>

      {/* Alert Button */}
      <Pressable
        style={styles.alertButton}
        onPress={() => {
          window.alert("Alert Button Pressed");
        }}
      >
        <Text style={styles.alertButtonText}>Alert</Text>
      </Pressable>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={26} />
        <Ionicons name="search-outline" size={26} />
        <Ionicons name="play-circle-outline" size={26} />
        <Ionicons name="bag-outline" size={26} />
        <Ionicons name="person-outline" size={26} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  topCenter: {
    alignItems: "center",
  },

  topUsername: {
    fontSize: 12,
    color: "gray",
    fontWeight: "600",
  },

  topTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
    backgroundColor: "#ddd",
  },

  username: {
    fontWeight: "bold",
    fontSize: 14,
  },

  subUsername: {
    fontSize: 12,
    color: "gray",
  },

  postImage: {
    width: "100%",
    height: 420,
    resizeMode: "cover",
    backgroundColor: "#eee",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  leftIcons: {
    flexDirection: "row",
    gap: 15,
  },

  caption: {
    paddingHorizontal: 15,
    marginTop: 2,
    fontSize: 13,
  },

  bold: {
    fontWeight: "bold",
  },

  alertButton: {
    backgroundColor: "black",
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  alertButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  bottomNav: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});
