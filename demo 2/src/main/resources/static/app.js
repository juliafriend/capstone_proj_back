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
                type:this.state.newType,
                items:this.state.newItems,
                image:this.state.newImage,
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
    changeNewType = (event) => {
        this.setState({
            newType:event.target.value
        });
    }
    changeNewItems = (event) => {
        this.setState({
            newItems:event.target.value
        });
    }
    changeNewImage = (event) => {
        this.setState({
            newImage:event.target.value
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
                type:this.state.updateType,
                items:this.state.updateItems,
                image:this.state.updateImage
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
                    type:'',
                    items:'',
                    image:''
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
        return <>
            <div className="mainContainer">
                <div className="header">
                <h1 className="packMan">PackMan</h1>
                <img className='pic' src="https://i.imgur.com/QgTByIpt.jpg" /> 
                <h3 className='asst'>Your Packing Assistant</h3>
                </div>
            <div className="left">Upcoming Trips:
            <li>Seattle</li>
            <li>Boston</li>
            </div>
            <h2 className="currentList">Current Packing List</h2>
                {
                    this.state.packlists.map(
                        (packlist) => {
                            return (   
                                <div className="container">
                                <h2>{packlist.day}</h2>
                                <h2>{packlist.date}</h2>
                                <h4>{packlist.outfitOne}</h4>
                                <h4>{packlist.outfitTwo}</h4>
                                <h4>{packlist.outfitThree}</h4>
                                
                                <details> <summary>Modify List</summary>
                                <form id={packlist.id} onSubmit={this.updatePacklist}>
                                    <input onKeyUp={this.changeUpdateDay} type="text" placeholder="Day #"/><br/>
                                    <input onKeyUp={this.changeUpdateDate} type="text" placeholder="Date"/><br/>
                                    <input onKeyUp={this.changeUpdateOutfitOne} type="text" placeholder="Outfit 1"/><br/>
                                    <input onKeyUp={this.changeUpdateOutfitTwo} type="text" placeholder="Outfit 2"/><br/>
                                    <input onKeyUp={this.changeUpdateOutfitThree} type="text" placeholder="Outfit 3"/><br/>
                                    <input type="submit" value="Update List"/>
                                </form>
                                <button value={packlist.id} onClick={this.deletePacklist}>Delete</button>
                                </details>
                            </div>   
                    )}
                    )
                }
            <div className="newContainer">
            <form onSubmit={this.createPackList}>
                <input onKeyUp={this.changeNewDay} type="text" placeholder="Day #" /><br/>
                <input onKeyUp={this.changeNewDate} type="text" placeholder="Date" /><br/>
                <input onKeyUp={this.changeNewOutfitOne} type="text" placeholder="Outfit 1" /><br/>
                <input onKeyUp={this.changeNewOutfitTwo} type="text" placeholder="Outfit 2" /><br/>
                <input onKeyUp={this.changeNewOutfitThree} type="text" placeholder="Outfit 3" /><br/>
                <input onKeyUp={this.changeNewType} type="text" placeholder="type" /><br/>
                <input onKeyUp={this.changeNewItems} type="text" placeholder="items" /><br/>
                <input onKeyUp={this.changeNewImage} type="text" placeholder="image" /><br/>
                <input type="submit" value="Add to List" />
            </form>
            </div>
            </div>
            <div className="Outfit Options">
            <h2>Get inspired by some example outfits</h2>
            <div className="mainContainer2">
            {
                    this.state.packlists.map(
                        (packlist) => {
                            return (   
                                <div className="container2">
                                <h4>{packlist.type}</h4>
                                <h4>{packlist.items}</h4>
                                <h4>{packlist.image}</h4>
                            </div>
                    )}
                    )
                }
                <div class="footer">
                <a class="footer-link1" href="https://arcane-garden-99958.herokuapp.com/">Need Travel Recommendations?</a>
                <a class="footer-link2" href="mailto:juliaannefriend@gmail.com.com">Contact Us</a>
                </div>
            </div>
            </div>
        </>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)