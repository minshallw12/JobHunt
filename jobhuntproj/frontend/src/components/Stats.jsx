import { useMemo } from "react";

export default function Stats({ applications }) {
    // useMemo hook prevents the todaysDate from recalculating after ever render.
    // Instead, its stored in cache memory and recalled each render to save resources.
    const todaysDate = useMemo(() => new Date(), []);
    const total = applications.length;

    /* 
    This function uses reduce instead of map and filter to count
    the number of days since the last Sunday 
    */
    const weeklyAppsCount = applications.reduce((count, app) => {
        const appDate = new Date(app.date_applied);
        const differenceInDays = Math.floor((todaysDate - appDate) / (1000 * 60 * 60 * 24));
        if (differenceInDays <= 6) {
            return count + 1;
            }
        return count;
    }, 0);


    return (
    <div>
        <h2>My stats</h2>
        <h2>Total Applications</h2>
        <h3>{total}</h3>
        <h2># of Applications this week</h2>
        <h3>{weeklyAppsCount}</h3>
    </div>
    );
}
