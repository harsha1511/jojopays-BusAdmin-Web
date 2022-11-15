import React, { useCallback, useState } from "react";
import { BsFillVolumeUpFill, BsSearch, BsVolumeMuteFill } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";
import * as yup from "yup";

import CustomForm from "../../components/Form";
import Logins from "./components/Logins";
import Pilots from "./components/Pilots";
import AllNotifications from "./components/AllNotifications";
import Money from "./components/Money";

const dayFilter = [
  {
    label: "Days",
    button: "All",
  },
  {
    label: "From",
    button: "date",
  },
  {
    label: "To",
    button: "date",
  },
];

const searchSchema = yup.object().shape({
  search: yup.string().max(100),
});

const messageTypes = ["All", "Seen", "Unseen"];
const downloadTypes = [RiFileExcel2Fill, AiOutlineFilePdf];
const notificationTypes = [
  { label: "All", value: "all" },
  { label: "Money", value: "money" },
  { label: "From Pilot", value: "pilot" },
  { label: "Logins", value: "logins" },
];

const Notifications = () => {
  const [showType, setShowType] = useState("all");

  const handleSearch = (values: any) => {
    console.log(values);
  };

  const renderNotificationTypes = useCallback(() => {
    switch (showType) {
      case "all":
        return <AllNotifications />;
      case "money":
        return <Money />;
      case "pilot":
        return <Pilots />;
      case "logins":
        return <Logins />;
      default:
        return null;
    }
  }, [showType]);

  return (
    <div className="w-[96vw]">
      <section className="bg-secondary h-44 p-4" id="search-and-filter">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-7">
            <CustomForm
              initialValues={{ search: "" }}
              validationSchema={searchSchema}
              onSubmit={handleSearch}
            >
              <div className="flex items-center border-2 border-primaryText rounded-full px-3 w-[500px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none py-2 px-4 text-white outline-none w-full"
                />
                <button type="submit">
                  <BsSearch className="text-primaryText" />
                </button>
              </div>
            </CustomForm>
            <div className="bg-quaternary p-3.5 rounded flex items-center gap-3">
              <button type="button" className="hover:text-primaryText">
                <FaSortAmountDownAlt fontSize="1.2rem" />
              </button>
              <button type="button" className="hover:text-primaryText">
                <FaSortAmountUpAlt fontSize="1.2rem" />
              </button>
            </div>
            <div className="bg-quaternary py-2 px-4 rounded flex items-center gap-4 text-sm">
              {dayFilter.map(({ label, button }) => (
                <label className="flex items-center gap-2 ">
                  <span className="font-bold">{label}</span>
                  {button === "All" ? (
                    <span className="text-primaryText bg-primary rounded px-4 py-2">
                      All
                    </span>
                  ) : (
                    <span className="relative mr-5">
                      <input
                        type="date"
                        className="datepicker-input bg-primary px-2 py-2 text-sm rounded"
                      />
                    </span>
                  )}
                </label>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="bg-quaternary p-3.5 rounded flex items-center gap-4 text-sm">
              {messageTypes.map((type) => (
                <button
                  type="button"
                  className="hover:text-primaryText bg-primary rounded px-4 py-2"
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 text-primaryText">
              <input type="range" />
              {true ? <BsFillVolumeUpFill /> : <BsVolumeMuteFill />}
            </div>
            <div className="bg-quaternary p-3.5 rounded flex items-center gap-4">
              {downloadTypes.map((Icon) => (
                <button
                  type="button"
                  className="hover:text-primaryText bg-primary rounded-lg px-4 py-2.5"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 w-[98%]">
        <div className="bg-primary -mt-16 p-3 w-96 rounded-lg mb-2">
          <div className="bg-tertiary  flex items-center justify-center gap-4 p-4 rounded-lg">
            {notificationTypes.map(({ label, value }) => (
              <p
                className={`hover:text-primaryText ${
                  showType === value
                    ? "underline underline-offset-8 decoration-primaryText	"
                    : ""
                }`}
                onClick={() => setShowType(value)}
              >
                {label}
              </p>
            ))}
          </div>
        </div>
        {renderNotificationTypes()}
      </section>
      
    </div>
  );
};

export default Notifications;
