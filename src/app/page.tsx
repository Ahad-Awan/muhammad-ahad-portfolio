export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white relative z-10">
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Muhammad Ahad
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl text-center mt-4">
        Full Stack Developer & Creative Problem Solver
      </p>
      <p className="text-lg text-gray-400 max-w-3xl text-center mt-4">
        Welcome to my portfolio! I'm passionate about creating beautiful, functional web experiences.
      </p>
      
      <div className="flex gap-6 items-center flex-col sm:flex-row mt-8">
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
          View My Work
        </button>
        <button className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
