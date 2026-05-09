import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EyeIcon, ICON_MUTED, InstagramGlyph, LockIcon, Logo, MailIcon } from "./icons";

type FieldKey = "email" | "password";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState<FieldKey | null>(null);

  const fieldStyle = (key: FieldKey) => ({
    height: 56,
    backgroundColor: "#1C1C1E",
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: "row" as const,
    alignItems: "center" as const,
    borderWidth: 1.5,
    borderColor: focused === key ? "#7FD957" : "transparent",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F0F10" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingHorizontal: 24,
            paddingVertical: 32,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={{ alignItems: "center", marginBottom: 28 }}>
            <Logo />
          </View>

          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              textAlign: "center",
              color: "#F5F5F7",
              marginBottom: 8,
            }}
          >
            Sign In
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              color: "#8E8E93",
              marginBottom: 28,
            }}
          >
            Let's personalize the way we interact AI
          </Text>

          <Text style={{ fontSize: 14, fontWeight: "600", color: "#F5F5F7", marginBottom: 8 }}>
            Email Address
          </Text>
          <View style={[fieldStyle("email"), { marginBottom: 16 }]}>
            <View style={{ marginRight: 12 }}>
              <MailIcon color={focused === "email" ? "#7FD957" : ICON_MUTED} />
            </View>
            <TextInput
              value={email}
              onChangeText={setEmail}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              placeholder="elementary221b@gmail.com"
              placeholderTextColor="#48484A"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={{ flex: 1, fontSize: 16, color: "#F5F5F7" }}
            />
          </View>

          <Text style={{ fontSize: 14, fontWeight: "600", color: "#F5F5F7", marginBottom: 8 }}>
            Password
          </Text>
          <View style={[fieldStyle("password"), { marginBottom: 24 }]}>
            <View style={{ marginRight: 12 }}>
              <LockIcon color={focused === "password" ? "#7FD957" : ICON_MUTED} />
            </View>
            <TextInput
              value={password}
              onChangeText={setPassword}
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused(null)}
              placeholder="Enter your password..."
              placeholderTextColor="#48484A"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              style={{ flex: 1, fontSize: 16, color: "#F5F5F7" }}
            />
            <Pressable
              onPress={() => setShowPassword((v) => !v)}
              hitSlop={10}
              style={{ paddingLeft: 8, paddingVertical: 6 }}
            >
              <EyeIcon closed={!showPassword} />
            </Pressable>
          </View>

          <Pressable
            onPress={() => console.log("Sign in", { email, password })}
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
              marginBottom: 24,
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
              Sign In
            </Text>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}></Text>
          </Pressable>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <SocialButton>
              <Text style={{ fontSize: 22, fontWeight: "700", color: "#F5F5F7" }}>f</Text>
            </SocialButton>
            <SocialButton>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "#F5F5F7" }}>G</Text>
            </SocialButton>
            <SocialButton>
              <InstagramGlyph />
            </SocialButton>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 14,
            }}
          >
            <Text style={{ color: "#8E8E93", fontSize: 14 }}>Don't have an account? </Text>
            <Pressable onPress={() => router.push("/signup")} hitSlop={8}>
              <Text style={{ color: "#7FD957", fontSize: 14, fontWeight: "600" }}>Sign Up.</Text>
            </Pressable>
          </View>

          <Pressable
            onPress={() => router.push("/forgot-password")}
            hitSlop={8}
            style={{ alignSelf: "center" }}
          >
            <Text
              style={{
                color: "#7FD957",
                fontSize: 14,
                fontWeight: "600",
                textDecorationLine: "underline",
              }}
            >
              Forgot your password?
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function SocialButton({ children }: { children: React.ReactNode }) {
  return (
    <Pressable
      style={({ pressed }) => ({
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: pressed ? "#2C2C2E" : "#1C1C1E",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {children}
    </Pressable>
  );
}
