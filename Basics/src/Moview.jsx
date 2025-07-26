import "./index.css";

function Moview({ title, description, image, link, rating }) {
  return (
    <div className="col-md-2 mb-3 p-3">
      <div className="card h-100 d-flex flex-column  card-hover-effect">
        <img
          src={image}
          alt={title}
          className="card-img-top img-fluid "
          style={{ objectFit: "cover", height: "500px",  }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary mt-auto">
            Read More
          </a>
        </div>
        <div className="card-footer">⭐ Rating: {rating}</div>
      </div>
    </div>

  
  );
}

export default Moview;
