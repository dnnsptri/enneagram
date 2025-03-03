import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Result } from "@shared/schema";
import type { EnneagramType } from "@shared/types";

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

interface ResultsPDFProps {
  result: Result;
  primaryType: EnneagramType;
  wingType: EnneagramType;
}

// Create Document Component
export const ResultsPDF: React.FC<ResultsPDFProps> = ({ result, primaryType, wingType }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Enneagram Test Resultaten</Text>

        <Text style={styles.heading}>Primair Type: {primaryType.name}</Text>
        <Text style={styles.text}>{primaryType.description}</Text>

        <Text style={styles.heading}>Vleugel: {wingType.name}</Text>
        <Text style={styles.text}>{wingType.description}</Text>

        <Text style={styles.heading}>Scores:</Text>
        {result.scores.map((score, index) => (
          <Text key={index} style={styles.text}>
            Type {index + 1}: {score.toFixed(2)}
          </Text>
        ))}

        <Text style={styles.heading}>Sterktes:</Text>
        <View>
          {primaryType.strengths.map((strength, index) => (
            <Text key={index} style={styles.text}>• {strength}</Text>
          ))}
        </View>

        <Text style={styles.heading}>Zwaktes:</Text>
        <View>
          {primaryType.weaknesses.map((weakness, index) => (
            <Text key={index} style={styles.text}>• {weakness}</Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);