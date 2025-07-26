// Movies.jsx
import Moviews from './Moviews';

function Movies() {
  const movieList = [
    {
      title: "Amazing SpiderMan-1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      image: "https://wallpapers.com/images/hd/spiderman-technique-ecp43rcqayizcyuf.jpg",
      link: "#",
      rating: "5 Imdb"
    },
    {
      title: "Avengers",
      description: "Earth's mightiest heroes assemble!",
      image: "https://wallpaperaccess.com/full/96632.jpg",
      link: "/avengers",
      rating: "7.9 Imdb"
    },
    {
      title: "Dr.Strange",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      image: "https://e1.pxfuel.com/desktop-wallpaper/327/40/desktop-wallpaper-doctor-strange-by-marvel-doctor-strange-phone.jpg",
      link: "/inception",
      rating: "8.8 Imdb"
    },
    {
      title: "Thor",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      image: "https://wallpapercave.com/wp/wp5049551.jpg",
      link: "/inception",
      rating: "8.8 Imdb"
    },
    {
      title: "Deadpool",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      image: "https://wallpapercave.com/wp/wp5445873.jpg",
      link: "/inception",
      rating: "8.8 Imdb"
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {movieList.map((movie, index) => (
          <Moviews key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
