const ShowDetails = ({ data }) => {
  console.log(data);
  const { image, price, title, description } = data;
  return (
    <div>
      <img className="w-full" src={image} alt="Alternative Image" />
      <div className="bg-[#0B0B0B80] opacity-50 p-6 -mt-16 h-16 z-10">
        <button className="bg-red-600 text-white opacity-100 z-20">
          Donate ${price}
        </button>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ShowDetails;
