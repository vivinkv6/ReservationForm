import React, { Component } from 'react';
import Head from './heading';
import "./main.css";
class Main extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                
<fieldset className='fieldset'>
<div className='row'>
<Head/>
<br />
<div className='col-6'>
<label >Name:</label>
</div>
<div className='col-6'>
<input type="text" name="name" className='form'/><br />
</div>
<div className='col-6'>
<label >Email:</label>
</div>
<div className='col-6'>
<input type="email" name="email"  className='form'/><br />
</div>
<div className='col-6'>
<label >Mobile:</label>
</div>
<div className='col-6'>
<input type="number" name="mobile"  className='form'/><br />
</div>

<div className='col-6'>
<label >Journey Place:</label>
</div>
<div className='col-6'>
<input type="text" name="place"  className='form'/><br />
</div>

<div className='col-6'>
<label >Date Of Departure:</label>
</div>
<div className='col-6'>
<input type="date" name="mobile"  className='form'/><br />
</div>

<div className='col-6'>
<label >Date Of Return:</label>
</div>
<div className='col-6'>
<input type="date" name="mobile"  className='form'/>
</div>

<div className='col-6'>
<label >Mode of Journey:</label>
</div>
<div className='col-6'>
<select name="journey" className='form'>
    <option  name="train">Train</option>
    <option  name="bus">Bus</option>
    <option  name="airways">Airways</option>
</select>
</div>
<div className='col-6'>
<label >Any other Requirements You Needed:</label>
</div>
<div className='col-6'>
<textarea name="" id="" cols="40" rows="5"></textarea>
</div>

<br />
</div>


<div className="col-12">
    <button type='button' >Submit</button>
</div>
</fieldset>
</div>

        );
    }
}
 
export default Main;