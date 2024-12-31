export default function HomeContent() {
    return (
      <div>
        <section
          className="hero flex justify-start items-center text-left px-4 text-[#e9e9e9]"
          style={{
            backgroundImage: "url('/images17-transformed.jpeg')", // Ensure image path is correct
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh", // You might want to add this for full-screen hero section
          }}
        >
          <div className="max-w-md">
            <h1 className="text-[58px] font-bold text-shadow-[2px_2px_5px_#5a3582] fade-in">
              Welcome to Your Perfect Pair!
            </h1>
            <p className="text-[30px] mt-2">Your one-stop for the best Shoes</p>
            <button className="mt-5 px-5 py-2 bg-[#5a3582] text-[#e9e9e9] font-bold rounded hover:bg-[#8654bb] transition ease-linear">
              Shop Now
            </button>
          </div>
        </section>
      </div>
    );
  }
  