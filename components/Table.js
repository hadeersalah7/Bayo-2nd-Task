import { useState,useEffect  } from "react";
import "./SASS/table.scss";
const Table = ({ searchForm, data, handleSort, checkboxStates, handleCheckboxChange}) => {
  

const [publishedDirection, setPublishedDirection] = useState("desc")

const handleArrowDirection = () => {
  handleColumn()
  setPublishedDirection(publishedDirection === "desc" ? "asc" : "desc")
}

const handleColumn = () => {
handleSort();

}


const [isLoading, setIsLoading] = useState(false);
const [filteredData, setFilteredData] = useState([]);
const [filterApplied, setFilterApplied] = useState(false);


useEffect(() => {
  setIsLoading(true);

  const filteredResults = data.filter((item) =>
    item.title.toLowerCase().includes(searchForm)
  );

const timeoutId =  
setTimeout(() => {
    setFilteredData(filteredResults);
    setIsLoading(false);
    setFilterApplied(searchForm !== "")
  }, 0);
  return () => clearTimeout(timeoutId)
}, [data, searchForm]);



  return (
    <>

<div className="containerTable">

   {filteredData.length > 0  && (
  
  <div>  
    <table>
      <thead>
        <tr>
          <th id="type">Type</th>
          <th id="header-name">Name</th>
          <th id="published"onClick={handleArrowDirection}>
            Published
            <span id="download">
              <span>
                    <i className={`ri-arrow-${publishedDirection === "desc" ? "down" : "up"}-line`}></i>
              </span>
            </span>
          </th>
          <th id="last-download">Last Download</th>
          <th id="load">Download</th>
        </tr>
        <tr>
          <td colSpan="5" id="col">
            <hr />
          </td>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((product) => (
          <tr key={product.id}>
            <td>
              <img src={product.image} className="table-image" alt="" />
            </td>
            <td className="sample">
              {product.title}
              <div className="hidden-spans">
                <p className="upload">
                  <span className="span-right">
                    <i class="ri-upload-2-line"></i>
                    {product.publishedDate
                      ?.toLocaleDateString("en-GB")
                      .replace(/\//g, ".")}
                  </span>
                </p>
                <p className="download">
                  <span>
                    <i class="ri-download-2-line"></i>
                    {product.lastDownload
                      ?.toLocaleDateString("en-GB")
                      .replace(/\//g, ".")}
                  </span>
                </p>
              </div>
            </td>
            <td className="published-time">
              {product.publishedDate
                ?.toLocaleDateString("en-GB")
                .replace(/\//g, ".")}
            </td>
            <td className="downloaded-time">
              {product.lastDownload
                ?.toLocaleDateString("en-GB")
                .replace(/\//g, ".")}
            </td>
            <td className="check-box">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(product.id)}
                checked={checkboxStates[product.id]}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {isLoading && <div>Loading Contents, Please Wait...</div>}

    </div>
    )} 
   
  {!isLoading &&  filteredData.length === 0 && filterApplied &&(
    <div>No results found for "{searchForm}"</div>
  )}
</div>


</>


  );
};

export default Table;



                        