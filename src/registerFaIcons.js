import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCreditCard,
  faFileInvoiceDollar,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
  library.add(fab, faCreditCard, faFileInvoiceDollar, faMoneyBillWave);
}
