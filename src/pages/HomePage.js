import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
const HomePage = () => {
    return ( 
        <div>
            <Banner title="Movies Mix" slogan="Your home of movies."/>
            <MovieList/>
        </div>
     );
}
 
export default HomePage;