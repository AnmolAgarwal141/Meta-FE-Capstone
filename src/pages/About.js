const About = () => {
    const images = [
        './about1.jpg',
        './about2.jpg',
        './about3.jpg',
        './about4.jpg'
      ];
    return(
        <section className="min-h-screen flex flex-col justify-center items-center bg-yellow-100">
            <h2 className="text-5xl text-center font-extrabold text-gray-900 my-8">About Little Lemon</h2>
            <p className="text-center text-xl text-gray-800 mb-8">Little Lemon brings you the finest Mediterranean flavors, freshly prepared with love and tradition.</p>
            <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
                {images.map((src, index) => (
                <img key={index} src={src} alt={`About Little Lemon ${index + 1}`} className="w-full h-80 object-cover rounded-lg shadow-lg" />
                ))}
            </div>
        </section>
    )
  };

  export default About;