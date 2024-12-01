import { TransitionLink } from "@/components/TransitionLink/TransitionLink";

export default function NotFound() {
  return (
    <div>
      <h2 style={{ marginBottom: "12px" }}>Sorry, this page doesn&apos;t exist. 😔</h2>
      <TransitionLink href="/" playSound={false}>
        Return
      </TransitionLink>
    </div>
  );
}
