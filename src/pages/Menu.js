const Menu = () => {
    const itemsArray=[
        {name:"Bruchetta", price:"$12.99", images:"./dish1.svg"},
        {name:"Greek Salad", price:"$8.99", images:"./dish2.jpg"},
        {name:"Lemon Desert", price:"$7.49", images:"./dish3.jpg"},
    ]
    return (
    <section className="min-h-screen bg-yellow-50 p-8">
        <h2 className="text-5xl text-center font-extrabold text-gray-900 mb-8">Our Menu</h2>
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {itemsArray.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg transform transition hover:scale-105">
                <img src={item.images} alt="Dish" className="w-full h-48 object-cover rounded-lg" />
                <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-yellow-600">{item.name}</h3>
                <p className="text-lg text-gray-700 mt-2">{item.price}</p>
                </div>
            {/* <h3 className="text-xl mt-4">{item.name}</h3>
            <p className="text-lg">{item.price}</p> */}
            </div>
        ))}
        </div>
    </section>
  );
}

  export default Menu;