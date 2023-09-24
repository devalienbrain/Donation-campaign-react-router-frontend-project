import { Link } from "react-router-dom";
const SingleData = ({ singleData }) => {
  // console.log(singleData);
  const { image, title, category } = singleData || {};
  return (
    <div className="p-4">
      <Link to={"/allData/:id"}>
        <img src={image} alt="Alternative Image" />
        <button>{category}</button>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default SingleData;
