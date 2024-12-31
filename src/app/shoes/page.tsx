import Image from 'next/image';

export default function Shoes() {
  const shoesData = [
    { id: 1, name: 'AirMax', price: 12000, description: "High-performance sports shoe", image: '/id1img.webp' },
    { id: 2, name: 'ClassicLoafers', price: 8000, description: "Timeless and elegant loafers", image: '/id2.jpg' },
    { id: 3, name: 'TrailBlazer', price: 15000, description: "Rugged shoe for outdoor adventures", image: '/id3 (2).jpg' },
    { id: 4, name: 'UrbanSneaks', price: 10000, description: "Trendy sneakers for daily wear", image: '/id4 (1).jpg' },
    { id: 5, name: 'EliteFormal', price: 14000, description: "Premium formal shoes for occasions", image: '/id5 (1).jpg' },
    { id: 6, name: 'Opulence', price: 25000, description: "Luxurious handcrafted leather shoes for elite comfort and style", image: '/id6 (1).jpg' }
  ];

  return (
    <div className="px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {shoesData.map((shoes) => (
          <div key={shoes.id} className="bg-[#0d1334] p-5 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <Image
              src={shoes.image} // Ensure the image is in the public folder
              alt={shoes.name}
              width={300} // Specify width
              height={300} // Specify height
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h3 className="text-xl font-bold text-[#8654bb] mt-3">{shoes.name}</h3>
            <p className="text-[#8654bb] mt-2 text-sm">{shoes.description}</p>
            <div className="text-[#8654bb] font-bold text-lg mt-3">${shoes.price}</div>
            <button className="mt-4 px-4 py-2 bg-[#8654bb] text-white rounded-lg hover:bg-[#8654bb] transition-all">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
