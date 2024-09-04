"use client";

import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

// getdailygift page

export default function Home() {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.origin === "https://test.todaydealspro.com") {
        console.log("Message from iframe:", event.data);
        if (event.data === "closePage") {
          setisOpen(false);
        }
      }
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Button onClick={() => setisOpen(true)}>click me2</Button>
      <Modal
        size="full"
        isOpen={isOpen}
        // onClose={() => setisOpen(false)}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 0,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <iframe
                referrerPolicy="no-referrer"
                style={{ width: "100vw", height: "100vh" }}
                src="https://test.todaydealspro.com/v3/landing/index?userid=stonetest6_a_f&language=en&timezone=America/Chicago&appid=0fd4b145c5e34a17a6f1204be9b0cb21"
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
