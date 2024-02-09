import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

/** Configuraciones adicionales de primevue */
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import BadgeDirective from 'primevue/badgedirective';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice'; // agregado
import ConfirmationService from 'primevue/confirmationservice';
import PrimeVue from 'primevue/config';
import "./assets/styles.scss";

import App from './App.vue'
import router from './router'
import Toast from "primevue/toast";

const app = createApp(App)

app.use(router);
app.use(createPinia())
app.use(PrimeVue);
app.use(ToastService); // agregado
app.use(ConfirmationService);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('badge', BadgeDirective);
app.directive('tooltip', Tooltip);
app.component('Toast', Toast);

app.mount('#app')
