

export default function Header({isDarkMode, onDarkModeClick}) {

  return (
    <header>
      <button onClick= {onDarkModeClick}>
        {isDarkMode ? "Dark Mode" : "Light Mode"} 
      </button>
    </header>

  )
}