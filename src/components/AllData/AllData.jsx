import { useLoaderData } from "react-router-dom";
import SingleData from "../SingleData/SingleData";
import { useState } from "react";

const AllData = ({ fromSearchInput }) => {
  let allData = useLoaderData();
  // console.log(allData);
  console.log(fromSearchInput);
  // const [displayData, setDisplayData] = useState(allData);
  if (
    fromSearchInput === "Education" ||
    fromSearchInput === "Health" ||
    fromSearchInput === "Clothing" ||
    fromSearchInput === "Food"
  ) {
    allData = allData.filter((aData) => aData.category === fromSearchInput);
    // setDisplayData(temp);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
      {allData.map((singleData) => (
        <SingleData key={singleData.id} singleData={singleData}></SingleData>
      ))}
    </div>
  );
};

export default AllData;
