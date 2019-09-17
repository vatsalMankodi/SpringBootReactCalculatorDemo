import React from 'react'
import axios from 'axios';

class CalculatorComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first : 0,
            second : 0,
            operation: '+',
            answer : 0
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getUpdate = this.getUpdate.bind(this)
    }

    componentDidMount(){
        this.getUpdate();
    }

    handleChange(event){
        
        const target = event.target
        const value = target.value
        const name = target.name
        
        this.setState({
            [name] : value
        });

    }

    getUpdate = () => {
        let url = 'http://localhost:8090/calculate'
        axios.post(url, {
            first: this.state.first,
            second: this.state.second,
            operation: this.state.operation

            })
          .then((response) =>  {
            console.log(response);
            this.setState({answer: response.data})
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    handleSubmit(event){
        console.log(event.target.value)
        
        this.setState({operation: event.target.value})
        this.getUpdate()
        event.preventDefault()
    }

    render(){
        return <div>
            
            <h2>CalculatorComponent</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Number: 
                    <input type="text" name="first" value={this.state.first} onChange={this.handleChange} ></input>
                </label>
                <br />
                <br />
                <label>
                    Second Number: 
                    <input type="text" name="second" value={this.state.second} onChange={this.handleChange}></input>
                </label>
           
                <br />
                <br />
                +<input 
                    type="radio"
                    value='+'
                    name="operation"
                    checked={this.state.operation==='+'}
                    onChange={this.handleChange}
                />
                <br/>
                -<input 
                    type="radio"
                    value='-'
                    name="operation"
                    checked={this.state.operation==='-'}
                    onChange={this.handleChange}
                />
                <br/>
                *<input 
                    type="radio"
                    value='*'
                    name="operation"
                    checked={this.state.operation==='*'}
                    onChange={this.handleChange}
                />
                <br/>
                /<input 
                    type="radio"
                    value='/'
                    name="operation"
                    checked={this.state.operation==='/'}
                    onChange={this.handleChange}
                />
                    <br/>
                
       
                <br />
                <br />
                <input type="submit"></input>
                <label>
                    Answer: {this.state.answer}
                </label>

            </form>

        </div>
    }
}

export default CalculatorComponent;