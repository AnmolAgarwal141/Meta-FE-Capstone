import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../store/reservationSlice';

const generateTimeSlots = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots();

const BookTable = () => {
    const [formData, setFormData] = useState({ name: '', guests: '', date: '', time: '' });
    const reservations = useSelector((state) => state.reservations);
    const dispatch = useDispatch();
    const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingBooking = reservations.find(
      (booking) => booking.name === formData.name && booking.date === formData.date
    );

    if (existingBooking) {
      setMessage({ text: 'You already have a reservation for this date.', type: 'error' });
      return;
    }

    const reservationsForSlot = reservations.filter(
        (res) => res.date === formData.date && res.time === formData.time
      );

    if (reservationsForSlot.length >= 5) {
        setMessage({ text: 'Slot is full. Please choose another time.', type: 'error' });
        return;
    }

    dispatch(addReservation(formData));
    setMessage({ text: 'Table successfully booked!', type: 'success' });
    setFormData({ name: '', guests: '', date: '', time: '' });

    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  return (
    <section className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-8">
      <h2 className="text-5xl font-extrabold text-green-700 mb-8">Book a Table</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="mb-6">
          <label className="block text-lg font-semibold text-green-800 mb-2" htmlFor='name'>Name</label>
          <input
            id='name'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-green-400 rounded-xl focus:outline-none focus:border-green-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold text-green-800 mb-2" htmlFor='guests'>Number of Guests</label>
          <input
            id='guests'
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-green-400 rounded-xl focus:outline-none focus:border-green-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold text-green-800 mb-2" htmlFor='date'>Date</label>
          <input
            id='date'
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-green-400 rounded-xl focus:outline-none focus:border-green-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold text-green-800 mb-2" htmlFor='time'>Time</label>
          {/* <input
            id='time'
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-green-400 rounded-xl focus:outline-none focus:border-green-600"
          /> */}
            <select
            id='time'
            name='time'
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            >
            <option value="">Select Time</option>
            {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                {slot}
                </option>
            ))}
            </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition duration-300"
        >
          Book Now
        </button>
      </form>
      {message.text && (
        <div
          className={`mt-6 px-6 py-4 rounded-lg shadow-md ${message.type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
        >
          {message.text}
        </div>
      )}
    </section>
  );
};

export default BookTable;