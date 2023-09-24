const SingleData = ({ singleData }) => {
  console.log(singleData);
  const { image, title, category } = singleData || {};
  return (
    <div className="p-4">
      <img src={image} alt="Alternative Image" />
      <button>{category}</button>
      <h3>{title}</h3>
    </div>
  );
};

export default SingleData;
