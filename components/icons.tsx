import { Text, View } from "react-native";

export const ICON_MUTED = "#8E8E93";
export const ICON_ACTIVE = "#7FD957";
export const ICON_ERROR = "#FF453A";

export function MailIcon({ color = ICON_MUTED }: { color?: string }) {
  return (
    <View
      style={{
        width: 20,
        height: 14,
        borderWidth: 1.5,
        borderColor: color,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -1,
          left: -1,
          width: 0,
          height: 0,
          borderLeftWidth: 9,
          borderRightWidth: 9,
          borderTopWidth: 6,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderTopColor: color,
        }}
      />
    </View>
  );
}

export function LockIcon({
  color = ICON_MUTED,
  size = 1,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          width: 12 * size,
          height: 7 * size,
          borderWidth: 1.5 * size,
          borderBottomWidth: 0,
          borderColor: color,
          borderTopLeftRadius: 6 * size,
          borderTopRightRadius: 6 * size,
        }}
      />
      <View
        style={{
          width: 16 * size,
          height: 11 * size,
          backgroundColor: color,
          borderRadius: 2 * size,
        }}
      />
    </View>
  );
}

export function EyeIcon({
  closed = false,
  color = ICON_MUTED,
}: {
  closed?: boolean;
  color?: string;
}) {
  return (
    <View style={{ width: 24, height: 16, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 24,
          height: 14,
          borderRadius: 7,
          borderWidth: 1.5,
          borderColor: color,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: 7,
          height: 7,
          borderRadius: 3.5,
          backgroundColor: color,
        }}
      />
      {closed && (
        <View
          style={{
            position: "absolute",
            width: 28,
            height: 1.5,
            backgroundColor: color,
            transform: [{ rotate: "-25deg" }],
          }}
        />
      )}
    </View>
  );
}

export function WarningIcon({ color = ICON_ERROR }: { color?: string }) {
  return (
    <View
      style={{
        width: 22,
        height: 20,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          width: 0,
          height: 0,
          borderLeftWidth: 11,
          borderRightWidth: 11,
          borderBottomWidth: 19,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: color,
        }}
      />
      <Text
        style={{
          color: "white",
          fontWeight: "900",
          fontSize: 11,
          lineHeight: 13,
          marginBottom: 1,
        }}
      >
        !
      </Text>
    </View>
  );
}

export function InstagramGlyph({ color = "#F5F5F7" }: { color?: string }) {
  return (
    <View
      style={{
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: color,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          borderWidth: 1.5,
          borderColor: color,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 2,
          right: 2,
          width: 3,
          height: 3,
          borderRadius: 1.5,
          backgroundColor: color,
        }}
      />
    </View>
  );
}

export function TokenIcon({ color = ICON_MUTED }: { color?: string }) {
  return (
    <View
      style={{
        width: 16,
        height: 22,
        backgroundColor: color,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 8,
          height: 1.5,
          backgroundColor: "#0F0F10",
          marginBottom: 2,
        }}
      />
      <View
        style={{
          width: 8,
          height: 1.5,
          backgroundColor: "#0F0F10",
        }}
      />
    </View>
  );
}

export function Logo({ size = 48, color = "#7FD957" }: { size?: number; color?: string }) {
  const scale = size / 48;
  const long = 15 * scale;
  const short = 10 * scale;
  const r = 4 * scale;

  return (
    <View style={{ width: size, height: size }}>
      <View
        style={{
          position: "absolute",
          top: 3 * scale,
          left: 19 * scale,
          width: short,
          height: long,
          borderRadius: r,
          backgroundColor: color,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 19 * scale,
          left: 3 * scale,
          width: long,
          height: short,
          borderRadius: r,
          backgroundColor: color,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 19 * scale,
          left: 30 * scale,
          width: long,
          height: short,
          borderRadius: r,
          backgroundColor: color,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 30 * scale,
          left: 19 * scale,
          width: short,
          height: long,
          borderRadius: r,
          backgroundColor: color,
        }}
      />
    </View>
  );
}

export function ChevronLeft({ color = "#F5F5F7" }: { color?: string }) {
  return (
    <View
      style={{
        width: 10,
        height: 10,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderColor: color,
        transform: [{ rotate: "-45deg" }],
        marginLeft: 4,
      }}
    />
  );
}
