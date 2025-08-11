import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    name: '라이트 모드',
    container: 'bg-white text-gray-900',
    card: 'bg-gray-100 border-gray-300',
    button: 'bg-blue-500 hover:bg-blue-600 text-white',
    header: 'bg-gray-200 text-gray-900',
    footer: 'border-gray-300',
  },
  dark: {
    name: '다크 모드',
    container: 'bg-gray-900 text-white',
    card: 'bg-gray-800 border-gray-700',
    button: 'bg-green-500 hover:bg-green-600 text-white',
    header: 'bg-gray-800 text-white',
    footer: 'border-gray-700',
  },
};

function App() {
  return;
}

function Header() {}

function Main() {}

function Footer() {}

export default App;
