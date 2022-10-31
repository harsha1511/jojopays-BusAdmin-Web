import { MdAssignmentInd, MdPerson } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BiBus, BiWallet } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { IconType } from "react-icons";

const links: {
  title: string;
  Icon: IconType;
  to: string;
  active: string;
}[] = [
  {
    title: "Assign Drivers",
    Icon: MdAssignmentInd,
    to: "/assign-drivers",
    active: "assign-drivers",
  },
  {
    title: "Ticket Price",
    Icon: FaTicketAlt,
    to: "/ticket-price",
    active: "ticket-price",
  },
  { title: "Chats", Icon: HiOutlineChatAlt2, to: "/chats", active: "chats" },
  { title: "Wallet", Icon: BiWallet, to: "/wallet", active: "wallet" },
  {
    title: "Notifications",
    Icon: IoMdNotificationsOutline,
    to: "/notifications",
    active: "notifications",
  },
  { title: "Bus", Icon: BiBus, to: "/bus", active: "bus" },
  { title: "Drivers", Icon: MdPerson, to: "/drivers", active: "drivers" },

  { title: "Profile", Icon: ImProfile, to: "/profile", active: "profile" },
];

export default links;
