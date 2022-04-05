import React, { Component } from 'react';
import './table.css';
class TableData extends Component {
   
    render() { 
        return (

            <div className="row">
    <div className="col-12">

    <table>
                    <tr>
                        <th>Name</th> 
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Place</th>
                        <th>Date Of Departure</th>
                        <th>Date Of Return</th>
                        
                        <th>Requirements</th>       
                    </tr>
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.email}</td>
                        <td>{this.props.mobile}</td>
                        <td>{this.props.place}</td>
                        <td>{this.props.departure}</td>
                        <td>{this.props.return}</td>
                        <td>{this.props.requirements}</td>
                    </tr>
                </table>

    </div>
</div>
        );
    }
}
 
export default TableData;