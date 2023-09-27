import React from "react";
import { useTheme } from "../DataContext";
import Switch from "react-switch";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav
        className={`navbar ${
          theme === "light" ? "navbar-light" : "navbar-dark"
        } bg-${theme}`}
      >
        <div className="container d-flex align-items-center">
          <span
            style={{ fontWeight: "bold", fontSize: "30px" }}
            class="navbar-brand mb-0 h1"
          >
            {" "}
            <span style={{ color: "#D3445A" }}>Book</span>store
          </span>

          <span>
            <label style={{ marginRight: "20px" }}>
              <Switch onChange={toggleTheme} checked={theme === "dark"} />
            </label>

            <a
              href="#"
              className={`avatar-link ${
                theme === "light" ? "text-dark" : "text-light"
              }`}
            >
              <img
                src="https://i.ibb.co/WFcCQZT/IMG-7379.png"
                alt="Avatar"
                class="avatar-nav"
              />
              Minh Thành
            </a>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Nav;
