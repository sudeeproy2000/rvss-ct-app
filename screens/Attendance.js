import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Test() {
  const data = [
    {
      index: 1,
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        uid: 123456789,
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "608 Denesik Square, Port Rayfordbury, MN 48505",
        attendance: null,
      },
    },
    {
      index: 2,
      school_id: "1a2b3c4d5e6",
      img: "./Assets/2.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        uid: 123456780,
        name: "Sudip Das",
        father_name: "P Das",
        dob: "19/01/1987",
        b_group: "AB+",
        contact_no: "7031234567",
        address: "43035 Johnsie Port, Port Elmira, CT 49298-6961",
        attendance: null,
      },
    },
    {
      index: 3,
      school_id: "1a2b3c4d5e6",
      img: "./Assets/3.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        uid: 123456781,
        name: "S Roy",
        father_name: "D Roy",
        dob: "19/02/2000",
        b_group: "A+",
        contact_no: "7031123475",
        address: "70103 Ward Stravenue, New Benedictbury, MN 37616-6713",
        attendance: null,
      },
    },
    {
      index: 4,
      school_id: "1a2b3c4d5e6",
      img: "./Assets/4.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        uid: 123456782,
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "Suite 960 8549 Langosh Neck, New Shara, VT 24824",
        attendance: null,
      },
    },
    {
      index: 5,
      school_id: "1a2b3c4d5e6",
      img: "./Assets/5.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        uid: 123456783,
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address:
          "Suite 499 4514 Altenwerth Viaduct, Port Kristofer, NJ 48194-9062",
        attendance: null,
      },
    },
    {
      index: 6,
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        uid: 123456784,
        name: "Samir Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "6500 Krystal Glen, South Ianmouth, ME 87157-8846",
        attendance: null,
      },
    },
    {
      index: 7,
      school_id: "1a2b3c4d5e6",
      img: "./Assets/7.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        uid: 123456785,
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "115 Hagenes Plain, New Dwayneberg, CA 52776-1425",
        attendance: null,
      },
    },
  ];

  const [students, setStudents] = useState(data);

  const toggleAttendance = (index, status) => {
    setStudents((prevStudents) => {
      const updatedStudents = [...prevStudents];
      updatedStudents[index].attendance = status;
      return updatedStudents;
    });
  };

  return (
    <View style={styles.wrapper}>
      {/* Table Container */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.table_head}>
          {/* One Single Row */}
          <View style={{ width: "25%" }}>
            <Text style={styles.text_header}>Student ID</Text>
          </View>
          <View style={{ width: "30%" }}>
            <Text style={styles.text_header}>Student Name</Text>
          </View>
          <View style={{ width: "20%" }}>
            <Text style={styles.text_header}>Present</Text>
          </View>
          <View style={{ width: "20%" }}>
            <Text style={styles.text_header}>Absent</Text>
          </View>
        </View>
        {/* Table Body */}
        <View style={styles.table_body}>
          {students.map((student, index) => (
            <View key={student.id} style={{ flexDirection: "row" }}>
              <View style={{ width: "30%" }}>
                <Text style={styles.text_data}>{student.student.uid}</Text>
              </View>
              <View style={{ width: "40%" }}>
                <Text style={styles.text_data}>{student.student.name}</Text>
              </View>
              <View style={styles.attendance}>
                <TouchableOpacity
                  style={styles.outer}
                  onPress={() => toggleAttendance(index, "present")}
                >
                  {student.attendance === "present" && (
                    <View style={styles.inner}></View>
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.attendance}>
                <TouchableOpacity
                  style={styles.outer}
                  onPress={() => toggleAttendance(index, "absent")}
                >
                  {student.attendance === "absent" && (
                    <View style={styles.inner}></View>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Attendance</Text>
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
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 10,
    columnGap: 20,
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
  },
  text_data: {
    color: "black",
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
  submitButton: {
    borderWidth: 2,
    backgroundColor: "green",
    borderRadius: 30,
    padding: 10,
    marginLeft: 10,
  },
  submitButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
});
