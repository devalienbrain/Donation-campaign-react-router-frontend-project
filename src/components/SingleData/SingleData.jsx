import { Link } from "react-router-dom";
const SingleData = ({ singleData }) => {
  // console.log(singleData);
  const { image, title, category, colors } = singleData || {};
  console.log(colors.colorBg);
  // const color = "blue";
  // const colorVariants = {
  //   blue: "bg-blue-600 hover:bg-blue-500",
  //   red: "bg-red-600 hover:bg-red-500",
  // };

  return (
    <div className="" style={{ background: colors.colorBg }}>
      <Link to={"/allData/:id"}>
        <img src={image} alt="Alternative Image" />
        <button>{category}</button>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default SingleData;
