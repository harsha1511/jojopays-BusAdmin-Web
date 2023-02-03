import axios from "axios";

const constants: any = {
  auth: {
    login: "login",
    profile: "getProfileData",
    register: "register",
    createuser: "registerCreds",
    staffList: "allStaff",
    onDeskStaff: "getSingleStaffData",
    allTransactors: "transactors",
  },
  company: {
    allData: "allData",
    driver: "allDrivers",
    bus: "allBus",
    trip: "upcommingTrips",
    assignedTrips: "assignedTrips",
    assignTrip: "assignTrips",
    createDriver: "createDriver",
  },
  filters: {
    selectbus: "getBus",
    selectpilot: "getPilot",
  },
  transaction: {
    list: "transactions",
  },
  ticketPrice: {
    autoPrice: "getAutoPriceChange",
    assignCost: "assignCost",
  },
  notification: {
    getNotification: "notifications",
  },
};

export default constants;
