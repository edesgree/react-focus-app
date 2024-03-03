import { useState } from 'react';
import Ambiance from './components/Ambiance';
import Ambiances from './components/Ambiances';
import { ambianceData, audios } from './data';
function App() {
    const [count, setCount] = useState(0);
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

            <h1>Focus app</h1>


            <Ambiances>
                {ambianceElements}
            </Ambiances>
        </>
    );
}

export default App;
