import './MeetOurTeam.scss';

import React from 'react'


class MeetOurTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    
    // * [Style] h1 hover effect  * //

    _onMouseMove = (e) => {
        const width = this.refs.section__header.clientWidth;
        const height = this.refs.section__header.clientHeight;
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


            <div className="section__header" onMouseMove={this._onMouseMove}
            onMouseOut={this._onMouseOut}
            ref="section__header"
            style={maskStyle}>

                    <h2 className='section-title'>Meet our team</h2>


                <h2 className='section-title-clone'>Meet our team</h2>

            </div>
        )


    }
}

export default MeetOurTeam

