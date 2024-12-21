import React, { useState } from 'react';

const LoginForm = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Todos os campos são obrigatórios!');
      return;
    }

    console.log('Login realizado com sucesso!');
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Error: ', error);

    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div>
      <h2>Form index1</h2>
      <form onSubmit={handleSubmit}>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
