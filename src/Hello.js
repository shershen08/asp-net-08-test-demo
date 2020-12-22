import React from 'react'
import PropTypes from "prop-types";

export default class HelloMessage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 0,
            newList: [],
            userSession: {}
        }
    }
    componentWillUnmount(){
        //
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){

    }
    shouldComponentUpdate(propsNew, propsOld)
    {
        return true
    }
    
    putToZero(){
        this.setState({
            count: 0
        })
    }
    onClick() {
        console.log('setState')
        this.setState(
            prev => ({
            count: ++prev.count
      }))
    }
    
    // called when props or state changes
    render() {
        const {logged} = this.props

        const listItems = this.props.items.map((item) => (<a key={item}>{item}</a>))


        return (
            <header>
                {this.state.count} : <button type="button" onClick={this.onClick.bind(this)}>add count</button>


                {logged ? <div className="my-app"
                    style={{color:'red', width: '30%', backgroundColor: '#fc0'}}>
                    Hello {this.props.name}, great to see you!
                    <br/>

                    {listItems}

                </div> : null}

                {!logged ? <div className="my-app">
                    Please login...
                </div> : null}
            </header>
); }
}

HelloMessage.propTypes = {
    name: PropTypes.string,
    logged: PropTypes.bool,
    items: PropTypes.array
}
HelloMessage.defaultProps = {
    items: [],
    logged: true
}