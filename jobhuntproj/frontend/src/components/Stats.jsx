import { useMemo } from "react";

export default function Stats({ applications }) {
  // Cache today's date once per render
  const todaysDate = useMemo(() => new Date(), []);

  // Calculate the date of the last Sunday (start of current week)
  const lastSunday = useMemo(() => {
    const date = new Date(todaysDate);
    // getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const day = date.getDay();
    date.setHours(0, 0, 0, 0); // reset to start of the day for accurate comparison
    date.setDate(date.getDate() - day);
    return date;
  }, [todaysDate]);

  const total = applications.length;

  // Count applications applied since last Sunday
  const weeklyAppsCount = useMemo(() => {
    return applications.reduce((count, app) => {
      const appDate = new Date(app.date_applied);
      return appDate >= lastSunday ? count + 1 : count;
    }, 0);
  }, [applications, lastSunday]);

  return (
    <div className="column">
      <div className="center">
        <h2 className="padding underline">Current Stats</h2>
      </div>

      <div id="statbox">
        <div className="totalApps">
          <h2>Total Applications:</h2>
          <h2 className="padding">{total}</h2>
        </div>
        <div className="weeklyApps">
          <h2># of Job Apps this week:</h2>
          <h2 className="padding">{weeklyAppsCount}</h2>
        </div>
      </div>
    </div>
  );
}
