import axios from "axios";

const constants:any = {
    auth: {
        login:"login",
        profile: "getProfileData",
        onDeskStaff: "getSingleStaffData",
    },
    company: {
        driver: "getDriverData",
        bus: "getBusData",
        trip: "getTripData",
    },
    filters: {
        tripFilter: ""
    },
    transaction:{
        list: "getTransactionData",
    }   
};

export default constants;
