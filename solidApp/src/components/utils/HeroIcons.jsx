import { Icon } from "solid-heroicons";
import { arrowLeft } from "solid-heroicons/solid";
import { arrowRight } from "solid-heroicons/outline";
import { arrowDown } from "solid-heroicons/solid-mini";

export const HeroIcons = () => (
  <>
    <Icon path={arrowLeft} style="width: 24px; color: blue" />
    <Icon path={arrowRight} style="width: 24px; color: green" />
    <Icon path={arrowDown} style="width: 20px; color: yellow" />
  </>
);
