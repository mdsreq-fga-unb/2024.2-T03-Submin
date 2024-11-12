// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightImageZoomPlugin from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
	site: 'https://mdsreq-fga-unb.github.io/2024.2-T03-Submin/',
	base: '/docs',
	integrations: [
		starlight({
			plugins: [starlightImageZoomPlugin()],
			title: 'Submin',
			logo: {
				replacesTitle: true,
				dark: './src/assets/dark.svg',
				light: './src/assets/light.svg',
			},
			social: {
				github: 'https://github.com/mdsreq-fga-unb/2024.2-T03-Submin',
			},
			sidebar: [
				{
					label: 'Introdução',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Bem-vindo', slug: 'intro/introduction' },
					],
				},
				{
					label: 'Visão de Produto e Projeto',
					items: [
						{ label: 'Cenário Atual do Cliente e do Negócio', slug: 'unidade-1/cenario'},
						{ label: 'Soluções Propostas', slug: 'unidade-1/solucao'},
						{ label: 'Estratégias de Engenharia de Software', slug: 'unidade-1/estrategias'},
						{ label: 'Cronograma e Entregas', slug: 'unidade-1/cronograma'},
						{ label: 'Interação Entre Equipe e Cliente', slug: 'unidade-1/interacao'},
						{ label: 'Lições Aprendidas', slug: 'unidade-1/licoes'},
						{ label: 'Referências Bibliográficas', slug: 'unidade-1/referencias'},
					],
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
