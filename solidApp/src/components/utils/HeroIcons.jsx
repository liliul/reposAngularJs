import { Icon } from "solid-heroicons";
import { arrowLeft } from "solid-heroicons/solid";
import { arrowRight } from "solid-heroicons/outline";
import { arrowDown } from "solid-heroicons/solid-mini";

export const HeroIcons = () => (
  <>
    <Icon path={arrowLeft} style="width: 24px; color: purple" />
    <Icon path={arrowRight} style="width: 24px; color: tomato" />
    <Icon path={arrowDown} style="width: 20px; color: #DDD" />
  </>
);
