import React, { useEffect, useState } from 'react';
import './index.css';

export function DarkLight() {
  const [theme, setTheme] = useState('light'); 
  
  // Função para definir o tema com base na preferência do sistema
  const handleThemeChange = (e) => {
    setTheme(e.matches ? 'dark' : 'light');
  };

  useEffect(() => {
    // Verifica a preferência do sistema assim que o componente é montado
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    // Define o tema inicial
    setTheme(prefersDarkMode.matches ? 'dark' : 'light');

    // Adiciona um listener para mudanças de tema
    prefersDarkMode.addEventListener('change', handleThemeChange);

    // Limpeza do listener quando o componente for desmontado
    return () => {
      prefersDarkMode.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <div className='tema'>
        <div className={theme}>
            <h1>O tema atual é {theme === 'dark' ? 'escuro' : 'claro'}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

            <h2 className={theme === 'dark' ? 'h2-dark' : 'h2-light'}>
              Reprehenderit, voluptate, vero at excepturi
            </h2>
            <p className={theme === 'dark' ? 'p-dark' : 'p-light'}>
              eum cupiditate voluptates culpa dignissimos nostrum nulla sit 
              hic id sint ducimus iste deserunt minus maxime minima!
            </p>

        </div>
    </div>
  );
}
