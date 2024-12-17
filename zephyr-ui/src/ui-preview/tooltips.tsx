import { useState } from "react";
import { ZephyrButton } from "@zephyr";
import PreviewLayout from "./layout/PreviewLayout";
import { ZepyhrTooltip, TooltipDirection } from "../../../lib/src/components/tooltip"; // Import Tooltip and TooltipDirection
import { ZephyrColors } from "../../../lib/src/foundation/colors";

function TooltipPage() {
  const [visibleTooltip, setvisibleTooltip] = useState<TooltipDirection | null>(null);
  const [tooltipText, settooltipText] = useState("Default Tooltip text here.");
  const [tooltipConfig, settooltipConfig] = useState({
    showCloseButton: false,
    showButtons: false,
    backgroundColor: "",
    textColor: "",
  });

  // Handlers for opening and closing Tooltip with different configurations
  const openTooltip = (direction: TooltipDirection, text: string, config = {}) => {
    settooltipText(text);
    settooltipConfig({ ...tooltipConfig, ...config });
    setvisibleTooltip(direction);
  };
  const closeTooltip = () => setvisibleTooltip(null);

  return (
    <PreviewLayout>
      <div className="flex flex-col items-center justify-center gap-y-4 p-5 md:p-10">
        
        {/* Tooltip Props Documentation */}
        <div className="w-full max-w-2xl mb-8">
          <h2 className="text-xl font-bold mb-4">Tooltip Props</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code>text</code>: <strong>string</strong> - Optional content text to display inside the Tooltip.
            </li>
            <li>
              <code>direction</code>: <strong>"top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"</strong> - Specifies the Tooltip's direction relative to its trigger.
            </li>
            <li>
              <code>onClose</code>: <strong>() =&gt; void</strong> - Optional handler function for closing the Tooltip.
            </li>
            <li>
              <code>onBack</code>: <strong>() =&gt; void</strong> - Optional handler function for the Back button action.
            </li>
            <li>
              <code>onNext</code>: <strong>() =&gt; void</strong> - Optional handler function for the Next button action.
            </li>
            <li>
              <code>showCloseButton</code>: <strong>boolean</strong> - Controls the visibility of the close button in the Tooltip. Defaults to <code>false</code>.
            </li>
            <li>
              <code>showButton</code>: <strong>boolean</strong> - Controls the visibility of action buttons (Back, Next) in the Tooltip. Defaults to <code>false</code>.
            </li>
            <li>
              <code>className</code>: <strong>string</strong> - Optional class name for custom styling.
            </li>
            <li>
              <code>backgroundColor</code>: <strong>string</strong> - Sets the Tooltip's background color. Accepts color names or hex codes.
            </li>
          </ul>
        </div>

        {/* Tooltip Trigger Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <ZephyrButton.primary onClick={() => openTooltip(TooltipDirection.TOP, "Tooltip coming from the top!",  {
                backgroundColor: ZephyrColors.primaryTint.s10,
                showCloseButton: false,
                showButtons: false,
                textColor: ZephyrColors.primaryTint.WH
              })}>
            Top Tooltip
          </ZephyrButton.primary>
          <ZephyrButton.primary onClick={() => openTooltip(TooltipDirection.BOTTOM, "Tooltip coming from the bottom!", {
                backgroundColor: ZephyrColors.primaryTint.s10,
                showCloseButton: false,
                showButtons: false,
                textColor: ZephyrColors.primaryTint.WH
              })}>
            Bottom Tooltip
          </ZephyrButton.primary>
          <ZephyrButton.primary onClick={() => openTooltip(TooltipDirection.LEFT, "Tooltip coming from the left!", {
                backgroundColor: ZephyrColors.primaryTint.s10,
                showCloseButton: false,
                showButtons: false,
                textColor: ZephyrColors.primaryTint.WH
              })}>
            Left Tooltip
          </ZephyrButton.primary>
          <ZephyrButton.primary onClick={() => openTooltip(TooltipDirection.RIGHT, "Tooltip appearing from the right!", {
                backgroundColor: ZephyrColors.primaryTint.s10,
                showCloseButton: false,
                showButtons: false,
                textColor: ZephyrColors.primaryTint.WH
              })}>
            Right Tooltip
          </ZephyrButton.primary>
          <ZephyrButton.primary onClick={() => openTooltip(TooltipDirection.TOP_LEFT, "Tooltip from top-left corner",  {
                backgroundColor: ZephyrColors.primaryTint.s10,
                showCloseButton: false,
                showButtons: false,
                textColor: ZephyrColors.primaryTint.WH
              })}>
            Top-Left Tooltip
          </ZephyrButton.primary>
          <ZephyrButton.primary onClick={() => openTooltip(TooltipDirection.TOP_RIGHT, "Tooltip from top-right corner", {
                backgroundColor: ZephyrColors.primaryTint.s10,
                showCloseButton: false,
                showButtons: false,
                textColor: ZephyrColors.primaryTint.WH
              })}>
            Top-Right Tooltip
          </ZephyrButton.primary>
          <ZephyrButton.primary onClick={() => openTooltip(TooltipDirection.BOTTOM_LEFT, "Tooltip from bottom-left corner", {
                backgroundColor: ZephyrColors.primaryTint.s10,
                showCloseButton: false,
                showButtons: false,
                textColor: ZephyrColors.primaryTint.WH
              })}>
            Bottom-Left Tooltip
          </ZephyrButton.primary>
          <ZephyrButton.primary onClick={() => openTooltip(TooltipDirection.BOTTOM_RIGHT, "Tooltip from bottom-right corner",  {
                backgroundColor: ZephyrColors.primaryTint.s10,
                showCloseButton: false,
                showButtons: false,
                textColor: ZephyrColors.primaryTint.WH
              })}>
            Bottom-Right Tooltip
          </ZephyrButton.primary>

          {/* New Button to show Tooltip with Close Icon, Action Buttons, and Custom Background */}
          <ZephyrButton.primary
            onClick={() =>
              openTooltip(TooltipDirection.BOTTOM, "Customized Tooltip with close icon and buttons", {
                showCloseButton: true,
                backgroundColor: ZephyrColors.primaryTint.s10,
                showButtons: true,
                textColor: ZephyrColors.primaryTint.WH
                
              })
            }
          >
            With buttons
          </ZephyrButton.primary>

          <ZephyrButton.primary
            onClick={() =>
              openTooltip(TooltipDirection.BOTTOM, "Customized Tooltip with different background color", {
                backgroundColor: "black",
                textColor: ZephyrColors.primaryTint.WH
              })
            }
          >
            Black background color
          </ZephyrButton.primary>
          <ZephyrButton.primary
            onClick={() =>
              openTooltip(TooltipDirection.BOTTOM, "Customized Tooltip with different background color and text color", {
                textColor: ZephyrColors.primaryTint.s10,
                backgroundColor: ZephyrColors.primaryTint.s70,
                showCloseButton: false,
                showButtons: false,
              })
            }
          >
            With different text color
          </ZephyrButton.primary>

        </div>

        {/* Render Tooltip with Configurations */}
        {visibleTooltip && (
          <ZepyhrTooltip
            text={tooltipText}
            direction={visibleTooltip}
            onClose={closeTooltip}
            onBack={() => console.log("Back button clicked")}
            onNext={() => console.log("Done button clicked")}
            showCloseButton={tooltipConfig.showCloseButton}
            showButton={tooltipConfig.showButtons}
            backgroundColor={tooltipConfig.backgroundColor}
            textColor={tooltipConfig.textColor}
          />
        )}
      </div>
    </PreviewLayout>
  );
}

export default TooltipPage;
