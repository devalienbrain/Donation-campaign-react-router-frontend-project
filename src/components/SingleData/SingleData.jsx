const SingleData = ({ singleData }) => {
  console.log(singleData);
  const { image, title, category } = singleData;
  return (
    <div>
      <img src={image} alt="" />
      <button>{category}</button>
      <h3>{title}</h3>
    </div>
  );
};

export default SingleData;
