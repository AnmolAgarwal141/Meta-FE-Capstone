import { Routes, Route } from 'react-router-dom';

const Home = () => <h2 className="text-2xl text-center">Welcome to Little Lemon!</h2>;
const About = () => <h2 className="text-2xl text-center">About Little Lemon</h2>;
const Menu = () => <h2 className="text-2xl text-center">Our Menu</h2>;
const Reservations = () => <h2 className="text-2xl text-center">Make a Reservation</h2>;
const OrderOnline = () => <h2 className="text-2xl text-center">Order Online</h2>;
const Login = () => <h2 className="text-2xl text-center">Login</h2>;

function Main() {
    return (
      <main className="flex-grow p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      </main>
    );
  }
export default Main;