import React, { Component } from 'react'
import PropTypes from 'prop-types';




export class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.item.completed? 
            'line-through':'none'
        }
    }


    render() {
        const {id, title} = this.props.item
        return (
            <div style={this.getStyle()}>
                <p>
                   <input type = "checkbox" onChange = 
                   {this.props.markComplete.bind(this,id)}/>
                    {' -- ' +  title}
                    <button style={btnStyle} onClick =
                    {this.props.deleteItem.bind(this,id)}
                    >del</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background:'red',
    color:'white',
    padding:'5px 10px',
    border: 'none',
    borderRadius: '50%',
    float:'right'

}

TodoItem.propTypes = {
    item:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    deleteItem:PropTypes.func.isRequired

}

export default TodoItem
