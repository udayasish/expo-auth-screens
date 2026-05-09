import { useRouter } from "expo-router";
import { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeft,
  ICON_ACTIVE,
  ICON_MUTED,
  LockIcon,
  MailIcon,
  TokenIcon,
} from "./icons";

type MethodId = "email" | "2fa" | "authenticator";

const METHODS: Array<{
  id: MethodId;
  title: string;
  subtitle: string;
  renderIcon: (color: string) => React.ReactNode;
}> = [
  {
    id: "email",
    title: "Email Address",
    subtitle: "Send via email address securely.",
    renderIcon: (color) => <MailIcon color={color} />,
  },
  {
    id: "2fa",
    title: "2 Factor Authentication",
    subtitle: "Send via 2FA securely.",
    renderIcon: (color) => <TokenIcon color={color} />,
  },
  {
    id: "authenticator",
    title: "Google Authenticator",
    subtitle: "Send via authenticator securely.",
    renderIcon: (color) => <LockIcon color={color} />,
  },
];

export default function ForgotPassword() {
  const router = useRouter();
  const [selected, setSelected] = useState<MethodId>("2fa");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F0F10" }}>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -40,
          alignItems: "center",
          opacity: 0.06,
        }}
        pointerEvents="none"
      >
        <LockIcon color="#8E8E93" size={8} />
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          paddingTop: 8,
          paddingBottom: 32,
        }}
      >
        <Pressable
          onPress={() => (router.canGoBack() ? router.back() : router.replace("/"))}
          hitSlop={8}
          style={({ pressed }) => ({
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: pressed ? "#2C2C2E" : "#1C1C1E",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <ChevronLeft />
        </Pressable>

        <Text
          style={{
            fontSize: 32,
            fontWeight: "800",
            color: "#F5F5F7",
            marginTop: 28,
            marginBottom: 8,
          }}
        >
          Forgot Password
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#8E8E93",
            marginBottom: 32,
          }}
        >
          Select which methods you'd like to reset.
        </Text>

        <View style={{ flex: 1, justifyContent: "center", gap: 14, marginBottom: 28 }}>
          {METHODS.map((m) => {
            const isSelected = selected === m.id;
            const iconColor = isSelected ? ICON_ACTIVE : ICON_MUTED;
            return (
              <Pressable
                key={m.id}
                onPress={() => setSelected(m.id)}
                style={({ pressed }) => ({
                  backgroundColor: "#1C1C1E",
                  borderRadius: 20,
                  paddingVertical: 18,
                  paddingHorizontal: 18,
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: isSelected ? "#7FD957" : "transparent",
                  opacity: pressed ? 0.85 : 1,
                })}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: isSelected
                      ? "rgba(127, 217, 87, 0.18)"
                      : "#2C2C2E",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 14,
                  }}
                >
                  {m.renderIcon(iconColor)}
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "700",
                      color: "#F5F5F7",
                      marginBottom: 2,
                    }}
                  >
                    {m.title}
                  </Text>
                  <Text style={{ fontSize: 13, color: "#8E8E93" }}>{m.subtitle}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={() => console.log("Reset Password via:", selected)}
          style={({ pressed }) => ({
            height: 56,
            backgroundColor: pressed ? "#6FC847" : "#7FD957",
            borderRadius: 28,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#7FD957",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 6,
          })}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "700",
              marginRight: 10,
            }}
          >
            Reset Password
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              ...(Platform.OS === "android" ? { marginTop: -2 } : null),
            }}
          >

          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
