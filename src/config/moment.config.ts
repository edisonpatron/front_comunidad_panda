import moment from "moment/moment";
import 'moment/locale/es';

// Configura Moment.js globalmente en español
moment.locale('es');

moment.updateLocale('es', {
    // weekdaysMin: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
    // weekdaysShort: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    // weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
})

export default moment;