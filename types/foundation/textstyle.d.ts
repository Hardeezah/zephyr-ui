interface TextStyle {
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    fontFamily: string;
}
declare abstract class ZephyrTextStyle {
    abstract displaySmall: TextStyle;
    abstract headlineLarge: TextStyle;
    abstract headlineMedium: TextStyle;
    abstract headlineSmall: TextStyle;
    abstract bodyLarge: TextStyle;
    abstract bodyMedium: TextStyle;
    abstract bodySmall: TextStyle;
}
declare class DesktopTextStyle extends ZephyrTextStyle {
    displaySmall: TextStyle;
    headlineLarge: TextStyle;
    headlineMedium: TextStyle;
    headlineSmall: TextStyle;
    bodyLarge: TextStyle;
    bodyMedium: TextStyle;
    bodySmall: TextStyle;
}
declare class TabletTextStyle extends ZephyrTextStyle {
    displaySmall: TextStyle;
    headlineLarge: TextStyle;
    headlineMedium: TextStyle;
    headlineSmall: TextStyle;
    bodyLarge: TextStyle;
    bodyMedium: TextStyle;
    bodySmall: TextStyle;
}
declare class MobileTextStyle extends ZephyrTextStyle {
    displaySmall: TextStyle;
    headlineLarge: TextStyle;
    headlineMedium: TextStyle;
    headlineSmall: TextStyle;
    bodyLarge: TextStyle;
    bodyMedium: TextStyle;
    bodySmall: TextStyle;
}
export declare class ZephyrTextStyles {
    static readonly desktop: DesktopTextStyle;
    static readonly tablet: TabletTextStyle;
    static readonly mobile: MobileTextStyle;
}
export {};
