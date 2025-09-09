// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zarządzanie budżetem',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/CrystalPL' }],
            plugins: [
                catppuccin()
            ],
            customCss: [
                './src/styles/custom.css',
            ],
		}),
	],
});
