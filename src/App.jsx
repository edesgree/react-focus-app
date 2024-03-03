import cat from './assets/audio/cat.wav';
import Ambiance from './components/Ambiance';
import Ambiances from './components/Ambiances';
import { ambianceData, audios } from './data';
function App() {

    const ambianceElements = ambianceData.map((ambiance) => {
        const ambianceAudios = ambiance.audiosId.map((audioId) => {
            return audios.find((audio) => audio.id === audioId);
        });
        console.log(ambianceAudios);
        return <Ambiance key={ambiance.id} ambianceId={ambiance.id} name={ambiance.name} audios={ambianceAudios} />;
    }
    );
    return (
        <>
            test<audio controls src={cat} ></audio>
            <h1>Focus app</h1>


            <Ambiances>
                {ambianceElements}
            </Ambiances>
        </>
    );
}

export default App;
