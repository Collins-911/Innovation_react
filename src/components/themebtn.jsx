import '../css/theme.css'
import { FaMoon } from "react-icons/fa";

export default function Themebtn() {

    
const toggleTheme = () => {
  document.body.classList.toggle('dark');
};

    return(
            <button className="theme-toggle" onClick={toggleTheme}>
                <FaMoon className="moon-icon" />
          </button>

    )
}