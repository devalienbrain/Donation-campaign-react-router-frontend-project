import DonatedItem from "./DonatedItem";

const ShowDonatedItems = ({ donatedDatas }) => {
  // console.log(donatedDatas);
  return (
    <div className="py-9 grid grid-cols-1 md:grid-cols-2 gap-5">
      {donatedDatas.map((donatedData) => (
        <DonatedItem donatedData={donatedData} key={donatedData.id} />
      ))}
    </div>
  );
};

export default ShowDonatedItems;
