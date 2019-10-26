import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';


class App extends React.Component {
	data = this.props.data;
	currId=148;
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 1
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
		this.setState({
			filterText: value
		})
		//console.log('filterText:', this.state.filterText);
		//
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
		this.setState({
			selectedBuilding: id
		})
  }
	newId(){
		this.currId = this.currId+1;
		return(this.currId);
	}
	addBuilding(newEntry){
		let id = this.newId();
		//console.log('mydata before:',this.data);
		const code = newEntry.code.value;
		const name = newEntry.name.value;
		const address = newEntry.address.value;
		const coordinate = newEntry.coordinate;
		//console.log('newEntry:',newEntry);
		this.data = this.data.concat([{id, code, name, address, coordinate}]);
		//console.log('mydata after:',this.data);
	}


  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
					filterText={this.state.filterText}
					filterUpdate={this.filterUpdate.bind(this)}
				/>
        <main>
          <div className="row">
            <div className="column1">
							<AddBuilding addBuilding={this.addBuilding.bind(this)}/>
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.data}
										filterText={this.state.filterText}
										selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
								selectedBuilding={this.state.selectedBuilding}
								data={this.data}
							/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
