export async function importActor(json) {
    const actor = await Actor.create({
        name: "TmpImportActor",
        type: "character",
        data: {},
        token: {},
        items: [],
        flags: {}
    });

    await actor.importFromJSON(json);
}