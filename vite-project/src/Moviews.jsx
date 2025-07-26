// Moviews.jsx
import "./index.css";
import { Link } from "react-router-dom";

function Moviews({ title, description, image, link, rating }) {
  return (
    <div className="col-md-2 mb-3 p-3">
      <div className="card h-100 d-flex flex-column card-hover-effect">
        <img
          src={image}
          alt={title}
          className="card-img-top img-fluid"
          style={{ objectFit: "cover", height: "300px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={link} className="btn btn-primary mt-auto">
            Read More
          </Link>
        </div>
        <div className="card-footer">⭐ Rating: {rating}</div>
      </div>
    </div>
  );
}

export default Moviews;
