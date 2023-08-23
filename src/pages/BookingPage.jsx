import { useReducer } from 'react';
import { fetchAPI, submitAPI } from "../api/bookingsAPI";

import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

import success from '../assets/done.png';

const BookingPage = () => {
    const updateTimes = (state, action) => {
        return fetchAPI(action.date);
    }

    const initializeTimes = fetchAPI(new Date());
    const [availableTimes , dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <section id="booking-page">
            <Header />

            <div id="form-wrapper">
                <section id="visuals">
                    <h1>Reserve A Table</h1>
                    <div id="image"></div>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora deleniti eum repellat explicabo ratione quisquam fugiat quidem.</h3>
                </section>

                <div id="form-success">
                    <img src={success} alt="Success !" />
                    <h1>Table Reserved !</h1>
                </div>

                <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitReservation= { submitAPI } />
            </div>

            <Footer />
        </section>
    );
}

export default BookingPage;