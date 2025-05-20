import { Button } from "@/components/ui/button";
import styles from "./Styles.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import Cookies from "js-cookie";

const index = ({ username }: { username: String }) => {
  const { mutate: signOut } = useSignOutAccount();
  const navigate = useNavigate();

  return (
    /* From Uiverse.io by gharsh11032000 */
    <div className={styles.menu}>
      <div className={styles.item}>
        <a href="#" className={styles.link}>
          <img
            src="/assets/icons/profile.jpg"
            alt=""
            className=" w-12 h-12 rounded-full  "
          />
          {/* <span> {username}</span>
          <svg viewBox="0 0 360 360">
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>
            </g>
          </svg> */}
        </a>
        <div className={styles.submenu}>
          <div className={styles.submenu_item}>
            <a href="#" className={styles.submenu_link}>
              {" "}
              Development{" "}
            </a>
          </div>
          <div className={styles.submenu_item}>
            <a href="#" className={styles.submenu_link}>
              {" "}
              Design{" "}
            </a>
          </div>
          <div className={styles.submenu_item}>
            <a href="#" className={styles.submenu_link}>
              <Link to={"./sign-up"}>Sign Up</Link>
            </a>
          </div>
          <div className={styles.submenu_item}>
            <Button
              className="flex gap-2 bg-transparent hover:bg-transparent  mx-auto"
              onClick={() => {
                Cookies.remove("authToken");
                navigate("/sign-in");
              }}>
              <p className="text-[18px] font-bold text-[#FA3636]">Sign Out</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
