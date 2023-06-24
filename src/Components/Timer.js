import React, { useContext, useEffect, useRef, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PlayButton from './Buttons/PlayButton';
import PauseButton from './Buttons/PauseButton';
import SettingsButton from './Buttons/SettingsButton';
import SettingsContext from './SettingsContext';

const Timer = () => {

    const [isPaused, setIsPaused] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [mode, setMode] = useState('work') // work/break/null
    const { workMinutes, breakMinutes, showSettings, setShowSettings } = useContext(SettingsContext)

    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)

    const initTimer = () => {
        setSecondsLeft(workMinutes * 60)
    }

    const switchMode = () => {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? workMinutes : breakMinutes) * 60
        setMode(nextMode)
        modeRef.current = nextMode
        setSecondsLeft(nextSeconds)
        secondsLeftRef.current = nextSeconds
    }

    const tick = () => {
        secondsLeftRef.current--
        setSecondsLeft(secondsLeftRef.current)
    }

    useEffect(() => {
        initTimer()

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode()
            }
            tick()
        }, 1000)

        return clearInterval(interval);
    }, [showSettings, setShowSettings])

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
                {isPaused ? <PlayButton /> : <PauseButton />}
            </div>
            <div style={{ marginTop: '20px' }}>
                <SettingsButton onClick={() => setShowSettings(true)} />
            </div>
        </div>
    )
}

export default Timer