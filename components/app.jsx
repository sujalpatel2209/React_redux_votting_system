import React, {Component} from 'react';
import store from '../redux/store'
import { connect } from 'react-redux'

class App extends Component {

    // Submit favorite JS Vote
    submitVote (jsNumber, event) {
        store.dispatch({
            type: 'VOTE',
            payload: {
                jsNumber,
                vote: 1
            }
        })
    }

    render() {
        return (
            <Provider store={store}>
            <div className={'container'}>
                <div className={'row, text-center'}>
                    <div className={'col-lg-12'}>
                        <h1><b>Vote your favorite JS</b></h1>
                    </div>
                </div>
                <div className={'row, text-center'}>
                    <div className={'col-lg-2'}>
                        <h2>React</h2>
                        <p>{store.getState().react}</p>
                        {
                            (this.state.react == 0) ? <button onClick={this.submitVote.bind(this, 1)} 
                                className={'btn btn-primary'}>Vote</button>
                                : <button onClick={this.submitVote.bind(this, 1)}
                                className={'btn btn-success'}>Un Vote</button>
                        }
                    </div>
                    <div className={'col-lg-2'}>
                        <h2>Vue</h2>
                        <p>{store.getState().vue}</p>
                        {
                            (this.state.vue == 0) ? <button onClick={this.submitVote.bind(this, 2)} className={'btn btn-primary'}>Vote</button>
                            : <button onClick={this.submitVote.bind(this, 2)} className={'btn btn-success'}>Un Vote</button>
                        }
                    </div>
                    <div className={'col-lg-2'}>
                        <h2>Angular</h2>
                        <p>{store.getState().angular}</p>
                        {
                            (this.state.angular == 0) ? <button onClick={this.submitVote.bind(this, 3)} className={'btn btn-primary'}>Vote</button> 
                            : <button onClick={this.submitVote.bind(this, 3)} className={'btn btn-success'}>Un Vote</button> 
                        }
                        
                    </div>
                    <div className={'col-lg-2'}>
                        <h2>NodeJs</h2>
                        <p>{store.getState().nodejs}</p>
                        {
                            (this.state.nodejs == 0) ? <button onClick={this.submitVote.bind(this, 4)} className={'btn btn-primary'}>Vote</button>
                            : <button onClick={this.submitVote.bind(this, 4)} className={'btn btn-success'}>Un Vote</button> 
                        }
                        
                    </div>
                    <div className={'col-lg-2'}>
                        <h2>Meteor</h2>
                        <p>{store.getState().meteor}</p>
                        {
                            (this.state.meteor == 0) ? <button onClick={this.submitVote.bind(this, 5)} className={'btn btn-primary'}>Vote</button> 
                            : <button onClick={this.submitVote.bind(this, 5)} className={'btn btn-success'}>Un Vote</button>
                        }
                        
                    </div>
                    <div className={'col-lg-2'}>
                        <h1>Ember</h1>
                        <p>{store.getState().ember}</p>
                        {
                            (this.state.ember == 0) ? <button onClick={this.submitVote.bind(this, 6)} className={'btn btn-primary'}>Vote</button>
                            : <button onClick={this.submitVote.bind(this, 6)} className={'btn btn-success'}>Un Vote</button>
                        }
                    </div>
                </div>
            </div>
            </Provider>
        );
    }
}

function mapStateToProps(state){
    console.log('state', state);
}

export default connect(mapStateToProps)(App);