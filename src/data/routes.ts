import AssignDrivers from "../pages/AssignDrivers/AssignDrivers";
import Chats from "../pages/Chats/Chats";
import TicketPrice from "../pages/TicketPrice/TicketPrice";
import Wallet from "../pages/Wallet/Wallet";
import Notifications from "../pages/Notifications/Notifications";
import Bus from "../pages/Bus/Bus";
import Drivers from "../pages/Driver/Driver";
import Profile from "../pages/Profile/Profile";
import DriverInfo from "../pages/Driver/components/DriverInfo";
import DriverCreds from "../pages/Driver/components/DriverCreds";
import DriverCredsConfirm from "../pages/Driver/components/DriverCredsConfirm";
import UpdateDriver from "../pages/Driver/components/UpdateDriver";
import PreviousTrips from "../pages/Driver/components/PreviousTrips";
import UpcomingTrips from "../pages/Driver/components/UpcomingTrips";
import ViewTrips from "../pages/Driver/components/ViewTrips";
import AddDriver from "../pages/Driver/components/AddDriver";
import EditProfile from "../pages/Profile/pages/EditProfile";
import { StaffProfile } from "../pages/Profile/pages/StaffProfile";
import { Ratings } from "../pages/Profile/pages/Ratings";
import { EditStaffProfile } from "../pages/Profile/pages/EditStaffProfile";
import AddNewLogin from "../pages/Profile/pages/AddNewStaff";
import AssignTask from "../pages/Profile/pages/AssignTask";
import CreateLogin from "../pages/Profile/pages/CreateLogin";
import Loader from "../components/Loader";

const routes: { path: string; Element: () => JSX.Element }[] = [
  { path: "/assign-drivers", Element: AssignDrivers },
  { path: "/chats", Element: Chats },
  { path: "/ticket-price", Element: TicketPrice },
  { path: "/wallet", Element: Wallet },
  { path: "/notifications", Element: Notifications },
  { path: "/bus", Element: Bus },
  { path: "/drivers", Element: Drivers },
  { path: "/profile", Element: Profile },
  { path: "/driver-info", Element: DriverInfo },
  { path: "/update-driver", Element: UpdateDriver },
  { path: "/upcoming-trips", Element: UpcomingTrips },
  { path: "/previous-trips", Element: PreviousTrips },
  { path: "/view-trips", Element: ViewTrips },
  { path: "/add-driver", Element: AddDriver },
  { path: "/driver-creds", Element: DriverCreds },
  { path: "/add-drivers", Element: AddDriver },
  { path: "/driver-creds-confirm", Element: DriverCredsConfirm },
  { path: "/edit-profile", Element: EditProfile},
  {path: "/staff-profile", Element: StaffProfile},
  {path: "/edit-staff-profile", Element:EditStaffProfile},
  {path: "/rating", Element: Ratings},
  {path: "/add-new-staff", Element: AddNewLogin},
  {path: "/assign-task", Element: AssignTask},
  {path: "/create-login", Element: CreateLogin},
  {path: "/loader", Element:Loader}
];

export default routes;
