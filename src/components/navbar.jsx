import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../constants/Urls";
import { replace, useNavigate } from "react-router-dom";
import { adduserdata } from "../redux/slice";

const Navbar = () => {
  const value = useSelector((state) => state.userdatakey.userdata);
  const dispatch = useDispatch();
  const name = value.firstName;
  const navigate = useNavigate();
  const logout = async () => {
    const res = await axios.post(BASE_URL + "/auth/logout", null, {
      withCredentials: true,
    });
    console.log(res.data);
    dispatch(adduserdata(""));
    navigate("/login", { replace: true });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      {/* Name */}

      <div>
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>

      {/* search div +icon */}
      {value && (
        <div className="w-1/3 flex justify-end items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto relative right-10"
          />
          <div className="relative right-4">
            Welcome {name.toLowerCase()} !!
          </div>
          <div>
            <div className="dropdown dropdown-end ">
              {/* icon */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar  right-1.5"
              >
                <div className="w-10 rounded-full ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="data:image/jpeg;base64,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"
                  />
                </div>
              </div>

              <ul
                tabIndex="-1"
                className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
