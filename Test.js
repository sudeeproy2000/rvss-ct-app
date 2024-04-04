import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";

const data = [
  {
    index: "1",
    school_id: "1a2b3c4d5e6",
    school_name: "Kendriya Vidyalaya No.1, Salt Lake",
    school_address:
      "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
    principal: { name: "S Roy" },
    student: {
      name: "Sudeep Roy",
      father_name: "Swapan Roy",
      dob: "19/01/2000",
      b_group: "O+",
      contact_no: "7031032675",
      address: "608 Denesik Square, Port Rayfordbury, MN 48505",
    },
  },
  {
    index: "2",
    school_id: "1a2b3c4d5e6",
    //img: "./Assets/2.jpg",
    school_name: "Kendriya Vidyalaya No.1, Salt Lake",
    school_address:
      "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
    principal: { name: "S Roy" },
    student: {
      name: "Sudip Das",
      father_name: "P Das",
      dob: "19/01/1987",
      b_group: "AB+",
      contact_no: "7031234567",
      address: "43035 Johnsie Port, Port Elmira, CT 49298-6961",
    },
  },
  {
    index: "3",
    school_id: "1a2b3c4d5e6",
    //img: "./Assets/3.jpg",
    school_name: "Kendriya Vidyalaya No.1, Salt Lake",
    school_address:
      "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
    principal: { name: "S Roy" },
    student: {
      name: "S Roy",
      father_name: "D Roy",
      dob: "19/02/2000",
      b_group: "A+",
      contact_no: "7031123475",
      address: "70103 Ward Stravenue, New Benedictbury, MN 37616-6713",
    },
  },
  {
    index: "4",
    school_id: "1a2b3c4d5e6",
    //img: "./Assets/4.jpg",
    school_name: "Kendriya Vidyalaya No.1, Salt Lake",
    school_address:
      "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
    principal: { name: "S Roy" },
    student: {
      name: "Sudeep Roy",
      father_name: "Swapan Roy",
      dob: "19/01/2000",
      b_group: "O+",
      contact_no: "7031032675",
      address: "Suite 960 8549 Langosh Neck, New Shara, VT 24824",
    },
  },
  {
    index: "5",
    school_id: "1a2b3c4d5e6",
    // img: "./Assets/5.jpg",
    school_name: "Kendriya Vidyalaya No.1, Salt Lake",
    school_address:
      "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
    principal: { name: "S Roy" },
    student: {
      name: "Sudeep Roy",
      father_name: "Swapan Roy",
      dob: "19/01/2000",
      b_group: "O+",
      contact_no: "7031032675",
      address:
        "Suite 499 4514 Altenwerth Viaduct, Port Kristofer, NJ 48194-9062",
    },
  },
  {
    index: "6",
    school_id: "1a2b3c4d5e6",
    school_name: "Kendriya Vidyalaya No.1, Salt Lake",
    school_address:
      "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
    principal: { name: "S Roy" },
    student: {
      name: "Samir Roy",
      father_name: "Swapan Roy",
      dob: "19/01/2000",
      b_group: "O+",
      contact_no: "7031032675",
      address: "6500 Krystal Glen, South Ianmouth, ME 87157-8846",
    },
  },
  {
    index: "7",
    school_id: "1a2b3c4d5e6",
    //img: "./Assets/7.jpg",
    school_name: "Kendriya Vidyalaya No.1, Salt Lake",
    school_address:
      "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
    principal: { name: "S Roy" },
    student: {
      name: "Sudeep Roy",
      father_name: "Swapan Roy",
      dob: "19/01/2000",
      b_group: "O+",
      contact_no: "7031032675",
      address: "115 Hagenes Plain, New Dwayneberg, CA 52776-1425",
    },
  },
];

const NestedFlatList = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (itemId) => {
    setExpandedItems((prevExpandedItems) =>
      prevExpandedItems.includes(itemId)
        ? prevExpandedItems.filter((id) => id !== itemId)
        : [...prevExpandedItems, itemId]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={{ padding: 1 }}>
        <TouchableOpacity
          onPress={() => toggleItem(item.index)}
          style={styles.itemView}
        >
          <Text style={{ fontSize: 20, fontWeight: 700 }}>
            {item.student.name}
          </Text>
        </TouchableOpacity>
        {expandedItems.includes(item.index) && (
          <View
            style={{
              width: "100%",
              paddingLeft: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#b9b9b5",
              paddingTop: 15,
            }}
          >
            <View
              style={{
                width: 324,
                height: 204,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                flexDirection: "column",
              }}
            >
              <View
                style={{ flexDirection: "row", backgroundColor: "#800000" }}
              >
                <View style={{ flex: 1 / 5, alignItems: "center", padding: 3 }}>
                  <Image
                    source={require("./././../assets/image/id-school-logo.png")}
                    style={{ width: 35, height: 35 }}
                  />
                </View>
                <View
                  style={{
                    flex: 4 / 5,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 1,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 12,
                      color: "white",
                    }}
                  >
                    KENDRIYA VIDYALAYA NO.1 SALT LAKE
                  </Text>
                  <Text
                    style={{
                      fontWeight: "light",
                      color: "yellow",
                      fontSize: 7,
                    }}
                  >
                    An autoimmune body under Ministry of Education, Govt Of
                    India
                  </Text>
                  <Text style={{ color: "white", fontSize: 8 }}>
                    Labony, EB Block, Saltlake Sector-I, Kolkata - 700064
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "yellow",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: 11,
                }}
              >
                <Text style={{ fontSize: 9 }}>Email:</Text>
                <Text style={{ fontSize: 9 }}>Phone No:</Text>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 10, color: "blue" }}>
                  Session: 2024-2025
                </Text>
              </View>

              <View style={{ flexDirection: "row", padding: 5 }}>
                <TouchableOpacity
                  style={{
                    flex: 1 / 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("./././../assets/image/pp.png")}
                    style={{ width: 60, height: 80, borderRadius: 5 }}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    flex: 2 / 3,
                    justifyContent: "center",
                    borderColor: "black",
                    borderWidth: 1,
                    paddingLeft: 5,
                  }}
                >
                  <Text
                    style={{ fontSize: 10, fontWeight: "bold", paddingTop: 5 }}
                  >
                    Name: <Text style={{ color: "blue" }}>Student Name</Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 5,
                    }}
                  >
                    <Text style={{ fontSize: 8 }}>
                      Class:<Text style={{ color: "blue" }}>X</Text>
                    </Text>
                    <Text style={{ fontSize: 8 }}>
                      Section:<Text style={{ color: "blue" }}>A</Text>
                    </Text>
                  </View>
                  <Text style={{ fontSize: 8 }}>
                    Father's Name:{" "}
                    <Text style={{ color: "blue" }}>Animesh Sarkar</Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 5,
                    }}
                  >
                    <Text style={{ fontSize: 8 }}>
                      Date of Birth:{" "}
                      <Text style={{ color: "blue" }}>10/10/2010</Text>
                    </Text>
                    <Text style={{ fontSize: 8 }}>
                      Blood Group:<Text style={{ color: "blue" }}>o+</Text>
                    </Text>
                  </View>
                  <Text style={{ fontSize: 8 }}>
                    Contact No:
                    <Text style={{ color: "blue" }}>9123456789</Text>
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Student ID UBI:
                    <Text style={{ color: "blue" }}>1234567890</Text>
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Address:{" "}
                    <Text style={{ color: "blue" }}>
                      ABC Sarani, Salt Lake, Kolkata - 700034
                    </Text>
                  </Text>
                </View>
              </View>

              <View style={{ alignSelf: "flex-end", marginRight: 10 }}>
                {/*<Image
                      source={require("./Assets/signature.png")}
                      style={{ width: 60, height: 30, marginRight: 5 }}
                      />*/}
                <Text style={{ fontSize: 10 }}>Principal Signature</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  backgroundColor: "blue",
                  borderRadius: 4,
                  height: 30,
                }}
                onPress={() => console.log("Edit button pressed")}
              >
                <Text
                  style={{
                    fontSize: 8,
                    color: "white",
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  backgroundColor: "green",
                  borderRadius: 4,
                  height: 30,
                }}
                onPress={() => console.log("Submit button pressed")}
              >
                <Text
                  style={{
                    fontSize: 8,
                    color: "white",
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>

            {/*item.img && (
            <Image source={item.img} style={{ width: 100, height: 100 }} />
          )*/}
          </View>
        )}
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.index}
    />
  );
};

export default NestedFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: "100%",
    marginTop: 10,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "center",
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
});
