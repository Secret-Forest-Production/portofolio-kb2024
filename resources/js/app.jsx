import './bootstrap';
import '../css/app.css';

import { createRoot, hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import AppLayout from './Layouts/AppLayout';

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => `${appName}||${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx'))
    .then((page) => {
        if (page.default.layout === undefined) {
            page.default.layout = (page) => page;
        }
        return page;
    }),      setup({ el, App, props }) {
        if (import.meta.env.DEV) {
            createRoot(el).render(<App {...props} />);
            return
        }

        hydrateRoot(el, <App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
