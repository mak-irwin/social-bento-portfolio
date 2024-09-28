"use client";

// Components.
import { Button } from "@/components/Button/Button";

// Icons.
import { FiFileText } from "react-icons/fi";

// ResumeButton.tsx
export const ResumeButton = () => {
  return (
    <Button
      Icon={FiFileText}
      variant="secondary"
      onClick={() => window.open("/mckenzie-irwin-resume.pdf", "_blank")}
    >
      View Resume
    </Button>
  );
};
