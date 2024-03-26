import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function Test() {
  const [attendance, setAttendance] = useState("");

  return (
    <View style={styles.wrapper}>
      {/*Table Container*/}
      <View style={styles.table}>
        {/*Table Header*/}
        <View style={styles.table_head}>
          {/*One Single Row*/}
          <View style={{ width: "28%" }}>
            <Text style={styles.text_header}>Student ID</Text>
          </View>

          <View style={{ width: "39%" }}>
            <Text style={styles.text_header}>Student Name</Text>
          </View>

          <View style={{ width: "28%" }}>
            <Text style={styles.text_header}>Attendance</Text>
          </View>
        </View>

        {/*data of all students*/}
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.table_body}>
          {/*One Single Row*/}
          <View style={{ width: "30%" }}>
            <Text style={styles.text_data}>12345678</Text>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.text_data}>Sudeep Roy</Text>
          </View>

          {["present", "absent"].map((pornot) => (
            <View key={pornot} style={styles.attendance}>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setAttendance(pornot)}
              >
                {attendance == pornot && <View style={styles.inner}></View>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 2,
          backgroundColor: "green",
          borderRadius: 30,
          padding: 10,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "white",
            fontWeight: "bold",
            paddingHorizontal: 20,
          }}
        >
          Submit Attendance
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    margin: 15,
  },
  table_head: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#1E90FF",
    justifyContent: "space-between",
  },
  table_body: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
  },
  outer: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: 13,
    height: 12,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  attendance: {
    width: "15%",
  },
});
