import { useEffect } from 'react';
import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch }) => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(availableTimes[0]);

    const [number, setNumber] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleDateChange = inDate => {
        setDate(inDate);
        dispatch({ date: inDate });
    }

    return (
        <form id="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={e => handleDateChange(e.target.value)} />
            
            <label htmlFor="res-time">Choose time</label>
            <select value={time} onChange={e => setTime(e.target.value)} id="res-time ">
                {
                    availableTimes.map(time =>
                        <option key={time} value={time}>{ time }</option>
                    )
                }
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"  value={number} onChange={e => setNumber(e.target.value)} />

            <label htmlFor="occasion">Occasion</label>
            <select  value={occasion} onChange={e => setOccasion(e.target.value)} id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;