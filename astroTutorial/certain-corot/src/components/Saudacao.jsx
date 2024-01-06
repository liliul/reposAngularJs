import { useState } from 'preact/hooks';

export default function Saudacao({mensagens}) {

  const mensagemAleatoria = () => mensagens[(Math.floor(Math.random() * mensagens.length))];

  const [saudacao, setSaudacao] = useState(mensagens[0]);

  return (
    <div>
      <h3>{saudacao}! Obrigado por visitar!</h3>
      <button onClick={() => setSaudacao(mensagemAleatoria())}>
        Nova Saudação
      </button>
    </div>
  );
}