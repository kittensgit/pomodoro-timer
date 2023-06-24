import React from 'react'
import ReactSlider from 'react-slider'
import './Slider.css'

const Settings = () => {
    return (
        <div style={{ textAlign: "left" }}>
            <label>Work minutes:</label>
            <ReactSlider
                className='slider'
                thumbClassName='thumb' // это один из элементов ползунка, который можно использовать для перетаскивания и изменения выбранного значения ползунка.
                trackClassName='track' //сам ползунок по которому перетпскиваем thumb
                value={45}
                min={1}
                max={120}
            />
            <label>Break minutes:</label>
            <ReactSlider
                className='slider green'
                thumbClassName='thumb' 
                trackClassName='track'
                value={45}
                min={1}
                max={120}
            />
        </div>
    )
}

export default Settings