import React, { Component } from 'react';
import Head from './heading';
import "./main.css";
import TableData from './table';
class Main extends Component {
    state = {
        name: "",
        email: "",
        mobile: "",
        place: "",
        departure: "",
        return: "",
        journey: "",
        requirements: ""
    }

    onchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    onsubmit = () => {
        console.log(this.state);
        alert("Reservation submitted successfully");
        alert("check your console");
    }
    render() {
        return (
            <div className='container-fluid'>

                <fieldset className='fieldset'>
                    <div className='row'>
                        <Head />
                        <br />
                        <div className='col-6'>
                            <label >Name:</label>
                        </div>
                        <div className='col-6'>
                            <input type="text" onChange={this.onchange} name="name" className='form' /><br />
                        </div>
                        <div className='col-6'>
                            <label >Email:</label>
                        </div>
                        <div className='col-6'>
                            <input type="email" onChange={this.onchange} name="email" className='form' /><br />
                        </div>
                        <div className='col-6'>
                            <label >Mobile:</label>
                        </div>
                        <div className='col-6'>
                            <input type="number" onChange={this.onchange} name="mobile" className='form' /><br />
                        </div>

                        <div className='col-6'>
                            <label >Journey Place:</label>
                        </div>
                        <div className='col-6'>
                            <input type="text" onChange={this.onchange} name="place" className='form' /><br />
                        </div>

                        <div className='col-6'>
                            <label >Date Of Departure:</label>
                        </div>
                        <div className='col-6'>
                            <input type="date" onChange={this.onchange} name="departure" className='form' /><br />

                        </div>

                        <div className='col-6'>
                            <label >Date Of Return:</label>
                        </div>
                        <div className='col-6'>
                            <input type="date" onChange={this.onchange} name="return" className='form' />
                        </div>

                        <div className='col-6'>
                            <label >Mode of Journey:</label>
                        </div>
                        <div className='col-6'>
                            <select className='form' name='journey' onChange={this.onchange}>
                                <option name="train" value="Train" onChange={this.onchange}>Train</option>
                                <option name="bus" value="Bus" onChange={this.onchange}>Bus</option>
                                <option name="airways" value="Airways" onChange={this.onchange}>Airways</option>
                            </select>
                        </div>
                        <div className='col-6'>
                            <label >Any other Requirements You Needed:</label>
                        </div>
                        <div className='col-6'>
                            <textarea name="requirements" onChange={this.onchange} cols="auto" rows="5" className='form'></textarea>
                        </div>

                        <br />
                    </div>


                    <div className="col-12">
                        <button type='button' onClick={this.onsubmit} >Submit</button>
                       
                    </div>
                </fieldset>

               <TableData name={this.state.name} email={this.state.email} mobile={this.state.mobile}
                        place={this.state.place}  requirements={this.state.requirements} return={this.state.return}
                        departure={this.state.departure}/>
                </div>
                

        );
    }
}

export default Main;
