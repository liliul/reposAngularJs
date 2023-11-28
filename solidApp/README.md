### Link sobre mais do SolidJS [Solid Website](https://solidjs.com) E [Discord](https://discord.com/invite/solidjs)

<br />

### Versão do Nodejs 

```zsh
nvm use # or less .nvmrc
```

### Instalar pacotes

```bash
npm install # or pnpm install or yarn install
```

### Iniciar projeto
```zsh
npm run dev # or yarn dev
```
<br />

## Para mais informações para iniciar o projeto com node-js
#### `less package.json`

### Localhost do projeto [http://localhost:5173](http://localhost:5173)

### Deployment [documentação](https://vitejs.dev/guide/static-deploy.html)

<br />

## Eco-sistema do solid-js

### Adicionar solid-router
```zsh
npm install @solidjs/router
```
#### Link para o repo github [solid-router](https://github.com/solidjs/solid-router)

```zsh
// exemplo de uso 

import { Routes, Route } from "@solidjs/router";

import Home from "./pages/Home";
import Users from "./pages/Users";

export default function App() {
  return (
    <>
      <h1>My Site with Lots of Pages</h1>
      <Routes>
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </>
  );
}
```
<hr />

### Adicionar solid-icons
```zsh
npm install solid-icons --save # or yarn add solid-icons
```
#### Link para site para escolher os icons [solid-icons-link](https://solid-icons.vercel.app/)

#### Link para o repo no github [solid-icons-repo](https://github.com/x64Bits/solid-icons)

<hr />

### Adicionar solid-styled-components
```zsh
npm install solid-styled-components
```
#### Link para o repo github [solid-styled-components](https://github.com/solidjs/solid-styled-components)

```zsh
// exemplo de uso

import { styled } from "solid-styled-components";

const Btn = styled("button")`
  border-radius: ${props => props.size}px;
`;

<Btn size={20} />;
```
<hr />

### Adicionar solid-heroicons
```zsh
npm install solid-heroicons
```
#### Link para o repo github [solid-heroicons](https://github.com/amoutonbrady/solid-heroicons)

```zsh
// exemplo de uso

import { Icon } from "solid-heroicons";
import { arrowLeft } from "solid-heroicons/solid";
import { arrowRight } from "solid-heroicons/outline";
import { arrowDown } from "solid-heroicons/solid-mini";

const HeroIcons = () => (
  <>
    <Icon path={arrowLeft} style="width: 24px; color: tomato" />
    <Icon path={arrowRight} style="width: 24px; color: purple" />
    <Icon path={arrowDown} style="width: 20px; color: #DDD" />
  </>
);
```
<hr />

### Adicionar solid-meta
```zsh
npm install @solidjs/meta
```

#### Link para o repo github [solid-meta](https://github.com/solidjs/solid-meta)

```zsh
// exemplo de uso

import { MetaProvider, Title, Link, Meta } from '@solidjs/meta';

const App = () => (
  <MetaProvider>
    <div class="Home">
      <Title>Title of page</Title>
      <Link rel="canonical" href="http://solidjs.com/" />
      <Meta name="example" content="whatever" />
      // ...
    </div>
  </MetaProvider>
);
```

<hr />