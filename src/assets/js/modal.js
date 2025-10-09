"use strict";

import MicroModal from "micromodal";

MicroModal.init({
  awaitCloseAnimation: true,
  awaitOpenAnimation: true,
  disableScroll: true,

});

MicroModal.show('js-modal');

MicroModal.close('js-modal');
