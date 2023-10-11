const Items = ({ index, image, isShow, onClick }) => {
  return (
    <div className="body-game__cards" onClick={onClick}>
      {isShow ? <img src={image} className="image-cards"/> : index}
    </div>
  );
};
export default Items;
