export async function getAmbiances() {
    try {
        const response = await fetch('/api/ambiances');
        const ambiances = await response.json();
        console.log('fetching ambiances', ambiances);
        return ambiances.ambiances;
    }
    catch (err) {
        console.log('Error getting ambiances', err);
        throw err;
    }
}

export async function getAudios() {
    try {
        const response = await fetch('/api/audios');
        const audios = await response.json();
        console.log('fetching audios', audios);
        return audios.audios;
    }
    catch (err) {
        console.log('Error getting audios', err);
        throw err;
    }
}