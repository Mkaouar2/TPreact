

function Card(props) {
  return (
    <div className="col" style={{ width: "18rem" }}>
      <img src={props.imageSrc} className="card-img-top" alt="..." />
      <div className="card">
        <h5 className="card-title">{props.nom}</h5>
        <p className="card-text">{props.qualif}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;