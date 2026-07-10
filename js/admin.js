import './connection/gas.js';
import { admin } from './app/admin/admin.js';

((w) => {
    w.undangan = admin.init();
})(window);