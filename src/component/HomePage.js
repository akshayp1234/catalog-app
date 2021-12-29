import React from 'react'
import Section from './Section'
const HomePage = () => {
    return (
        <div>
            <Section title={"Model-S"} image={require('../images/model-s.jpg')} />
            <Section title={"Model-3"} image={require('../images/model-3.jpg')} />
            <Section title={"Model-X"} image={require('../images/model-x.jpg')} />
            <Section title={"Model-Y"} image={require('../images/model-y.jpg')} />
        </div>
    )
}

export default HomePage
