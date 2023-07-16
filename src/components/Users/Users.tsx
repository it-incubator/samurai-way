import React from "react";
import c from "./Users.module.css";
import { UsersContainerPropsType } from "./UsersContainer";
import Pagination from "@mui/material/Pagination";
import { User } from "components/Users/User";

type UsersPropsType = UsersContainerPropsType & {
  onPageChanged: (e: React.ChangeEvent<unknown>, clickedPage: number) => void;
};

export const Users = (props: UsersPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const count = pagesCount > 0 ? pagesCount : props.currentPage;

  return (
    <div className={c.usersPageWrapper}>
      <div className={c.pagination}>
        <Pagination
          page={props.currentPage}
          count={count}
          variant="outlined"
          color="secondary"
          showFirstButton={true}
          showLastButton={true}
          onChange={props.onPageChanged}
        />
      </div>
      {props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingProgress={props.followingProgress}
          unFollowTC={props.unFollowTC}
          followTC={props.followTC}
        />
      ))}
    </div>
  );
};
