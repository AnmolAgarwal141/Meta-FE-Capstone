import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from '../store/menuSlice';

const Menu = () => {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.menu);

    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchMenu());
      }
    }, [dispatch, status]);

    if (status === 'loading') return <p>Loading menu...</p>;
    if (status === 'failed') return <p className="text-red-500">{error}</p>;
    return (
    <section className="min-h-screen bg-yellow-50 p-8">
        <h2 className="text-5xl text-center font-extrabold text-gray-900 mb-8">Our Menu</h2>
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg transform transition hover:scale-105">
                <img src={item.images} alt="Dish" className="w-full h-48 object-cover rounded-lg" />
                <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-yellow-600">{item.name}</h3>
                <p className="text-lg text-gray-700 mt-2">{item.price}</p>
                </div>
            </div>
        ))}
        </div>
    </section>
  );
}

  export default Menu;