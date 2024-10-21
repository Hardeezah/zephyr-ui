import React, { useState } from "react";
import Button from "./components/button";
import Modal from "./components/modal";

function App() {
  const [isBaseModalOpen, setIsBaseModalOpen] = useState(false);
  const [isLgModalOpen, setIsLgModalOpen] = useState(false);
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);

  const openBaseModal = () => setIsBaseModalOpen(true);
  const closeBaseModal = () => setIsBaseModalOpen(false);
  const openLgModal = () => setIsLgModalOpen(true);
  const closeLgModal = () => setIsLgModalOpen(false);
  const openAutoModal = () => setIsAutoModalOpen(true);
  const closeAutoModal = () => setIsAutoModalOpen(false);

  return (
    <div className="flex flex-col gap-y-4 items-center justify-center md:p-10 p-5 bg-red-500">
      <Button onClick={openBaseModal}>Open Base Modal</Button>
      <Button onClick={openLgModal}>Open Large Modal</Button>
      <Button onClick={openAutoModal}>Open Auto Modal</Button>
      <Button loading size="lg">
        Button
      </Button>
      <Button size="base">Button</Button>
      <Button fullWidth>Button</Button>
      <Button disabled>Button</Button>

      <Button variant={"secondary"}>Button</Button>
      <Button loading size="lg" variant={"secondary"}>
        Button
      </Button>
      <Button size="base" variant={"secondary"}>
        Button
      </Button>
      <Button fullWidth variant={"secondary"}>
        Button
      </Button>
      <Button disabled variant={"secondary"}>
        Button
      </Button>

      <Modal isOpen={isBaseModalOpen} onClose={closeBaseModal} size={"base"}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Base Modal Content</h2>
          <p>This is the content of the base modal.</p>
          <Button onClick={closeBaseModal} className="mt-4">
            Close Base Modal
          </Button>
        </div>
      </Modal>

      <Modal isOpen={isLgModalOpen} onClose={closeLgModal} size={"lg"}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Large Modal Content</h2>
          <p>This is the content of the large modal.</p>
          <Button onClick={closeLgModal} className="mt-4">
            Close Large Modal
          </Button>
        </div>
      </Modal>

      <Modal isOpen={isAutoModalOpen} onClose={closeAutoModal}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Auto Modal Content</h2>
          <p>This is the content of the auto modal.</p>
          <Button onClick={closeAutoModal} className="mt-4">
            Close Auto Modal
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
