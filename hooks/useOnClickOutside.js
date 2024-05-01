import { useEffect } from "react";

export function useOnClickOutside(ref, handler, exceptionRef) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements or the exception element
      if (!ref.current || ref.current.contains(event.target) || (exceptionRef.current && exceptionRef.current.contains(event.target))) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, exceptionRef]); // Added exceptionRef to the dependencies array
}
