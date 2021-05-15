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

    delete(i){
        console.log("click ")
        let inputbox= [...this.state.inputrows]
        inputbox.splice(i,1)
        console.log(inputbox)
        this.setState({
            inputrows:inputbox
        })
       
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
                                // value={element.row || ""}
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
                        <FontAwesomeIcon icon={faTrashAlt} onClick={()=> this.delete(i)} className="icons"/>
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
