
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Results } from "@/shared/types";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    minHeight: 25,
    alignItems: "center",
  },
  tableCol: {
    width: "50%",
    padding: 5,
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: "center",
    fontSize: 10,
    color: "grey",
  },
});

interface ResultsPDFProps {
  data: Results;
}

const ResultsPDF: React.FC<ResultsPDFProps> = ({ data }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Analysis Results</Text>
          <Text style={styles.date}>Generated on: {currentDate}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Overview</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <View style={styles.tableCol}>
                <Text style={styles.text}>Metric</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.text}>Value</Text>
              </View>
            </View>
            {Object.entries(data.overview || {}).map(([key, value]) => (
              <View style={styles.tableRow} key={key}>
                <View style={styles.tableCol}>
                  <Text style={styles.text}>{key}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.text}>{value}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Details</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <View style={styles.tableCol}>
                <Text style={styles.text}>Category</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.text}>Results</Text>
              </View>
            </View>
            {Object.entries(data.details || {}).map(([key, value]) => (
              <View style={styles.tableRow} key={key}>
                <View style={styles.tableCol}>
                  <Text style={styles.text}>{key}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.text}>{typeof value === 'object' ? JSON.stringify(value) : value}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Text>This report is automatically generated and confidential.</Text>
        </View>
      </Page>
    </Document>
  );
};

export { ResultsPDF };
