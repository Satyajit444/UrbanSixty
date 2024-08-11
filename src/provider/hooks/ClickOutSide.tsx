import { useEffect, useRef } from "react";
import { debounce } from "lodash";
/**
 * This hook is used to close a window or element when clicking outside of it, conditionally based on a custom trigger function.
 */

const useClickOutside = (
  handler: () => void,
  options?: {
    events?: string[];
    delay?: number;
    refs?: React.RefObject<HTMLElement>[];
    customCondition?: (event: Event) => boolean;
    enabled?: boolean;
  }
) => {
  const defaultOptions = {
    events: ["mousedown", "touchstart"],
    delay: 100,
    refs: [],
    customCondition: null,
    enabled: true,
  };

  const { events, delay, refs, customCondition, enabled } = {
    ...defaultOptions,
    ...options,
  };
  const internalRef = useRef<HTMLDivElement>(null);
  const combinedRefs = [internalRef, ...refs];

  useEffect(() => {
    if (!enabled) return;

    const listener = debounce((event: Event) => {
      if (customCondition && !customCondition(event)) return;

      if (
        !combinedRefs.some((ref) => ref.current?.contains(event.target as Node))
      ) {
        handler();
      }
    }, delay);

    events.forEach((event) => document.addEventListener(event, listener));

    return () => {
      events.forEach((event) => document.removeEventListener(event, listener));
    };
  }, [handler, events, delay, customCondition, enabled, combinedRefs]);

  return internalRef;
};

export default useClickOutside;

// ----------- USE CASE

// const modalRef = useClickOutside(() => setIsOpen(false), {    // update the state to false
//   events: ['mousedown', 'touchstart'],
//   delay: 200,
//   customCondition: (event) => {
//     const target = event.target as Element;
//     return !target.classList.contains('ignore-outside-click');
//   },
//   enabled: true,
// });
