import React from 'react'
import PropTypes from "prop-types";

export default class HelloMessage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 0,
            newList: [],
            userSession: {},
            loading: false
        }

        //load data 1
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')

        //load data 2
    }
    componentDidMount(){
        console.log('componentDidMount')

        //load data 3 - CORRECT

        this.loadData()
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }


    loadData(){
        this.setState({
            loading: true
        })

        fetch(`${process.env.REACT_APP_API_URL}/profile`)
            .then(response => response.json())
            .then(json => {
                
                console.log(json)

                this.setState({
                    loading: false
                })
                
            })
    }


    shouldComponentUpdate(nextProps, nextState)
    {

        // console.log('shouldComponentUpdate', nextProps)
        // if(nextState.count === this.state.count) return false
        
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
        console.log('render')
        const {logged} = this.props

        const listItems = this.props.items.map((item) => (<a key={item}>{item}</a>))


        return (
            <header>



                {this.state.loading ? 'data loading...' : 'finished'}





                {/* {this.state.count} : <button type="button" onClick={this.onClick.bind(this)}>add count</button>


                {logged ? <div className="my-app"
                    style={{color:'red', width: '30%', backgroundColor: '#fc0'}}>
                    Hello {this.props.name}, great to see you!
                    <br/>

                    {listItems}

                </div> : null}

                {!logged ? <div className="my-app">
                    Please login...
                </div> : null} */}
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