const DonatedItem = ({ donatedData }) => {
  // console.log(donatedData);
  const { image, category, title, price, colors } = donatedData || {};
  return (
    <div className="rounded-lg flex" style={{ background: colors.colorBg }}>
      <img
        className="rounded-l-lg rounded-r-none"
        src={image}
        alt="Alternative Image"
      />
      <div className="p-4" style={{ color: colors.textColor }}>
        <button
          className="px-2 py-1 rounded"
          style={{ background: colors.btnBg }}
        >
          {category}
        </button>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default DonatedItem;
