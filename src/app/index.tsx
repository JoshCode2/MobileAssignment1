import { StyleSheet, View, Image, Text, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        
        <View style={{ flex: 1 }}>
          <Text style={styles.username}>ootd_everyday</Text>
          <Text style={styles.subUsername}>via frenchie_fry39</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={20} />
      </View>

      {/* Post Image IMAGE IS NOT WORKING IDK why*/}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1520975922324-8f5948eac3c6",
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

      </Text>

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

  /* Top Bar */
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

  /* Post Header */
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 14,
  },

  subUsername: {
    fontSize: 12,
    color: "gray",
  },

  /* Post Image */
  postImage: {
    width: "100%",
    height: 380,
  },

  /* Actions */
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

  /* Text sections */
  likes: {
    paddingHorizontal: 15,
    fontWeight: "600",
  },

  caption: {
    paddingHorizontal: 15,
    marginTop: 4,
  },

  viewComments: {
    paddingHorizontal: 15,
    color: "gray",
    marginTop: 4,
  },

  comment: {
    paddingHorizontal: 15,
    marginTop: 2,
  },

  time: {
    paddingHorizontal: 15,
    marginTop: 4,
    fontSize: 11,
    color: "gray",
  },

  bold: {
    fontWeight: "bold",
  },

  /* Bottom nav */
  bottomNav: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});