import { Nav } from "./nav";
import { ScrollIndicator } from "./scroll-bar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <Nav />
      <ScrollIndicator />
    </header>
  );
};
