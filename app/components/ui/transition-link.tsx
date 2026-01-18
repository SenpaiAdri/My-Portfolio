"use client";

import Link, { LinkProps } from "next/link";
import { useTransition } from "../page-transition";
import { useRouter } from "next/navigation";
import React, { forwardRef } from "react";
import { useLenis } from "../smooth-scroll";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ children, href, ...props }, ref) => {
    const router = useRouter();
    const { triggerTransition } = useTransition();
    const lenis = useLenis();

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      // Check if it's a hash link or same page
      if (href.startsWith("#")) {
        e.preventDefault();
        lenis?.scrollTo(href);
        return;
      }

      // Check if external link
      if (href.startsWith("http")) {
        return;
      }

      e.preventDefault();
      triggerTransition(() => {
        router.push(href);
      });
    };

    return (
      <Link {...props} href={href} onClick={handleClick} ref={ref}>
        {children}
      </Link>
    );
  }
);

TransitionLink.displayName = "TransitionLink";
