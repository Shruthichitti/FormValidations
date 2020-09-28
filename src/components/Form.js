import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Message from '../components/Message'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            input: {
                name: '',
                email:'',
                phone: 0,
                url:''
            }
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({input});
    }

    handleSubmit(){
        let input = this.state.input;
        var urlTest = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    
        if(input["name"].length >= 3 && input["name"].length <= 30 && /^[a-zA-Z]+$/.test(input["name"])){
            this.setState({isNameValid: true});
        }else{
            this.setState({isNameValid: false});
        }
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input["email"])){
            this.setState({isEmailValid: true});
        }
        else{
            this.setState({isEmailValid: false});
        }
        if(/^[2-9]\d{9}$/.test(input["phone"])){
            this.setState({isPhoneValid: true});
        }
        else{
            this.setState({isPhoneValid: false});
        }
        if(urlTest.test(input["url"])){
            this.setState({isUrlValid:true});
        }
        else{
            this.setState({isUrlValid: false});
        }

    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input 
                    type="text" 
                    name="name"
                    className="name"
                    placeholder="Enter Your Name"
                    value={this.state.name} 
                    onChange={this.handleChange}/>
                <h3>Email:
                </h3>
                <input 
                    type="email" 
                    name="email"
                    className="email"
                    placeholder="Enter Your Email"
                    value={ this.state.email } 
                    onChange={this.handleChange}/>
                <h3>Phone:
                </h3>
                <input 
                    type='tel' 
                    name="phone"
                    className="phone"
                    placeholder="Enter Your Phone Number"
                    value ={this.state.phone} 
                    pattern='[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}' 
                    onChange={this.handleChange}/>
                <h3>Blog URL:
                </h3>
                <input 
                    type ="url" 
                    name="url"
                    className="url"
                    value ={this.state.url} 
                    placeholder="Enter Your Blog URL" 
                    onChange={this.handleChange} />
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" 
                        onClick={() => this.handleSubmit()}>Verify</a>
                </div>
                <Message 
                    isEmailValid ={this.state.isEmailValid}
                    isNameValid ={this.state.isNameValid}
                    isPhoneValid={this.state.isPhoneValid}
                    isUrlValid={this.state.isUrlValid}
                />
            </form>
        </div>);
    }
}

Form.propTypes = {
    name:  PropTypes.string,
    phone: PropTypes.number,
    email: PropTypes.string,
    url:   PropTypes.string
  };

export default Form;
