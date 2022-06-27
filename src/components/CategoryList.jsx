import './CategoryList.css';

// fetch('https://fakestoreapi.com/products/1')
// .then(response => response.json())
// .then(data => CategoryList(data))

function CategoryList(props) {
    return(
            <div className="categoryList">
                <p>Filter: </p>
                {/* <ul>
                    <li>Men's Clothing</li>
                    <li>Women's Clothing</li>
                    <li>Jewellery</li>
                    <li>Electronics</li>
                </ul> */}
            </div>
        )
}

export default CategoryList;