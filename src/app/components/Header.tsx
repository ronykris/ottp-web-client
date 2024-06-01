import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="text-blue-600 text-lg font-bold">
        <Link href="/">ottp://</Link>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-black"><i className="fas fa-user"></i></a>
        <a href="#" className="text-black"><i className="fas fa-search"></i></a>
        <a href="#" className="text-black"><i className="fas fa-times"></i></a>
      </div>
    </header>
  );
};

export default Header;