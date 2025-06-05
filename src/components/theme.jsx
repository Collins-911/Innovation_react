import { FaMoon } from "react-icons/fa";
import "../css/theme.css";

export default function ThemeToggle() {
  return (
    <>
      <button className="darkmode">
        <FaMoon className="moon-icon" />
      </button>
    </>
  );
}
