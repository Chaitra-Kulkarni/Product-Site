import './ViewButton.css';

const ViewButton = (props) => {

    const loadProducts = () => {
        props.getProducts();
    }

  return (
    <div className="view-button-wrapper">
      <button className="view-button" onClick={loadProducts}>View All Products</button>
    </div>
  );
};

export default ViewButton;
