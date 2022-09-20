class App extends React.Component {
    state = {
        packlists:[]
    }

    componentDidMount = () => {
        axios.get('/pack').then(
            (response) => {
                this.setState({
                    packlists:response.data
                })
            }
        )
    }

    createPackList = (event) => {
        event.preventDefault();
        axios.post(
            '/pack',
            {
                day:this.state.newDay,
                date:this.state.newDate,
                outfitOne:this.state.newOutfitOne,
                outfitTwo:this.state.newOutfitTwo,
                outfitThree:this.state.newOutfitThree,
            }
        ).then(
            (response) => {
                this.setState({
                    packlists:response.data
                })
            }
        )
    }

    changeNewDay = (event) => {
        this.setState({
            newDay:event.target.value
        });
    }

    changeNewDate = (event) => {
        this.setState({
            newDate:event.target.value
        });
    }
    changeNewOutfitOne = (event) => {
        this.setState({
            newOutfitOne:event.target.value
        });
    }
    changeNewOutfitTwo = (event) => {
        this.setState({
            newOutfitTwo:event.target.value
        });
    }
    changeNewOutfitThree = (event) => {
        this.setState({
            newOutfitThree:event.target.value
        });
    }

    deletePacklist = (event) => {
        axios.delete('/pack/' + event.target.value).then(
            (response) => {
                this.setState({
                    packlists:response.data
                })
            }
        )
    }

    updatePacklist = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/pack/' + id,
            {
                day:this.state.updateDay,
                date:this.state.updateDate,
                outfitOne:this.state.updateOutfitOne,
                outfitTwo:this.state.updateOutfitTwo,
                outfitThree:this.state.updateOutfitThree,
            }
        ).then(
            (response) => {
                this.setState({
                    packlists:response.data,
                    day:'',
                    date:'',
                    outfitOne:'',
                    outfitTwo:'',
                    outfitThree:'',
                })
            }
        )
    }

    changeUpdateDay = (event) => {
        this.setState(
            {
                updateDay:event.target.value
            }
        )
    }

    changeUpdateDate = (event) => {
        this.setState(
            {
                updateDate:event.target.value
            }
        )
    }
    changeUpdateOutfitOne = (event) => {
        this.setState(
            {
                updateOutfitOne:event.target.value
            }
        )
    }
    changeUpdateOutfitTwo = (event) => {
        this.setState(
            {
                updateOutfitTwo:event.target.value
            }
        )
    }    
    changeUpdateOutfitThree = (event) => {
        this.setState(
            {
                updateOutfitThree:event.target.value
            }
        )
    }
    render = () => {
        return <div>
            <h2>Create new Packing List</h2>
            <form onSubmit={this.createPackList}>
                <input onKeyUp={this.changeNewDay} type="text" placeholder="Day #" /><br/>
                <input onKeyUp={this.changeNewDate} type="text" placeholder="Date" /><br/>
                <input onKeyUp={this.changeNewOutfitOne} type="text" placeholder="Outfit 1" /><br/>
                <input onKeyUp={this.changeNewOutfitTwo} type="text" placeholder="Outfit 2" /><br/>
                <input onKeyUp={this.changeNewOutfitThree} type="text" placeholder="Outfit 3" /><br/>
                <input type="submit" value="Create List" />
            </form>
            <h2>Current Packing List</h2>
            <ul>
                {
                    this.state.packlists.map(
                        (packlist, index) => {
                            return    <li key={index}>
                                {packlist.day}
                                {packlist.date}
                                {packlist.outfitOne}
                                {packlist.outfitTwo}
                                {packlist.outfitThree}
                                
                                <button value={packlist.id} onClick={this.deletePacklist}>DELETE</button>

                                <form id={packlist.id} onSubmit={this.updatePacklist}>
                                    <input onKeyUp={this.changeUpdateDay} type="text" placeholder="Day #"/><br/>
                                    <input onKeyUp={this.changeUpdateDate} type="text" placeholder="Date"/><br/>
                                    <input onKeyUp={this.changeUpdateOutfitOne} type="text" placeholder="Outfit 1"/><br/>
                                    <input onKeyUp={this.changeUpdateOutfitTwo} type="text" placeholder="Outfit 2"/><br/>
                                    <input onKeyUp={this.changeUpdateOutfitThree} type="text" placeholder="Outfit 3"/><br/>
                                    <input type="submit" value="Update List"/>
                                </form>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
