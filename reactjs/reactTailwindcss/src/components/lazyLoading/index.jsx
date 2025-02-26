import React, { Suspense } from 'react';

// Usando React.lazy para carregar o componente de forma assíncrona
const Loading = React.lazy(() => import('./loading1'));

function LazyLoading() {
  return (
    <div>
      <h1>React Lazy Loading</h1>

      {/* O Suspense envolve o componente que está sendo carregado de forma assíncrona */}
      <Suspense fallback={<div>Loading...</div>}>
        <Loading />
      </Suspense>
    </div>
  );
}

export default LazyLoading;
