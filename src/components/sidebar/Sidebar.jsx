import "./sidebar.css";
import {
  LineStyle,
  PermIdentity
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BuildIcon from '@mui/icons-material/Build';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SettingsIcon from '@mui/icons-material/Settings';



export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="sidebarComponents">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            
            <Link to="/users" className="sidebarComponents">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Customer
              </li>
            </Link>
            <Link to="/Purchaseslist" className="sidebarComponents">
              <li className="sidebarListItem">
                <ShoppingCartIcon className="sidebarIcon" />
                Purchases
              </li>
            </Link>
            <Link to="/Saleslist" className="sidebarComponents">
              <li className="sidebarListItem">
                <AttachMoneyIcon className="sidebarIcon" />
                Sales
              </li>
            </Link>
            <Link to="/Repair" className="sidebarComponents">
              <li className="sidebarListItem">
                <BuildIcon className="sidebarIcon" />
                Repair Vehicle
              </li>
            </Link>
            <Link to="/Services" className="sidebarComponents">
              <li className="sidebarListItem">
                <MiscellaneousServicesIcon className="sidebarIcon" />
                Services
              </li>
            </Link>
            <Link to="/Settings" className="sidebarComponents">
              <li className="sidebarListItem">
                <SettingsIcon className="sidebarIcon" />
                Settings
              </li>
            </Link>

            

          </ul>
        </div>
     

      
      </div>
    </div>
  );
}
