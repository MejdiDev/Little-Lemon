import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

const availableTimes = ['17:00', '17:30'];
const today = new Date().toISOString().split('T')[0];

const dispatch = jest.fn();
const submitReservation = jest.fn();

test ('Should Successfully Submit Form with all data Fileds Filled', () => {
    render(<BookingForm 
        dispatch = { dispatch }
        availableTimes = {availableTimes}
        submitReservation = { submitReservation }
      />);

    const submitButtom = screen.getByRole('button');
    fireEvent.click(submitButtom);

    expect(submitReservation).toHaveBeenCalled();
});