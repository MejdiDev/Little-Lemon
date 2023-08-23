import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitReservation }) => {
    let tday = new Date().toISOString().split('T')[0];

    const [date, setDate] = useState(tday);
    const [time, setTime] = useState(availableTimes[0]);

    const [number, setNumber] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = e => {
        e.preventDefault();
        
        const res = submitReservation();
        if(res) {
            handleReservationSuccess();
        }
    }

    const handleDateChange = inDate => {
        setDate(inDate);
        dispatch({ date: inDate });
    }

    const handleReservationSuccess = () => {
        document.getElementById("booking-form").style.display = "none";
        document.getElementById("form-success").style.display = "flex";
    }

    return (
        <form id="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={e => handleDateChange(e.target.value)} />
            
            <label htmlFor="res-time">Choose time</label>
            <div className="select-wrapper">
                <select value={time} onChange={e => setTime(e.target.value)} id="res-time ">
                    {
                        availableTimes.map(time =>
                            <option key={time} value={time}>{ time }</option>
                        )
                    }
                </select>
            </div>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"  value={number} onChange={e => setNumber(e.target.value)} />

            <label htmlFor="occasion">Occasion</label>
            <div className="select-wrapper">
                <select  value={occasion} onChange={e => setOccasion(e.target.value)} id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;