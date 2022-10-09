import { Navbar } from "../components/Navbar";
import { ProgressSection } from "../components/ProgressSection";

const HomeScreen = () => {
  return (
    <>
      <header id="header-home">
        <div className="container">
          <Navbar />
          <HeaderContent />
        </div>
        <div className="spacer red-stacked-layer"></div>
      </header>
      <ProgressSection />
    </>
  );
};

const HeaderContent = () => {
  return (
    <>
      <div class="header-content text-center">
        <h1>10000 HOURS</h1>
        <h2>Starts Here</h2>
      </div>
    </>
  );
};

export { HomeScreen };
