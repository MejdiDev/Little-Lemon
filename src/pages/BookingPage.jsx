import { useReducer } from 'react';
import { fetchAPI } from "../api/bookingsAPI";

import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
    const updateTimes = (state, action) => {
        return fetchAPI(action.date);
    }

    const initializeTimes = fetchAPI(new Date());
    const [availableTimes , dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <>
            <Header />

            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />

            <Footer />
        </>
    );
}

export default BookingPage;