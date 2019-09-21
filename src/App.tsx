import React, { Component } from 'react'
import './App.scss'
import Monster from './interfaces/Monster'
import SearchBox from './components/SearchBox'
import CardList from './components/CardList'

interface AppState {
  monsters: Monster[]
  searchField: string
}

export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render(): JSX.Element {
    const { monsters, searchField } = this.state
    const lcSearchField = searchField.toLowerCase()

    const filteredMonsters = monsters.filter(el =>
      el.name.toLowerCase().includes(lcSearchField)
    )

    return (
      <div className="App">
        <h1>Robot Rolodex</h1>
        <SearchBox
          placeholder="search robots"
          handleChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            this.setState({ searchField: e.target.value })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
