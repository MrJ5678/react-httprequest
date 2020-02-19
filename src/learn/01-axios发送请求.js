import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class Demo extends React.Component {
    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this)}>发送请求</button>
                <button onClick={this.handleAdd.bind(this)}>添加书籍</button>
            </>
        )
    }
    handleClick() {
        axios.get('url').then(res => {
            console.log(res.data)
        })
    }
    handleAdd() {
        axios.post('usl', {
            name: '水浒传',
            desc: 'momomo'
        })
        .then(res => {
            console.log(res)
        })
    }

}
ReactDOM.render(<Demo />, document.getElementById('root'));
