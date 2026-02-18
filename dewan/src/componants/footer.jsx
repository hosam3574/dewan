import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footerWrapper}>
      <ScrollView contentContainerStyle={styles.footerContent}>
        {/* العمود الأول */}
        <View style={styles.footerCol}>
          <Text style={styles.footerTitle}>الشِّدّة</Text>
          <Text style={styles.footerText}>
            منصة لدعمك في فترات الشدّة وتقديم محتوى يخفف عليك ويقوّيك.
          </Text>
        </View>

        {/* العمود الثاني */}
        <View style={styles.footerCol}>
          <Text style={styles.footerSubtitle}>روابط سريعة</Text>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.footerLink}>الرئيسية</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.footerLink}>من نحن</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.footerLink}>المدونة</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.footerLink}>تواصل معنا</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.footerLink}>الأسئلة الشائعة</Text>
          </TouchableOpacity>
        </View>

        {/* العمود الثالث */}
        <View style={styles.footerCol}>
          <Text style={styles.footerSubtitle}>تواصل معنا</Text>
          <Text style={styles.footerText}>📧 info@devexa-it.com</Text>
          <Text style={styles.footerText}>📱 962770245471</Text>
        </View>
      </ScrollView>

      <View style={styles.footerBottom}>
        <Text style={styles.footerBottomText}>
          © 2026 جميع الحقوق محفوظة – منصة الشِّدّة
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerWrapper: {
    backgroundColor: "#0f172a",
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexShrink: 0,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  footerCol: {
    width: "30%",
    marginBottom: 20,
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  footerSubtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: "#cbd5f5",
    marginBottom: 5,
  },
  footerLink: {
    fontSize: 14,
    color: "#38bdf8",
    marginBottom: 5,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: "#333",
    marginTop: 20,
    paddingTop: 10,
  },
  footerBottomText: {
    color: "#94a3b8",
    fontSize: 12,
    textAlign: "center",
  },
});
