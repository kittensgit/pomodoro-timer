import React, { useContext } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PlayButton from './Buttons/PlayButton';
import PauseButton from './Buttons/PauseButton';
import SettingsButton from './Buttons/SettingsButton';
import SettingsContext from './SettingsContext';

const Timer = () => {

    const { showSettings, setShowSettings } = useContext(SettingsContext)

    const red = '#f54e4e';
    const green = '#4aec8c'

    return (
        <div>
            <CircularProgressbar
                value={60}
                text={`60%`}
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: red,
                    trailColor: 'rgba(255, 255, 255, .2)'
                })}
            />
            <div style={{ marginTop: '20px' }}>
                <PlayButton />
                <PauseButton />
            </div>
            <div style={{ marginTop: '20px' }}>
                <SettingsButton onClick={() => setShowSettings(true)} />
            </div>
        </div>
    )
}

export default Timer