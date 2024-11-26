import { useQuery } from '@tanstack/react-query';

export function TestandoReactQuery() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repos'],
    queryFn: async () => await fetchPosts()
  });

  if (isLoading) return 'Carregando...';

  if (error) return 'Um erro ocorreu: ' + error.message;
    
  console.log('data', data);
    
  return (
    <div>
      {data.map(github => (
        <div key={github.id}>{github.name}</div>
      ))}
    </div>
  );
}

function fetchPosts() {
  return fetch('https://api.github.com/users/maykbrito/repos')
    .then(res => res.json());
}