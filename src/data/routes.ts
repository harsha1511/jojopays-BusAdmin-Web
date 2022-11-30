import AssignDrivers from "../pages/AssignDrivers/AssignDrivers";
import Chats from "../pages/Chats/Chats";
import TicketPrice from "../pages/TicketPrice/TicketPrice";
import Wallet from "../pages/Wallet/Wallet";
import Notifications from "../pages/Notifications/Notifications";
import  Bus from "../pages/Bus/Bus";
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
import { AssignTrip } from "../pages/AssignDrivers/pages/AssignTrip";
import { TravelRoute } from "../pages/AssignDrivers/pages/TravelRoute";
import { AssignTime } from "../pages/AssignDrivers/pages/AssignTime";
import { EditAssignedTrip } from "../pages/AssignDrivers/pages/EditAssignedTrip";
import { OneTimeTrip } from "../pages/AssignDrivers/pages/OneTimeTrip";
import { SendAmount } from "../pages/Wallet/pages/SendAmount";
import { Send } from "../pages/Wallet/pages/Send";
import { PilotsTransaction } from "../pages/Wallet/pages/PilotsTransaction";
import { ScheduleSend } from "../pages/Wallet/pages/ScheduleSend";
import { TopupWallet } from "../pages/Wallet/pages/TopupWallet";
import { Withdraw } from "../pages/Wallet/pages/Withdraw";
import { AddNewSchedule } from "../pages/Wallet/pages/AddNewSchedule";
import { ScheduleAmount } from "../pages/Wallet/pages/ScheduleAmount";
import { ScheduleDate } from "../pages/Wallet/pages/ScheduleDate";
import { ScheduleConfirm } from "../pages/Wallet/pages/ScheduleConfirm";
import DriverLogin from "../pages/Driver/components/DriverLogin";
import Driverpswd from "../pages/Driver/components/Driverpswd";
import Driverdetail from "../pages/Driver/components/Driverdetail";
import { Driverrating } from "../pages/Driver/components/Driverrating";
import Tripdetails from "../pages/Driver/components/Tripdetails";
import Drivercomment from "../pages/Driver/components/Drivercomment";
import Newbuscreate from "../pages/Bus/components/Newbuscreate";
import Busviewdetails from "../pages/Bus/components/Busviewdetails";
import Tripstatus from "../pages/Bus/components/Tripstatus";
import { BusInfo } from "../pages/Bus/components/BusInfo";
import Generateqr from "../pages/Bus/components/Generateqr";
import Createnewqr from "../pages/Bus/components/Createnewqr";
import Busqr from "../pages/Bus/components/Busqr";
import Rfid from "../pages/Bus/components/Rfid";
import BusSeats from "../pages/Bus/components/BusSeats";

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
  {path: "/loader", Element:Loader},
  {path: "/assign-trip", Element:AssignTrip},
  {path: "/travel-route", Element: TravelRoute},
  {path: "/assign-time", Element:AssignTime},
  {path: "/edit-assigned-trip", Element: EditAssignedTrip},
  {path: "/onetime-trip", Element:OneTimeTrip},
  {path: "/send", Element:Send},
  {path: "/pilots-transactions", Element:PilotsTransaction},
  {path: "/schedule-send", Element:ScheduleSend},
  {path:"/topup-wallet", Element:TopupWallet},
  {path:"/withdraw", Element:Withdraw},
  {path: "/send-amount" , Element:SendAmount},
  {path: '/add-new-schedule' , Element:AddNewSchedule},
  {path: "/schedule-amount" , Element:ScheduleAmount},
  {path: "/schedule-date", Element:ScheduleDate},
  {path:"/schedule-confirm", Element:ScheduleConfirm}, 
  {path: "/Driver-login", Element: DriverLogin},
  {path:"/Driver-pswd", Element: Driverpswd},
  {path:"/Driver-detail", Element: Driverdetail},
  {path:"/Driver-rating", Element: Driverrating},
  {path:"/Driver-upcomingtrip", Element: UpcomingTrips},
  {path:"/Driver-Tripdetails", Element: Tripdetails},
  {path:"/Driver-comment", Element: Drivercomment},
  {path:"/Bus-newbuscreate", Element: Newbuscreate},
  {path:"/bus-viewdetails", Element: Busviewdetails},
  {path:"/bus-tripstatus", Element: Tripstatus},
  {path:"/bus-icon", Element: BusInfo},
  {path:"/bus-generateqr", Element:Generateqr },
  {path:"/createnew-qr", Element: Createnewqr},
  {path:"/bus-detailsqr", Element: Busqr},
  {path:"/bus-rfidqr", Element:Rfid},
  {path:"/bus-seat", Element:BusSeats},
];

export default routes;
