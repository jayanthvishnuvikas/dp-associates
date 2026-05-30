import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            target.classList.add("in");
            target.dataset.revealed = "true";
            io.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    // Function to observe reveal elements
    const observeElements = (root: ParentNode) => {
      const els = root.querySelectorAll<HTMLElement>(".reveal");
      els.forEach((el) => {
        if (el.dataset.revealed === "true") {
          el.classList.add("in");
        } else {
          io.observe(el);
        }
      });
    };

    // Observe initial elements
    observeElements(document);

    // Mutation observer to handle dynamic additions and class resets by React
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.type === "childList") {
          m.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              if (node.classList.contains("reveal")) {
                if (node.dataset.revealed === "true") {
                  node.classList.add("in");
                } else {
                  io.observe(node);
                }
              }
              observeElements(node);
            }
          });
        } else if (m.type === "attributes" && m.attributeName === "class") {
          const target = m.target as HTMLElement;
          if (
            target.classList.contains("reveal") &&
            target.dataset.revealed === "true" &&
            !target.classList.contains("in")
          ) {
            target.classList.add("in");
          }
        }
      });
    });

    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
