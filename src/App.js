
import "./App.css";
import MovieList from './components/MovieList';
import New from './components/New';
import React ,{useState} from "react";
import SearchMovie from "./components/Search";
import Trailer from "./components/Trailer";
import { BrowserRouter as Router,Route } from "react-router-dom";
function App() {

  
  const [movieList,setMovieList]=useState(
  [
    {
      id:1,
      title:"The Protege",
      rate: 3,
      img:"https://i.egycdn.com/pic/WmFwZndlY21ITkhOb2N2UmNtWXZ2Y3htemF2Y1A.jpg",
      Description:'Rescued as a child by the legendary assassin Moody...Anna is the worlds most skilled contract killer. However, when Moody is brutally killed, she vows revenge for the man who taught her everything she know ',
      type:"Action and Crime",
      /* watch:'https://www.youtube.com/watch?v=fSqa0a3mGk8' */
      trailer: (
        <iframe width="650" height="480" src="https://www.youtube.com/embed/9hcqVYCqGMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      )},
    {
      id:2,
      title:"Megalodon Rising",
      rate: 2,
      img:"https://i.egycdn.com/pic/WmFwZndlY21tbXBibVRtbXZ2Y0VjbWRUc2ptam1FbVl2.jpg",
      Description:'When historys greatest aquatic predator returns, the armada of modern warships sent to destroy it has no chance at all',
      type:"Action",
      /* watch:'https://www.youtube.com/watch?v=Ai5raaW_fPM' */
      trailer: (
        <iframe width="650" height="480" src="https://www.youtube.com/embed/Ai5raaW_fPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
    },
    { 
      id:3,
      title:"Fast & Furious 9 ",
      rate: 4,
      img:"https://i.egycdn.com/pic/WmFwZndlY21MdE5ibUV2TmJFY21qdk5qUHZOdndUZw.jpg",
      Description:'After the events in the previous installment, The Fate Of the Furious, Cypher decides to seek help from Jacob, Doms younger brother, in order to carry out a plan of revenge against Dom and his team',
      type:"Action and Crime",
      /* watch:'https://www.youtube.com/watch?v=_qyw6LC5pnE' */
      trailer: (
        <iframe width="650" height="480" src="https://www.youtube.com/embed/_qyw6LC5pnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
    },
    {
      id:4,
      title:"Outlaw's Buckle ",
      rate: 5,
      img:"https://i.egycdn.com/pic/WmFwZndlY21tbXBtbXBZdm1hY21ibW1tRXZrd0t4bUk.jpg",
      Description:'During a terrible storm, a serial killer wreaks havoc inside of a Texas prison',
      type:"Action and Drama",
      /* watch:'https://www.youtube.com/watch?v=UEZEbcuGjCQ' */
      trailer: (
        <iframe width="650" height="480" src="https://www.youtube.com/embed/UEZEbcuGjCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
    },
    {
      id:5,
      title:"Untold: Crimes and Penalties ",
      rate: 3,
      img:"https://i.egycdn.com/pic/WmFwZndlY21tbXBwRW1tdk52RWNsYVB3Zk5ibUx3.jpg",
      Description:'they were the bad boys of hockey - a team bought by a man with mob ties, run by his 17 year old son, and with a rep for being as violent as they were good. The story of the Danbury Trashers',
      type:"Sport and Documentary",
      /* watch:'https://www.youtube.com/watch?v=GrJ3ntd1FCU' */
      trailer: (
        <iframe width="650" height="480" src="https://www.youtube.com/embed/GrJ3ntd1FCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
    },
    {
      id:6,
      title:"9/11: Inside the President's War Room ",
      rate: 5,
      img:"https://i.egycdn.com/pic/WmFwZndlY21tbXB2bWJtdm1tdmNFY3htbW1qbW13VGpQbA.jpg",
      Description:'from the Presidents perspective, with exclusive access to information from the ones that had to take decisions during the World 9/11 Trade Centers attack.',
      type:"Action and Drama",
      /* watch:"https://www.youtube.com/watch?v=4BcKbOCYOpA" */
      trailer: (
        <iframe width="650" height="480" src="https://www.youtube.com/embed/4BcKbOCYOpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
    }
    
  ])

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMovieList([...movieList, newMovie]);
  };
  const [search,setSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1)
  return (
    <Router>
    <div className='App'>
      
      <h1>Moooovies</h1>
      <SearchMovie  setSearch={setSearch} ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}/>
        
          <Route path="/" exact>
      <MovieList movieList={movieList} search={search} ratingSearch={ratingSearch}/>
      <New addNewMovie={addNewMovie}/>
      </Route>
      <Route
             path='/Trailer/:ID' >
              <Trailer movieList={movieList}/>
            </Route>
      
      </div>
      </Router>
  
    
  )
}

export default App
