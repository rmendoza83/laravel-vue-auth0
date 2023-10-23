import "./bootstrap";

import { createApp } from "vue";
import router from './router';
import filter from './filter';

// PrimeVue Imports
import PrimeVue from 'primevue/config';

const app = createApp({});

// Custom Filters (Like Pipes in AngularJS)
app.config.globalProperties.$filters = filter;

app.use(PrimeVue);

app
    .use(router)
    .mount('#app');
