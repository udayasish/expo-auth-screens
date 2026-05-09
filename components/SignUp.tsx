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
import {
  EyeIcon,
  ICON_ERROR,
  ICON_MUTED,
  LockIcon,
  Logo,
  MailIcon,
  WarningIcon,
} from "./icons";

type FieldKey = "email" | "password" | "confirm";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState<FieldKey | null>(null);

  const passwordMismatch =
    password.length > 0 && confirmPassword.length > 0 && password !== confirmPassword;

  const fieldStyle = (key: FieldKey, hasError = false) => ({
    height: 56,
    backgroundColor: "#1C1C1E",
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: "row" as const,
    alignItems: "center" as const,
    borderWidth: 1.5,
    borderColor: hasError
      ? ICON_ERROR
      : focused === key
        ? "#7FD957"
        : "transparent",
  });

  const passwordIconColor = passwordMismatch
    ? ICON_ERROR
    : focused === "password"
      ? "#7FD957"
      : ICON_MUTED;

  const confirmIconColor = passwordMismatch
    ? ICON_ERROR
    : focused === "confirm"
      ? "#7FD957"
      : ICON_MUTED;

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
            Sign Up For Free
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              color: "#8E8E93",
              marginBottom: 28,
            }}
          >
            Create your account. It literally 3 minute for free!
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
              placeholder="Enter your email..."
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
          <View style={[fieldStyle("password", passwordMismatch), { marginBottom: 16 }]}>
            <View style={{ marginRight: 12 }}>
              <LockIcon color={passwordIconColor} />
            </View>
            <TextInput
              value={password}
              onChangeText={setPassword}
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused(null)}
              placeholder="********************"
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

          <Text style={{ fontSize: 14, fontWeight: "600", color: "#F5F5F7", marginBottom: 8 }}>
            Password Confirmation
          </Text>
          <View style={[fieldStyle("confirm", passwordMismatch), { marginBottom: 16 }]}>
            <View style={{ marginRight: 12 }}>
              <LockIcon color={confirmIconColor} />
            </View>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onFocus={() => setFocused("confirm")}
              onBlur={() => setFocused(null)}
              placeholder="********************"
              placeholderTextColor="#48484A"
              secureTextEntry={!showConfirm}
              autoCapitalize="none"
              autoCorrect={false}
              style={{ flex: 1, fontSize: 16, color: "#F5F5F7" }}
            />
            <Pressable
              onPress={() => setShowConfirm((v) => !v)}
              hitSlop={10}
              style={{ paddingLeft: 8, paddingVertical: 6 }}
            >
              <EyeIcon closed={!showConfirm} />
            </Pressable>
          </View>

          {passwordMismatch && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(255, 69, 58, 0.12)",
                borderWidth: 1.5,
                borderColor: ICON_ERROR,
                borderRadius: 16,
                paddingVertical: 14,
                paddingHorizontal: 16,
                marginBottom: 16,
              }}
            >
              <View style={{ marginRight: 12 }}>
                <WarningIcon />
              </View>
              <Text style={{ color: "#FF6B61", fontSize: 14, fontWeight: "600", flex: 1 }}>
                ERROR: Password do not match!
              </Text>
            </View>
          )}

          <Pressable
            onPress={() => console.log("Sign up", { email, password, confirmPassword })}
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
              marginTop: 12,
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
              Sign Up
            </Text>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}></Text>
          </Pressable>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "#8E8E93", fontSize: 14 }}>Already have an account? </Text>
            <Pressable onPress={() => router.replace("/")} hitSlop={8}>
              <Text
                style={{
                  color: "#7FD957",
                  fontSize: 14,
                  fontWeight: "600",
                  textDecorationLine: "underline",
                }}
              >
                Sign In.
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
