import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 14,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    padding: 5,
  },
  tableCol: {
    width: '50%',
  },
  tableCell: {
    fontSize: 10,
  },
});

// Create Document Component
export const ResultsPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Enneagram Test Resultaten</Text>

        <Text style={styles.heading}>Primair Type: {data.primaryType.name}</Text>
        <Text style={styles.text}>{data.primaryType.description}</Text>

        <Text style={styles.heading}>Vleugel: {data.wingType.name}</Text>
        <Text style={styles.text}>{data.wingType.description}</Text>

        <Text style={styles.heading}>Scores:</Text>
        {data.scores.map((score, index) => (
          <Text key={index} style={styles.text}>
            Type {index + 1}: {score.toFixed(2)}
          </Text>
        ))}

        <Text style={styles.heading}>Sterktes:</Text>
        <View>
          {data.primaryType.strengths.map((strength, index) => (
            <Text key={index} style={styles.text}>• {strength}</Text>
          ))}
        </View>

        <Text style={styles.heading}>Zwaktes:</Text>
        <View>
          {data.primaryType.weaknesses.map((weakness, index) => (
            <Text key={index} style={styles.text}>• {weakness}</Text>
          ))}
        </View>

        {data.overview && Object.keys(data.overview).length > 0 && (
          <>
            <Text style={styles.heading}>Overzicht:</Text>
            {Object.entries(data.overview || {}).map(([key, value]) => (
              <View style={styles.tableRow} key={key}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{key}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{value}</Text>
                </View>
              </View>
            ))}
          </>
        )}
      </View>
    </Page>
  </Document>
);