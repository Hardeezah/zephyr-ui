import { useState } from "react";
import { ZephyrButton, ZephyrModal } from "@zephyr";
import PreviewLayout from "./layout/PreviewLayout";

/**
 * ModalsPage component demonstrates the usage of different modal sizes and configurations
 * in the Zephyr UI library.
 */
function ModalsPage() {
  // State for controlling modal visibility
  const [isBaseModalOpen, setIsBaseModalOpen] = useState(false);
  const [isLgModalOpen, setIsLgModalOpen] = useState(false);
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);

  // Modal open/close handlers
  const openBaseModal = () => setIsBaseModalOpen(true);
  const closeBaseModal = () => setIsBaseModalOpen(false);
  const openLgModal = () => setIsLgModalOpen(true);
  const closeLgModal = () => setIsLgModalOpen(false);
  const openAutoModal = () => setIsAutoModalOpen(true);
  const closeAutoModal = () => setIsAutoModalOpen(false);

  return (
    <PreviewLayout>
      <div className="flex flex-col gap-y-4 items-center justify-center md:p-10 p-5">
        {/* Modal Props Documentation */}
        <div className="w-full max-w-2xl mb-8">
          <h2 className="text-xl font-bold mb-4">Modal Props</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code>isOpen</code>: boolean - Controls modal visibility
            </li>
            <li>
              <code>onClose</code>: () {"=>"} void - Handler for closing the
              modal
            </li>
            <li>
              <code>size</code>: "base" | "lg" | undefined - Controls modal size
              (defaults to auto)
            </li>
          </ul>
        </div>

        {/* Modal Trigger Buttons */}
        <ZephyrButton.primary onClick={openBaseModal}>
          Open Base Modal
        </ZephyrButton.primary>
        <ZephyrButton.primary onClick={openLgModal}>
          Open Large Modal
        </ZephyrButton.primary>
        <ZephyrButton.primary onClick={openAutoModal}>
          Open Auto Modal
        </ZephyrButton.primary>

        {/* Base Size Modal Example */}
        <ZephyrModal.default
          isOpen={isBaseModalOpen}
          onClose={closeBaseModal}
          size={"base"}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Base Modal Content</h2>
            <p>This is the content of the base modal.</p>
            <ZephyrButton.primary onClick={closeBaseModal}>
              Close Base Modal
            </ZephyrButton.primary>
          </div>
        </ZephyrModal.default>

        {/* Large Size Modal Example */}
        <ZephyrModal.default
          isOpen={isLgModalOpen}
          onClose={closeLgModal}
          size={"lg"}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Large Modal Content</h2>
            <p>This is the content of the large modal.</p>
            <ZephyrButton.primary onClick={closeLgModal} className="mt-4">
              Close Large Modal
            </ZephyrButton.primary>
          </div>
        </ZephyrModal.default>

        {/* Auto Size Modal Example */}
        <ZephyrModal.default isOpen={isAutoModalOpen} onClose={closeAutoModal}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Auto Modal Content</h2>
            <p>This is the content of the auto modal.</p>
            <ZephyrButton.primary onClick={closeAutoModal} className="mt-4">
              Close Auto Modal
            </ZephyrButton.primary>
          </div>
        </ZephyrModal.default>
      </div>
    </PreviewLayout>
  );
}

export default ModalsPage;
