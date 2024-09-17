import React, { useState } from 'react';
import './bookingmenu.css';
import './navbar.css';

const BookingMenu = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bookingCode, setBookingCode] = useState('');

  const handleDateSelection = (event) => {
    const { name, value } = event.target;
    if (name === 'checkIn') {
      setCheckInDate(value);
    } else {
      setCheckOutDate(value);
    }
    calculateTotalAmount(name === 'checkIn' ? value : checkInDate, name === 'checkOut' ? value : checkOutDate);
  };

  const handleNumGuestsChange = (event) => {
    setNumGuests(event.target.value);
  };

  const calculateTotalAmount = (start, end) => {
    if (start && end) {
      const days = (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);
      setTotalAmount(Math.max(0, Math.round(days * 100 * numGuests))); // Assuming $100 per night per guest, rounded to nearest dollar
    }
  };

  const handlePayment = () => {
    // Simulating payment process
    setTimeout(() => {
      setBookingCode(Math.random().toString(36).substr(2, 9).toUpperCase());
    }, 1500);
  };
  return (
    <div className="booking-menu">
      <h2>Book Your Stay</h2>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="checkIn" className="inline-block">Check-in Date</label>
          <input
            id="checkIn"
            type="date"
            name="checkIn"
            value={checkInDate}
            onChange={handleDateSelection}
            className="ml-2"
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut" className="inline-block">Check-out Date</label>
          <input
            id="checkOut"
            type="date"
            name="checkOut"
            value={checkOutDate}
            onChange={handleDateSelection}
            className="ml-2"
          />
        </div>
        <div className="form-group">
          <label htmlFor="numGuests" className="inline-block">Number of Guests</label>
          <select
            id="numGuests"
            value={numGuests}
            onChange={handleNumGuestsChange}
            className="ml-2"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      {totalAmount > 0 && (
        <div className="total-amount">
          <h3>Total Amount: ${totalAmount}</h3>
          <div className="payment-methods">
            <div className="payment-button">
              <button
                onClick={() => setPaymentMethod('card')}
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Pay by Card
              </button>
            </div>
            <div className="payment-button">
              <button
                onClick={() => setPaymentMethod('qps')}
                className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-200"
              >
                Pay via QPS
              </button>
            </div>
          </div>
        </div>
      )}

      {paymentMethod && (
        <div className="mt-4">
          <div className="proceed-button">
            <button
              onClick={handlePayment}
              className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200"
            >
              💳 Proceed to Payment
            </button>
          </div>
        </div>
      )}

      {bookingCode && (
        <div className="booking-success">
          <p className="font-bold">Booking Successful!</p>
          <p>Your booking code is: <strong>{bookingCode}</strong>. Please use this code at check-in.</p>
        </div>
      )}
    </div>
  );
};

export default BookingMenu;