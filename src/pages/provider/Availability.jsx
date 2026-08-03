import { useState } from "react";

import AvailabilityHeader from "../../components/provider/availability/AvailabilityHeader";
import WorkingDays from "../../components/provider/availability/WorkingDays";
import TimeSlots from "../../components/provider/availability/TimeSlots";
import BreakTime from "../../components/provider/availability/BreakTime";
import AvailabilityStatus from "../../components/provider/availability/AvailabilityStatus";
import SaveAvailability from "../../components/provider/availability/SaveAvailability";

import { workingDays } from "../../data/provider/workingDays";

const Availability = () => {
  const [days, setDays] =
    useState(workingDays);

  const [timeSlots, setTimeSlots] =
    useState({
      startTime: "09:00",
      endTime: "18:00",
      slotDuration: "60",
    });

  const [breakTime, setBreakTime] =
    useState({
      startTime: "13:00",
      endTime: "14:00",
    });

  const [isAvailable, setIsAvailable] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const handleSave = () => {
    setLoading(true);

    const availability = {
      days,
      timeSlots,
      breakTime,
      isAvailable,
    };

    localStorage.setItem(
      "providerAvailability",
      JSON.stringify(availability)
    );

    setTimeout(() => {
      setLoading(false);

      alert(
        "Availability Saved Successfully"
      );
    }, 1000);
  };

  const handleReset = () => {
    setDays(workingDays);

    setTimeSlots({
      startTime: "09:00",
      endTime: "18:00",
      slotDuration: "60",
    });

    setBreakTime({
      startTime: "13:00",
      endTime: "14:00",
    });

    setIsAvailable(true);
  };

  return (
    <section
      className="
      space-y-8
      "
    >
      <AvailabilityHeader />

      <AvailabilityStatus
        isAvailable={isAvailable}
        setIsAvailable={
          setIsAvailable
        }
      />

      <WorkingDays
        days={days}
        setDays={setDays}
      />

      <TimeSlots
        timeSlots={timeSlots}
        setTimeSlots={
          setTimeSlots
        }
      />

      <BreakTime
        breakTime={breakTime}
        setBreakTime={
          setBreakTime
        }
      />

      <SaveAvailability
        loading={loading}
        onSave={handleSave}
        onReset={handleReset}
      />
    </section>
  );
};

export default Availability;