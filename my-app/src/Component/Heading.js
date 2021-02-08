import './Heading.scss';

import React from 'react'


class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    
    // * [Style] h1 hover effect  * //

    _onMouseMove = (e) => {
        const width = this.refs.heading__container.clientWidth;
        const height = this.refs.heading__container.clientHeight;
        //console.log(width, height)
        const oX = (e.nativeEvent.offsetX / width) * 100
        const oY = (e.nativeEvent.offsetY / height) * 100
        //console.log(Math.floor(oX), Math.floor(oY))
        this.setState({
            x: oX,
            y: oY
        });
    }

    _onMouseOut = () => {
        this.setState({
            x: 0,
            y: 0
        });
    }


    render() {
        const { x, y } = this.state;
        const maskStyle = {
            '--maskX': x,
            '--maskY': y 
        }

        return (


            <div className="heading__container" onMouseMove={this._onMouseMove}
            onMouseOut={this._onMouseOut}
            ref="heading__container"
            style={maskStyle}>
                <div className="heading">
                    <h1>Get your pet <br /> a perfect ID photo</h1>
                </div>
                <div className="heading-clone">
                    <h1>Get your pet <br /> a perfect ID photo</h1>
                </div>
            </div>
        )


    }
}

export default Heading

