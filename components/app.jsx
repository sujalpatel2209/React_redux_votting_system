import React, {Component} from 'react';
import store from '../redux/store'

class App extends Component {

constructor(props) {
        super(props);

        this.state = {
            react: 0,
            vue: 0,
            angular: 0,
            nodejs: 0,
            meteor: 0,
            ember: 0
        }
    }

    // Submit favorite JS Vote

    submitVote (jsNumber, event) {

        switch (jsNumber){
            case 1:
                this.setState({
                    react: this.state.react+1
                })
                break;
            case 2:
                this.setState({
                    vue: 1
                })
                break;
            case 3:
                this.setState({
                    angular: 1
                })
                break;
            case 4:
                this.setState({
                    nodejs: 1
                })
                break;
            case 5:
                this.setState({
                    meteor: 1
                })
                break;
            case 6:
                this.setState({
                    ember: 1
                })
                break;
        }

    }

    render() {
        return (
            <div className={'container'}>
                <div className={'row, text-center'}>
                    <div className={'col-lg-12'}>
                        <h1><b>Vote your favorite JS</b></h1>
                    </div>
                </div>
                <div className={'row, text-center'}>
                    <div className={'col-lg-2'}>
                        <h2>React</h2>
                        <p>{this.state.react}</p>
                        {
                            (this.state.react == 0) ? <button onClick={this.submitVote.bind(this, 1)} 
                                className={'btn btn-primary'}>Vote</button>
                                : <button onClick={this.submitVote.bind(this, 1)}
                                className={'btn btn-success'}>Un Vote</button>
                        }
                    </div>
                    <div className={'col-lg-2'}>
                        <h2>Vue</h2>
                        <p>{this.state.vue}</p>
                        {
                            (this.state.vue == 0) ? <button onClick={this.submitVote.bind(this, 2)} className={'btn btn-primary'}>Vote</button>
                            : <button onClick={this.submitVote.bind(this, 2)} className={'btn btn-success'}>Un Vote</button>
                        }
                    </div>
                    <div className={'col-lg-2'}>
                        <h2>Angular</h2>
                        <p>{this.state.angular}</p>
                        {
                            (this.state.angular == 0) ? <button onClick={this.submitVote.bind(this, 3)} className={'btn btn-primary'}>Vote</button> 
                            : <button onClick={this.submitVote.bind(this, 3)} className={'btn btn-success'}>Un Vote</button> 
                        }
                        
                    </div>
                    <div className={'col-lg-2'}>
                        <h2>NodeJs</h2>
                        <p>{this.state.nodejs}</p>
                        {
                            (this.state.nodejs == 0) ? <button onClick={this.submitVote.bind(this, 4)} className={'btn btn-primary'}>Vote</button>
                            : <button onClick={this.submitVote.bind(this, 4)} className={'btn btn-success'}>Un Vote</button> 
                        }
                        
                    </div>
                    <div className={'col-lg-2'}>
                        <h2>Meteor</h2>
                        <p>{this.state.meteor}</p>
                        {
                            (this.state.meteor == 0) ? <button onClick={this.submitVote.bind(this, 5)} className={'btn btn-primary'}>Vote</button> 
                            : <button onClick={this.submitVote.bind(this, 5)} className={'btn btn-success'}>Un Vote</button>
                        }
                        
                    </div>
                    <div className={'col-lg-2'}>
                        <h1>Ember</h1>
                        <p>{this.state.ember}</p>
                        {
                            (this.state.ember == 0) ? <button onClick={this.submitVote.bind(this, 6)} className={'btn btn-primary'}>Vote</button>
                            : <button onClick={this.submitVote.bind(this, 6)} className={'btn btn-success'}>Un Vote</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;