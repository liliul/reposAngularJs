import Link from 'next/link'

export default function Custom404() {
  return (
      <div>
        <h2>Erro 404</h2>
        <Link href="/">Voltar para pagina inicial?</Link>
      </div>
    )
}
