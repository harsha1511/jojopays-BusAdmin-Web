import axios from "axios";

const constants: any = {
  auth: {
    login: "login",
    profile: "getProfileData",
    register: "register",
    createuser: "registerCreds",
    onDeskStaff: "getSingleStaffData",
  },
  company: {
    driver: "allDrivers",
    bus: "allBus",
    trip: "upcommingTrips",
  },
  filters: {
    selectbus: "getBus",
    selectpilot: "getPilot",
  },
  transaction: {
    list: "getTransactionData",
  },
  ticketPrice: {
    autoPrice: "getAutoPriceChange",
  },
};

export default constants;
