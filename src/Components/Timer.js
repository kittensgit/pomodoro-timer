import React, { useContext, useEffect, useRef, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PlayButton from './Buttons/PlayButton';
import PauseButton from './Buttons/PauseButton';
import SettingsButton from './Buttons/SettingsButton';
import SettingsContext from './SettingsContext';

const Timer = () => {

    const [isPaused, setIsPaused] = useState(true)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [mode, setMode] = useState('work') // work/break/null
    const { workMinutes, breakMinutes, showSettings, setShowSettings } = useContext(SettingsContext)

    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)

    const initTimer = () => {
        secondsLeftRef.current = workMinutes * 60
        setSecondsLeft(secondsLeftRef.current)
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

        return () => clearInterval(interval);
    }, [showSettings, setShowSettings])

    const red = '#f54e4e';
    const green = '#4aec8c'

    const totalSeconds = mode === 'work' ? workMinutes * 60 : breakMinutes * 60
    const persentpage = Math.round(secondsLeft / totalSeconds * 100)

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds

    return (
        <div>
            <CircularProgressbar
                value={persentpage}
                text={minutes + ':' + seconds}
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: mode === 'work' ? red : green,
                    trailColor: 'rgba(255, 255, 255, .2)'
                })}
            />
            <div style={{ marginTop: '20px' }}>
                {isPaused
                    ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false }} />
                    : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true }} />}
            </div>
            <div style={{ marginTop: '20px' }}>
                <SettingsButton onClick={() => setShowSettings(true)} />
            </div>
        </div>
    )
}

export default Timer