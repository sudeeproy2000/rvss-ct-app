import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  DatePickerAndroid,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

function AddNewStudent() {
  const [classValue, setClassValue] = useState(null);
  const [sectionValue, setSectionValue] = useState(null);
  const [dob, setDob] = useState(null);

  const showDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
        mode: "spinner",
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        setDob(`${year}-${month + 1}-${day}`);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View
        style={{
          borderWidth: 2,
          padding: 20,
          borderColor: "gray",
          borderRadius: 10,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#4F46E5",
            padding: 10,
          }}
        >
          Add Student Manually
        </Text>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
            First name
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              marginTop: 5,
            }}
          />
        </View>

        {/* Add date picker functionality for DOB field */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
            Date of Birth
          </Text>
          <TouchableOpacity
            onPress={showDatePicker}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              marginTop: 5,
            }}
          >
            <Text>{dob ? dob : "Select Date"}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
            Email address
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              marginTop: 5,
            }}
            keyboardType="email-address"
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
            Phone Number
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              marginTop: 5,
            }}
            keyboardType="phone-pad"
          />
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
              Student Id UID
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginTop: 5,
              }}
            />
          </View>

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
              Class
            </Text>
            <RNPickerSelect
              onValueChange={(value) => setClassValue(value)}
              items={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "7", value: "7" },
                { label: "8", value: "8" },
                { label: "9", value: "9" },
                { label: "10", value: "10" },
                { label: "11", value: "11" },
                { label: "12", value: "12" },
              ]}
              value={classValue}
              placeholder={{ label: "Select Class", value: null }}
              style={{
                inputAndroid: {
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 10,
                  marginTop: 5,
                },
              }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
              Section
            </Text>
            <RNPickerSelect
              onValueChange={(value) => setSectionValue(value)}
              items={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" },
                { label: "D", value: "D" },
              ]}
              value={sectionValue}
              placeholder={{ label: "Select Section", value: null }}
              style={{
                inputAndroid: {
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 10,
                  marginTop: 5,
                },
              }}
            />
          </View>

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
              Roll No
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginTop: 5,
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
            Address
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              marginTop: 5,
              height: 100,
            }}
            multiline
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 20,
          marginBottom: 60,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 2,
            backgroundColor: "red",
            borderRadius: 30,
            padding: 10,
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
            Cancel
          </Text>
        </TouchableOpacity>

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
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default AddNewStudent;
