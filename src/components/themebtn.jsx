import '../css/theme.css'

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