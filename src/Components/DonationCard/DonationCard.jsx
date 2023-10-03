const DonationCard = ({ item }) => {
    const {img, price, color, title, description, id, cardBg, category, categoryBg} = item
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-full" style={{backgroundColor: `${cardBg}`}}>
        <figure>
          <img
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
            <p style={{backgroundColor: `${categoryBg}`, color: `${color}`}} className="w-fit px-2 rounded-md grow-0">{category}</p>
          <h2 className="card-title">{title}</h2>
          <p style={{color: `${color}`}}>$ {price.toFixed(2)}</p>
          <div className="card-actions">
            <button className="btn btn-primary" style={{backgroundColor: `${color}`, border: '0px'}}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
