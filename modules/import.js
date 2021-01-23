import {addImportButton} from './ui.js';

CONFIG.debug.hooks = false;

Hooks.on('renderSidebarTab', addImportButton);