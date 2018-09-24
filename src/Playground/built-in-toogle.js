
class Toogle extends React.Component{
    
    constructor(props){
        super(props);
        this.handleVisiblityToogle=this.handleVisiblityToogle.bind(this);
        this.state={
          visiblity:false
        }
    }
    handleVisiblityToogle(){
        this.setState((prevState)=>{
            return{
            visiblity:!prevState.visiblity
            };
        })
    }
    render(){
        return(
            <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={this.handleVisiblityToogle}>{this.state.visiblity ? "Hide Details" : "Show Details"}</button>
            {this.state.visiblity && <p>This is Info</p>}
            </div>
        );
    }
}

ReactDOM.render(<Toogle />,document.getElementById('app'));


















