import { useEffect, useRef } from "react";
export default function useEffectOnce(effect) {
  useEffect(() => {
    effect();
  }, []); // empty dependency array ensures the effect runs only once, on component mount
}