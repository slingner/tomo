import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faTv,
  faLayerGroup,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
  library.add(fab, faTv, faLayerGroup, faCheckCircle);
}
