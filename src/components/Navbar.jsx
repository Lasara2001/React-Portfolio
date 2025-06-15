import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-950 via-purple-800 to-pink-600 px-8 py-6 shadow-lg flex items-center justify-between">
      <div className="text-xl font-bold">Sanduni Lasara</div>
      <div className="flex space-x-15 ml-auto">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;