

export default function Stats({applications}) {

    const total = applications.length;

    return (
        <div>
            <h2>My stats</h2>
            <h2>Total Applications</h2>
            <h3>{total}</h3>
            <h2># of Applications this week</h2>
        </div>
    )
}