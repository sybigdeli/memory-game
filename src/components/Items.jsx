const Items = ({image}) => {
  return (
    <div className="body-game__cards">
      {/* {item.id} */}
      <img src={image} className="image-cards" />
    </div>
  );
};

export default Items;
