import { createContext, useContext } from 'react';

import './index.css'

/**
 * context api dentro de outra
 * */

const ThemeContext = createContext(null);

export default function Context() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <ButtonContext>Sign up</ButtonContext>
      <ButtonContext>Log in</ButtonContext>
      <ThemeContext.Provider value="light">
        <Footer />
      </ThemeContext.Provider>
    </Panel>
  );
}

function Footer() {
  return (
    <footer>
      <ButtonContext>Settings</ButtonContext>
    </footer>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  )
}

function ButtonContext({ children }) {
  const theme = useContext(ThemeContext);
  console.log('theme: ', theme)
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
