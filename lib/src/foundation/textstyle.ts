interface TextStyle {
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    fontFamily: string;
}

abstract class ZephyrTextStyle {
    abstract displaySmall: TextStyle;
    abstract headlineLarge: TextStyle;
    abstract headlineMedium: TextStyle;
    abstract headlineSmall: TextStyle;
    abstract bodyLarge: TextStyle;
    abstract bodyMedium: TextStyle;
    abstract bodySmall: TextStyle;
}

class DesktopTextStyle extends ZephyrTextStyle {
    displaySmall: TextStyle = {
        fontSize: "64px",
        lineHeight: "1.2",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    headlineLarge: TextStyle = {
        fontSize: "57px",
        lineHeight: "1.2",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    headlineMedium: TextStyle = {
        fontSize: "45px",
        lineHeight: "1.3",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    headlineSmall: TextStyle = {
        fontSize: "24px",
        lineHeight: "1.4",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    bodyLarge: TextStyle = {
        fontSize: "18px",
        lineHeight: "1.5",
        fontWeight: "400",
        fontFamily: "Cabinet Grotesk"
    };
    bodyMedium: TextStyle = {
        fontSize: "14px",
        lineHeight: "1.5",
        fontWeight: "400",
        fontFamily: "Cabinet Grotesk"
    };
    bodySmall: TextStyle = {
        fontSize: "12px",
        lineHeight: "1.5",
        fontWeight: "400",
        fontFamily: "Cabinet Grotesk"
    };
}

class TabletTextStyle extends ZephyrTextStyle {
    displaySmall: TextStyle = {
        fontSize: "45px",
        lineHeight: "1.2",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    headlineLarge: TextStyle = {
        fontSize: "36px",
        lineHeight: "1.2",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    headlineMedium: TextStyle = {
        fontSize: "32px",
        lineHeight: "1.3",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    headlineSmall: TextStyle = {
        fontSize: "24px",
        lineHeight: "1.4",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    bodyLarge: TextStyle = {
        fontSize: "18px",
        lineHeight: "1.5",
        fontWeight: "400",
        fontFamily: "Cabinet Grotesk"
    };
    bodyMedium: TextStyle = {
        fontSize: "14px",
        lineHeight: "1.5",
        fontWeight: "400",
        fontFamily: "Cabinet Grotesk"
    };
    bodySmall: TextStyle = {
        fontSize: "12px",
        lineHeight: "1.5",
        fontWeight: "400",
        fontFamily: "Cabinet Grotesk"
    };
}

class MobileTextStyle extends ZephyrTextStyle {
    displaySmall: TextStyle = {
        fontSize: "36px",
        lineHeight: "1.2",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    headlineLarge: TextStyle = {
        fontSize: "32px",
        lineHeight: "1.2",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    headlineMedium: TextStyle = {
        fontSize: "28px",
        lineHeight: "1.3",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    headlineSmall: TextStyle = {
        fontSize: "24px",
        lineHeight: "1.4",
        fontWeight: "600",
        fontFamily: "Cabinet Grotesk"
    };
    bodyLarge: TextStyle = {
        fontSize: "18px",
        lineHeight: "1.5",
        fontWeight: "400",
        fontFamily: "Cabinet Grotesk"
    };
    bodyMedium: TextStyle = {
        fontSize: "14px",
        lineHeight: "1.5",
        fontWeight: "400",
        fontFamily: "Cabinet Grotesk"
    };
    bodySmall: TextStyle = {
        fontSize: "12px",
        lineHeight: "1.5",
        fontWeight: "400",
        fontFamily: "Cabinet Grotesk"
    };
}

export class ZephyrTextStyles {
    static readonly desktop = new DesktopTextStyle();
    static readonly tablet = new TabletTextStyle();
    static readonly mobile = new MobileTextStyle();
}