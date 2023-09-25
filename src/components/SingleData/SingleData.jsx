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
    <div className="rounded-lg" style={{ background: colors.colorBg }}>
      <Link to={"/allData/:id"}>
        <img className="w-full" src={image} alt="Alternative Image" />
        <div className="p-4" style={{ color: colors.textColor }}>
          <button className="px-2 py-1 rounded" style={{ background: colors.btnBg }}>{category}</button>
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default SingleData;
