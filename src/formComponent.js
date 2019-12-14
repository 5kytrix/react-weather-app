import React from 'react';
import './form.style.css'

const Form = props =>{
    return(
        <div className="container">
            <div>{props.error?error():null}</div>
            <form onSubmit={props.loadweather}>
            <div className="row" style={{paddingBottom:'25px'}}>
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="city"/>
                    <h3 style={{textAlign:'left',color:'white',paddingTop:'10px'}}>City</h3>
                </div>
                <div className="col-md-3">
                <input type="text" className="form-control" name="country" value="India"/>
                <h3 style={{textAlign:'left',color:'white',paddingTop:'10px'}}>Country</h3>
                </div>
                <div className="col-md-3 mt-md-0 text-md-left">
                    <button className="btn btn-warning" style={{position:'absolute'}}>Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    );
};

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert"><h5>Please Enter City and Country</h5></div>
    )
}

export default Form;