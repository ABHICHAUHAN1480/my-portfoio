import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ menuOpen, toggleMenu }) => {
  const menuItems = [
    'home',
    'about',
    'skills',
    'projects',
    'contact',
  ];
  return (
    <nav className={`text-grape bg-cream p-4 fixed top-0 right-0 left-0 z-50 ${menuOpen ? 'opacity-30' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
         Abhishek Chuhan
        </div>
        <div className="hidden  md:flex font-semibold items-start gap-12">
          {menuItems.map((item, index) => (
            <a key={index} href={`#${item}`} className={` hover:border-b border-solid border-queen-pink  w-full`}>
              <p className='' >{item.toUpperCase()}</p>
            </a>
          ))}
        </div>
        
        <div className="md:hidden cursor-pointer " onClick={() => toggleMenu()}>
          {
            menuOpen ?
            null:
            <FontAwesomeIcon icon={faBars} size="lg" />
          }
        </div>
      </div>
    </nav>
  );
};

export default Nav;
