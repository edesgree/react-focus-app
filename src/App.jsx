import Ambiances from './components/Ambiances';
import { PlayPauseProvider } from './components/PlayPauseContext';

function App() {


    return (
        <>
            <h1>Focus app</h1>
            <PlayPauseProvider>
                <Ambiances />
            </PlayPauseProvider>
        </>
    );
}

export default App;
