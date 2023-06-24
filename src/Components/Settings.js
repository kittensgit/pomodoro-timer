import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import './Slider.css'
import SettingsContext from './SettingsContext'

const Settings = () => {

    const { workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes } = useContext(SettingsContext)

    return (
        <div style={{ textAlign: "left" }}>
            <label>Work: {workMinutes}:00</label>
            <ReactSlider
                className='slider'
                thumbClassName='thumb' // это один из элементов ползунка, который можно использовать для перетаскивания и изменения выбранного значения ползунка.
                trackClassName='track' //сам ползунок по которому перетпскиваем thumb
                value={workMinutes}
                onChange={newValue => setWorkMinutes(newValue)}
                min={1}
                max={120}
            />
            <label>Break: {breakMinutes}:00</label>
            <ReactSlider
                className='slider green'
                thumbClassName='thumb'
                trackClassName='track'
                value={breakMinutes}
                onChange={newValue => setBreakMinutes(newValue)}
                min={1}
                max={120}
            />
        </div>
    )
}

export default Settings