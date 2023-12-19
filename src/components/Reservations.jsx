export default function Reservations({ data }) {
    if (data) {
        return (
            <div className="reser">
                <h2>date: {data.date}</h2>
                <h2>Time: {data.time}</h2>
                <h2>Number of guests: {data.numberOfGuests}</h2>
                <h2>Occasion: {data.occasion}</h2>
            </div>
        );
    } else return <h1 className="nrm">No reservations made</h1>
}