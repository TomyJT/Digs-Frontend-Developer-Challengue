import React from "react";
import CompletedCalendarCard from "../CompletedCalendarCard";
import ScheduledCalendarCard from "../ScheduledCalendarCard";
import UnscheduledCalendarCard from "../UnscheduledCalendarCard";
import EmptyStateCard from "../EmptyStateCard";

interface Props {
  actions: any;
}

const CardSelector: React.FC<Props> = ({ actions }) => {
  if (actions.status === "Completed") {
    return <CompletedCalendarCard action={actions} />;
  }
  if (actions.status === "Scheduled") {
    return <ScheduledCalendarCard action={actions} />;
  }
  if (actions.status === "Unscheduled") {
    return <UnscheduledCalendarCard action={actions} />;
  }
  return <EmptyStateCard />;
};

export default CardSelector;
