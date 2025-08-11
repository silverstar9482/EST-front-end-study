import { useState, createContext, useContext } from 'react';

const ThemesContext = createContext();

const themes = {
  light: {
    name: '라이트 모드',
    container: 'bg-white text-gray-900',
    card: 'bg-gray-100 border-gray-300',
    button: 'bg-blue-500 hover:bg-blue-600 text-white',
    header: 'bg-gray-200 text-gray-600',
    footer: 'bg-gray-100  text-gray-600',
    titleFont: 'text-blue-600',
  },
  dark: {
    name: '다크 모드',
    container: 'bg-gray-900 text-gray-400',
    card: 'bg-gray-800 border-gray-700',
    button: 'bg-green-500 hover:bg-green-600 text-white',
    header: 'bg-gray-800 text-gray-300',
    footer: 'bg-gray-800 text-gray-300',
    titleFont: 'text-blue-400',
  },
};

function Header() {
  const { currentTheme, toggleBtn, theme } = useContext(ThemesContext);

  return (
    <header className={`${currentTheme.header} fixed px-8 py-5 w-full flex items-center justify-between`}>
      <h1 className='inline-block text-3xl font-extrabold'>LOGO</h1>
      <nav>
        <ul>
          <li>
            <button
              type='button'
              className={`${currentTheme.button}`}
              onClick={() => toggleBtn()}
              style={{
                borderRadius: '5px',
                padding: '3px 10px',
                cursor: 'pointer',
              }}
            >
              {theme}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
function Contents() {
  const { currentTheme } = useContext(ThemesContext);

  return (
    <section
      className={`${currentTheme.container} h-screen flex items-center justify-center flex-col gap-4 text-center`}
    >
      <div className={`${currentTheme.card} flex items-center justify-center flex-col w-lg h-100 rounded-2xl px-8`}>
        <h1 className={`text-4xl font-bold ${currentTheme.titleFont}`}>Welcome to My React App with Tailwind CSS!</h1>
        <p className='mt-5 text-sm'>
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
          space.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const { currentTheme } = useContext(ThemesContext);
  return (
    <>
      <footer className={`${currentTheme.footer} fixed px-8 py-4 w-full bottom-0 font-extrabold text-2xl`}>
        <p>FOOTER</p>
      </footer>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('light');
  const currentTheme = themes[theme];

  function toggleBtn() {
    if (theme === 'light') {
      setTheme('dark');
    } else setTheme('light');
  }

  return (
    <ThemesContext.Provider value={{ themes, theme, setTheme, currentTheme, toggleBtn }}>
      <div className='relative'>
        <Header />
        <Contents />
        <Footer />
      </div>
    </ThemesContext.Provider>
  );
}

export default App;
