import { useState } from 'preact/hooks';

/**
 * 
 * @param {props} mensagens 
 * @returns {elementHTML} componente button saudação
 */
export default function Saudacao({mensagens}) {

  const mensagemAleatoria = () => mensagens[(Math.floor(Math.random() * mensagens.length))];

  const [saudacao, setSaudacao] = useState(mensagens[0]);

  return (
    <div>
      <h3 className="text-saudacao">{saudacao}! Obrigado por visitar!</h3>
      <button className="b-saudacao" onClick={() => setSaudacao(mensagemAleatoria())}>
        Nova Saudação
      </button>
    </div>
  );
}