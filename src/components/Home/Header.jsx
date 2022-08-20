import HeaderImage from "../../images/header.png";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../Services/AppRoutes";

const Header = () => {
  const history = useNavigate()
  const handleNavigation = () => {
    history(AppRoutes.books);
  };
  return (
    <div className="flex py-12">
      <img className="w-full" src={HeaderImage} alt="header" />
      <div className="absolute p-20">
        <p className="font-bold text-5xl text-violet-900 mb-6">
          Build your library
        </p>
        <p className="font-bold text-2xl text-stone-400 w-96 mb-6">
          Buy two selected books and get one for free
        </p>
        <button onClick={handleNavigation} class="bg-[#c2a792] w-28 text-white py-2 px-4 rounded-lg">
          View all
        </button>
      </div>
    </div>
  );
};
export default Header;
