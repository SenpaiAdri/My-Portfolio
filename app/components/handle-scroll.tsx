import { useLenis } from "./smooth-scroll";

export const HandleScroll = (id: string) => {
  const lenis = useLenis();
  return (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(id);
    }
  };
};