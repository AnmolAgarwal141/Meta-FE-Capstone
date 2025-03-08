import { Link } from "react-router-dom";

function Nav() {
    return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/Logo.svg" alt="Little Lemon Logo" className="w-24 h-12" />
        <ul className="flex space-x-8">
          {['Home', 'About', 'Menu', 'Reservations', 'Book Table'].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-yellow-400">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    );
  }
export default Nav;