import {importActor} from './actor.js';

export function addImportButton() {
    const actions = $.find("#actors .header-actions")[0];

    if (!document.getElementById('weak-import-btn')) {
        const btn = $('<button id="weak-import-btn"><i class="fas fa-dog"></i>Import</button>');
        btn.click(showDialog);

        $(actions).append(btn);
    }
}

export async function showDialog() {
    new Dialog({
        title: `Import Data`,
        content: await renderTemplate("/modules/weak-import/templates/importForm.html"),
        buttons: {
            import: {
                icon: '<i class="fas fa-file-import"></i>',
                label: "Import",
                callback: html => {
                    const textArea = html.find("#weak-import-textarea")[0];
                    const json = $(textArea).val();

                    importActor(json);
                }
            },
            no: {
                icon: '<i class="fas fa-times"></i>',
                label: "Cancel"
            }
        },
        default: "import"
    }, {
        width: 600,
    }).render(true);
}