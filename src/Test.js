import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputrows: [{ row: null }]

        }
    }
    // createUI = () => {
    //     return this.state.inputrows.map((element, i) => (
    //         <div key={i} className="row-container">
    //             <div className="input-container">
    //                 <label>Session Name </label>
    //                 <input
    //                     name="Session Name"
    //                     type="text"
    //                     value={element.row || ""}
    //                     onChange={this.handleChange.bind(this, i)}
    //                     className="inputbox"
    //                 />
    //             </div>
    //             <div className="input-container">
    //                 <label>Acronym </label>
    //                 <input
    //                     name="Acronym"
    //                     type="text"
    //                     value={element.row || ""}
    //                     onChange={this.handleChange.bind(this, i)}
    //                     className="inputbox"
    //                 />
    //             </div>
    //             <div className="input-container">
    //                 <label>From </label>
    //                 <input
    //                     name="From"
    //                     type="text"
    //                     value={element.row || ""}
    //                     onChange={this.handleChange.bind(this, i)}
    //                     className="inputbox"
    //                 />
    //             </div>
    //             <div className="input-container">
    //                 <label>To </label>
    //                 <input
    //                     name="To"
    //                     type="text"
    //                     value={element.row || ""}
    //                     onChange={this.handleChange.bind(this, i)}
    //                     className="inputbox"
    //                 />
    //             </div>
    //         </div>
    //     ))
    // }
    handleChange(i, event) {
        let values = [...this.state.inputrows];
        values[i].value = event.target.value;
        this.setState({ values });
    }
    
    addClick(){
        this.setState(prevState => ({
            inputrows: [...prevState.inputrows, {row:null}]
        }))
    }
    render() {
        return (
            <div className="main">
                <h2 className="heading">Day Schedule</h2>
                {this.state.inputrows.map((element, i) => (
                    <div key={i} className="row-main-container">
                        <div className="row-container">
                        <div className="input-container">
                            <label>Session Name </label>
                            <input
                                name="Session Name"
                                type="text"
                                value={element.row || ""}
                                onChange={this.handleChange.bind(this, i)}
                                className="inputbox"
                            />
                        </div>
                        <div className="input-container">
                            <label>Acronym </label>
                            <input
                                name="Acronym"
                                type="text"
                                value={element.row || ""}
                                onChange={this.handleChange.bind(this, i)}
                                className="inputbox"
                            />
                        </div>
                        <div className="input-container">
                            <label>From </label>
                            <input
                                name="From"
                                type="text"
                                value={element.row || ""}
                                onChange={this.handleChange.bind(this, i)}
                                className="inputbox"
                            />
                        </div>
                        <div className="input-container">
                            <label>To </label>
                            <input
                                name="To"
                                type="text"
                                value={element.row || ""}
                                onChange={this.handleChange.bind(this, i)}
                                className="inputbox"
                            />
                        </div>
                        <FontAwesomeIcon icon={faTrashAlt} className="icons"/>
                        </div>
                       <hr className="line"></hr>
                    </div>
                     
                ))}
               <button onClick={() => this.addClick()}  > Add new Session</button>
            </div>
        )
    }
}
export default Test;
