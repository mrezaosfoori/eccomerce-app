import Navabr from "../../shared/Navabr";
import Products from "./Products";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="bg-slate-100  dark:bg-slate-900 text-slate-900 dark dark:text-slate-100">
      <Navabr />
      {/* <Categorybar /> */}
      <Products />
      <div>HomePage</div>
    </div>
  );
};

export default HomePage;
