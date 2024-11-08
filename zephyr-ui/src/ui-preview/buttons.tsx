import { ZephyrButton } from "@zephyr";
import PreviewLayout from "./layout/PreviewLayout";

function ButtonsPage() {
  return (
    <PreviewLayout>
      <div className="flex flex-col gap-y-8 items-center justify-center md:p-10 p-5">
        {/* Button Props Documentation */}
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-bold mb-4">Button Props</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code>size</code>: "lg" | "base" - Controls button size
            </li>
            <li>
              <code>loading</code>: boolean - Shows loading spinner
            </li>
            <li>
              <code>disabled</code>: boolean - Disables button interaction
            </li>
          </ul>
        </div>

        {/* Primary Buttons */}
        <div className="w-full max-w-2xl">
          <h3 className="text-lg font-semibold mb-4">Primary Buttons</h3>
          <div className="flex flex-col gap-4">
            <ZephyrButton.primary loading size="lg">
              Large Loading Button
            </ZephyrButton.primary>
            <ZephyrButton.primary size="base">
              Base Size Button
            </ZephyrButton.primary>
            <ZephyrButton.primary>Full Width Button</ZephyrButton.primary>
            <ZephyrButton.primary disabled>
              Disabled Button
            </ZephyrButton.primary>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="w-full max-w-2xl">
          <h3 className="text-lg font-semibold mb-4">Secondary Buttons</h3>
          <div className="flex flex-col gap-4">
            <ZephyrButton.secondary loading size="lg">
              Large Loading Button
            </ZephyrButton.secondary>
            <ZephyrButton.secondary size="base">
              Base Size Button
            </ZephyrButton.secondary>
            <ZephyrButton.secondary>Full Width Button</ZephyrButton.secondary>
            <ZephyrButton.secondary disabled>
              Disabled Button
            </ZephyrButton.secondary>
          </div>
        </div>
      </div>
    </PreviewLayout>
  );
}

export default ButtonsPage;
