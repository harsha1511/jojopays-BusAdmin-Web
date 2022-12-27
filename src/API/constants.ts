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
    driver: "getDriverData",
    bus: "getBusData",
    trip: "getTripData",
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
