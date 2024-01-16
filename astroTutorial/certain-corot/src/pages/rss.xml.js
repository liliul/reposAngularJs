import rss, { pagesGlobToRssItems } from '@astrojs/rss';

/**
 * 
 * @param {object} context 
 * @returns Informações do astroBlog
 */
export async function GET(context) {
  return rss({
    title: 'Aluno de Astro | Blog',
    description: 'Minha jornada aprendendo Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt-br</language>`,
  });
}