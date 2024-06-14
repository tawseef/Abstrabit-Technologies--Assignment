// import Logo from "../../asset/logo.svg";
// import "./navbar.style.css";
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// function Navbar() {
//   return (
//     <div className="navbarWrapper">
//       <div className="navImage">
//         <img src={Logo} alt="not found" />
//       </div>
//       <div className="navMenu">
//         <div>Dashboard</div>
//         <div>FAQs</div>
//         <div>Support</div>
//         <div className="userIcon">
//           <i className="pi pi-user" style={{ color: "#4A4ED4" }}></i>
//           <i className="pi pi-angle-down" style={{ color: "#4A4ED4" }}></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import Logo from "../../asset/logo.svg";
import "./navbar.style.css";
import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, {
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/index";
import ProfileIcon from "../../asset/Profile.svg";
import TransactionIcon from "../../asset/Transaction.svg";
import LogoutIcon from "../../asset/Logout.svg";
import FdIcon from "../../asset/FDs.svg";
import MailIcon from "../../asset/email.svg";
import PhoneIcon from "../../asset/phone.svg";

function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="navImage">
        <img src={Logo} alt="not found" />
      </div>
      <div className="navMenu">
        <div>Dashboard</div>
        <div>FAQs</div>
        {/* <div>Support</div> */}
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <div {...bindTrigger(popupState)}>Support</div>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                  <img className="menuIcon" src={MailIcon} alt="Not Found" />{" "}
                  <span className="color">
                    +91 88777 37777 <br /> +91 88777 5666
                  </span>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <img className="menuIcon" src={PhoneIcon} alt="Not Found" />
                  <span className="color">
                    support@silverbullet.in <br />
                    info@silverbullet.in{" "}
                  </span>
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>

        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <div className="userIcon" {...bindTrigger(popupState)}>
                <i className="pi pi-user" style={{ color: "#4A4ED4" }}></i>
                <i
                  className="pi pi-angle-down"
                  style={{ color: "#4A4ED4" }}
                ></i>
              </div>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                  <img className="menuIcon" src={ProfileIcon} alt="Not Found" />{" "}
                  My Profile
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <img className="menuIcon" src={FdIcon} alt="Not Found" />
                  My FDs
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <img
                    className="menuIcon"
                    src={TransactionIcon}
                    alt="Not Found"
                  />
                  My Transactions
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <img className="menuIcon" src={LogoutIcon} alt="Not Found" />
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </div>
  );
}

export default Navbar;
