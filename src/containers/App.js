import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Tab from './Tab';
//import Card from './card';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'


class App extends Component {
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      characters: [],
      homeworld: [],
      species: [],
      films: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

  }

  componentDidMount() {
    //const rebels = [0, 1, 2, 4, 9, 12, 13];
    //const empire = [3, 11, 19, 20];
    const users = [1, 2, 3, 4, 5, 10, 12, 13, 14, 21, 22]

    let urls = [];

    for (let i = 0; i < users.length; i++) {

      urls.push("https://swapi.co/api/people/" + users[i] + "/")
    }//creates an array of all the urls we will use

    let chars = [];
    let hws = [];
    let spcs = [];
    let flms = [];
    Promise.all(urls.map(value => {
      return fetch(value).then(resp => resp.json())
    })).then(user => {
      for (let i = 0; i < urls.length; i++) {
        chars.push(user[i].name);
        hws.push(user[i].homeworld);
        spcs.push(user[i].species);
        flms.push(user[i].films);

      }

      this.setState({ characters: chars });
      this.setState({ homeworld: hws });
      this.setState({ species: spcs });
      this.setState({ films: flms });

      let { homeworld } = this.state;
      hws = [];
      //console.log(homeworld);

      Promise.all(homeworld.map(value => {
        return fetch(value).then(resp => resp.json())
      })).then(hw => {
        for (let i = 0; i < urls.length; i++) {
          hws.push(hw[i].name);

          //console.log(hws);
        }
        this.setState({ homeworld: hws });
      })

      let { species } = this.state;
      spcs = [];

      Promise.all(species.map(value => {
        return fetch(value).then(resp => resp.json())
      })).then(sp => {
        for (let i = 0; i < urls.length; i++) {
          spcs.push(sp[i].name);

          //console.log(hws);
        }
        this.setState({ species: spcs });
      })


    })


  }

  render() {
    ///filter
    const filterCharacters = this.state.characters.filter(chars => {
      return chars.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    let romanFilms = [];
    const { species, homeworld, films } = this.state;
    //console.log(characters);
    //console.log(films);
    for (let i = 0; i < films.length; i++) {
      //console.log(films[0]);
      let mapFilms = films[i].map(fl => {
        fl = fl.replace('https://swapi.co/api/films/', '');
        fl = fl.replace('/', '');
        return parseInt(fl);
      })

      mapFilms = mapFilms.sort();
      //console.log(mapFilms);
      const romanNums = mapFilms.map(fl => {
        let rNum;
        switch (fl) {
          case 1:
            rNum = 'IV';
            break;
          case 2:
            rNum = 'V';
            break;
          case 3:
            rNum = 'VI';
            break;
          case 4:
            rNum = 'I';
            break;
          case 5:
            rNum = 'II';
            break;
          case 6:
            rNum = 'III';
            break;
          case 7:
            rNum = 'VII';
            break;
          case 8:
            rNum = 'VIII';
            break;
          case 9:
            rNum = 'IX';
            break;
          default:
            break;
        }
        return rNum;
      })
      //console.log(romanNums);
      romanFilms.push(romanNums);
    }

    if ((homeworld.length > 0 && homeworld[0].includes('http')) || species.length > 0 && species[0][0].includes('https')) {
      return <h1 className='intro'>A long time ago in a galaxy far, far away...</h1>
    }
    else {
      return (
        <Fragment>
          <div className='top'>
            <h1 >Star Wars Cards</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <ErrorBoundry>
              <CardList names={filterCharacters} world={homeworld} specie={species} films={romanFilms} />
            </ErrorBoundry>
          </Scroll>
        </Fragment>
      );
    }
  }
}

export default App;