import { useSelector } from 'react-redux';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations);

  return (
    <section className="min-h-screen bg-yellow-50 p-8">
      <h2 className="text-5xl font-extrabold text-yellow-700 mb-8 text-center">Reservations</h2>
      {reservations.length === 0 ? (
        <p className="text-2xl text-center text-gray-700">No reservations made yet.</p>
      ) : (
        <ul className="space-y-6">
          {reservations.map((res, index) => (
             <li key={index} className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-center space-x-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
             <p className="text-xl font-bold text-yellow-800">{res.name}</p>
             <p className="text-lg text-gray-700">Guests: {res.guests}</p>
             <p className="text-lg text-gray-700">Date: {res.date}</p>
             <p className="text-lg text-gray-700">Time: {res.time}</p>
           </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reservations;