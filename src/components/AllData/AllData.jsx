import { useLoaderData } from "react-router-dom";
import SingleData from "../SingleData/SingleData";

const AllData = () => {
  const allData = useLoaderData();
  // console.log(allData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
      {allData.map((singleData) => (
        <SingleData key={singleData.id} singleData={singleData}></SingleData>
      ))}
    </div>
  );
};

export default AllData;
