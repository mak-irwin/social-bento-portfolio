"use client";

// Externals.
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

// Props.
interface Props extends LinkProps {
  href: string;
  children: ReactNode;
}

// TransitionLink.tsx
export const TransitionLink = ({ href, children, ...props }: Props) => {
  const router = useRouter();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(250);
    router.push(href);
    await sleep(250);
    body?.classList.remove("page-transition");
  };

  // Render.
  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
