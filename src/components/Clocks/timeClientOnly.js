// TimeClientOnly.jsx
"use client";

import { useEffect, useState } from "react";

export default function TimeClientOnly() {
  const [fullTime, setFullTime] = useState({
    hour: "--",
    minute: "--",
    second: "--",
  });

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      setFullTime({
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
      });
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p>
      {`${String(fullTime.hour).padStart(2, "0")}:${String(
        fullTime.minute
      ).padStart(2, "0")}:${String(fullTime.second).padStart(2, "0")}`}
    </p>
  );
}
