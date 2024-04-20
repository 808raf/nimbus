import { ModeToggle } from "./ui/light-dark-toggle";

const Header = () => {
  return (
    <div className="flex items-center align-center justify-end p-1 bg-primary-foreground">
      <h1 className="flex flex-auto justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Nimbus.
      </h1>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};
export default Header;
