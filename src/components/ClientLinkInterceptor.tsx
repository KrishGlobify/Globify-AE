"use client";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function ClientLinkInterceptor({ containerId }: { containerId: string }) {
  const navigate = useRouter();
  
  const handleContentClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[data-internal]') as HTMLAnchorElement | null;
    if (anchor) {
      e.preventDefault();
      navigate.push(anchor.getAttribute('href') || '/');
    }
  }, [navigate]);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      container.addEventListener('click', handleContentClick);
      return () => container.removeEventListener('click', handleContentClick);
    }
  }, [handleContentClick, containerId]);

  return null;
}
