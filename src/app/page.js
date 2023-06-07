"use client";
import { useSelector, useDispatch } from "react-redux";
import Scheduler from "react-mui-scheduler";
import { openModal } from "@/redux/slices/modalSlice";

export default function Home() {
  const todoList = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();
  console.log({ todoList });
  console.log(2);
  console.log(3);

  const state = {
    options: {
      transitionMode: "zoom", // or fade
      startWeekOn: "Mon", // or Sun
      defaultMode: "month", // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
    },
    alertProps: {
      open: false,
      color: "info", // info | success | warning | error
      severity: "info", // info | success | warning | error
      message: "🚀 Let's start with awesome react-mui-scheduler 🔥 🔥 🔥",
      showActionButton: false,
      showNotification: false,
      delay: 1500,
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true,
    },
  };

  const events = [
    {
      id: "event-1",
      label: "Medical consultation",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "04:00 AM",
      endHour: "05:00 AM",
      date: "2023-05-23",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
  ];

  const handleCellClick = (event, row, day) => {
    console.log("ec");
    // Do something...
  };

  const handleEventClick = (event, item) => {
    console.log({ event });
    console.log({ item });
    // Do something...
  };

  const handleEventsChange = (item) => {
    console.log({ item });
    // Do something...
  };

  const handleAlertCloseButtonClicked = (item) => {
    // Do something...
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            openModal({
              typeModal: "addTodo",
            })
          );
        }}
      >
        hdebhweb
      </button>
      <Scheduler
        locale="fr"
        events={events}
        data={events}
        legacyStyle={false}
        options={state?.options}
        alertProps={state?.alertProps}
        toolbarProps={state?.toolbarProps}
        onEventsChange={handleEventsChange}
        onCellClick={handleCellClick}
        onTaskClick={handleEventClick}
        onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
      />
    </div>
  );
}
