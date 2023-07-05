import React, { ChangeEvent, useState } from "react";
import c from "./ProfileStatus.module.css";

type ProfileStatusPropsType = {
  status: string;
  updateStatusTC: (status: string) => void;
};

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatusTC(status);
  };

  const deactivateEditModeOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setEditMode(false);
      props.updateStatusTC(status);
    }
  };
  const onChangeStatusInput = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div className={c.statusWrapper} onDoubleClick={activateEditMode}>
          <span>{props.status || "put your status here"}</span>
        </div>
      )}
      {editMode && (
        <div className={c.statusWrapper} onDoubleClick={activateEditMode}>
          <input
            value={status}
            onKeyPress={(e) => deactivateEditModeOnEnter(e)}
            onChange={(e) => onChangeStatusInput(e)}
            onBlur={deactivateEditMode}
            autoFocus={true}
          />
        </div>
      )}
    </div>
  );
};
