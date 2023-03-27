import UserForm from "../Components/UserForm/UserForm";
import UserTable from "../Components/UserTable/UserTable";
import UserCards from "../Components/UserCards/UserCards";
import { Stack } from "@mui/material";
import { useState } from "react";

const UserInfo = (props) => {
  const { currentPage } = props;
  const [userData, setUserData] = useState([]);

  let currentTab = <div><UserForm userData={userData} setUserData={setUserData} /></div>;

  if (currentPage === "UserEnter") {
    currentTab = (
      <div>
        <UserForm userData={userData} setUserData={setUserData} />
      </div>
    );
  } else if (currentPage === "UserCards") {
    currentTab = (
      <div>
        <UserCards userData={userData} />
      </div>
    );
  } else if (currentPage === "UserTable") {
    currentTab = (
      <div>
        <UserTable userData={userData} />
      </div>
    );
  }

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {currentTab}
      </Stack>
    </>
  );
};

export default UserInfo;
