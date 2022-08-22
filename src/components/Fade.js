import { FadeIn } from "react-slide-fade-in";
import { animation_delay, positionOffset } from "../css/Globalvar";

export default function Fade({ children, direction }) {
  return (
    <FadeIn
      from={direction}
      positionOffset={positionOffset}
      delayInMilliseconds={animation_delay}
    >
      {children}
    </FadeIn>
  );
}
