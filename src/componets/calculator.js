import React from "react"
class calculator extends React.Component{
constructor(props){
    super(props)
    this.state = {
        vewer:"0",
        Fnumber:"",
        Snumber:"",
        action:""
    }
}
addBtn(){
    this.state.action="+"
    this.state.Fnumber = ""
    this.state.Snumber = ""
    }
minusBtn(){
        this.state.action="-"
        this.state.Fnumber = ""
        this.state.Snumber = ""
        } 
devideBtn(){
            this.state.action="/"
            this.state.Fnumber = ""
            this.state.Snumber = ""
}   
multiplyBtn(){
    this.state.action="*"
    this.state.Fnumber = ""
    this.state.Snumber = ""
    }
total(){
this.total = this.state.Fnumber.action
}

render(){
    return(
        <>
        <form>
            <input type="text" onChange={this.state.vewer}/>
            <input type="submit" onClick={this.addBtn} value="Add"/>
            <input type="submit" onClick={this.minusBtn} value="Minus"/>
            <input type="submit" onClick={this.devideBtn} value="Devide"/>
            <input type="submit" onClick={this.multiplyBtn} value="Multiply"/>
        </form>
        <span>{this.total}</span>
        </>
    )
}
}


export default calculator;