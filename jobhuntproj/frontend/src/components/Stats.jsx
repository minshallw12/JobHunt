import { useMemo } from "react";

function parseLocalDate(dateString) {
  if (typeof dateString !== "string") return null;

  // Input from <input type="date"> is usually YYYY-MM-DD.
  const parts = dateString.split("-");
  if (parts.length === 3) {
    const [year, month, day] = parts.map(Number);
    if (!Number.isNaN(year) && !Number.isNaN(month) && !Number.isNaN(day)) {
      return new Date(year, month - 1, day);
    }
  }

  const parsed = new Date(dateString);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

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
      const appDate = parseLocalDate(app.date_applied);
      if (!appDate) return count;

      appDate.setHours(0, 0, 0, 0);
      return appDate >= lastSunday && appDate <= todaysDate ? count + 1 : count;
    }, 0);
  }, [applications, lastSunday, todaysDate]);

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
