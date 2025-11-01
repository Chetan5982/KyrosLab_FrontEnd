import { useEffect, useState } from "react";
import AnalogClock from "analog-clock-react";

export function Clock({ timeZone }) {
    let time = new Date()?.toLocaleString('en-US', {
      timeZone: timeZone,
    });
    let date = new Date(time);
  
    let options = {
      useCustomTime: true,
      width: "40px",
      border: false,
      borderColor: "#fff",
      baseColor: "#024638",
      centerColor: "#080808",
      centerBorderColor: "#ffffff",
      handColors: {
        second: "#A4C89A",
        minute: "#A4C89A",
        hour: "#A4C89A",
      },
      seconds: date?.getSeconds(),
      minutes: date?.getMinutes(),
      hours: date?.getHours(),
    };
  
    const [clockOptions, setOptions] = useState(options);
  
    useEffect(() => {
      const interval = setInterval(() => {
        let time = new Date().toLocaleString('en-US', {
          timeZone: timeZone,
        });
        let date = new Date(time);
        setOptions((pre) => ({
          ...pre,
          seconds: date.getSeconds(),
          minutes: date.getMinutes(),
          hours: date.getHours(),
        }));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return <AnalogClock {...clockOptions} />;
  }
  