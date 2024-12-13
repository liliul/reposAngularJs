import React, { useEffect, useState } from 'react';

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
        </div>
    </div>
  );
}
