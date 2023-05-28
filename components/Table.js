// import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./SASS/table.scss";
// import download from "./Images/download.svg";
// import presentationIcon from './Images/presentation_icon.svg';
// import excelIcon from './Images/excel_icon.svg';
// import wordIcon from './Images/word_icon.svg';
// import pdfIcon from './Images/pdf_icon.svg';
// import imageIcon from './Images/image_icon.svg';
import { useEffect } from "react";
const Table = ({ isChecked, tableWidth, searchForm, handleCheckAll,  }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetch('https://fakestoreapi.com/products?limit=7')
          .then(response => response.json())
          .then(data => {
            console.log({data})
            const newData = data.map(product => ({
                ...product, publishedDate: new Date(`${product.id}`), 
                lastDownload: new Date(`${product.id}/2/2005`)
            }));
            setData(newData)
          })
          .catch(error => console.error(error));

      }, []);
    
      const [sortOrder, setSortOrder] = useState({
        column: 'publishedDate',
        direction: 'desc',
    })



const handelSort = (column) => {
    const direction =
      sortOrder.column === column && sortOrder.direction === "asc"
        ? "desc"
        : "asc";
    const sortedData = [...filteredData].sort((a, b) => {
      if (column === "publishedDate") {
        const dateA = a.publishedDate;
        const dateB = b.publishedDate;
        return direction === "asc" ? dateA - dateB : dateB - dateA;
      } else if (column === 'lastDownload'){

      const dateA = new Date(a.lastDownload)
      const dateB = new Date(b.lastDownload)
      return direction === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        return direction === "asc"
          ? a[column] > b[column]
            ? 1
            : -1
          : b[column] > a[column]
          ? 1
          : -1;
      }
    });
    setData(sortedData);
    setSortOrder({ column, direction });
  };
  

const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchForm))


  return (
    <>

      {/* <div className="container"> */}
        
        <div className="containerTable" style={{width: tableWidth}}>
            {filteredData.length > 0 ?  (  
          <table>
            <thead>
            <tr>
              <th id="type">Type</th>

              <th id="header-name"  >Name</th>


<th id="published" >

  Published
  <span id="download">
    <span onClick={() => handelSort('publishedDate')}>
    {sortOrder.column === 'publishedDate' &&
                        (sortOrder.direction === 'asc' ? (
                          <i className="ri-arrow-up-line"></i>
                        ) : (
                          <i className="ri-arrow-down-line"></i>
                        ))}
    </span>
  </span>
</th>

              <th id="last-download" onClick={() => handelSort('lastDownload')}>
                Last Download
              </th>

              <th id="load">
                Download
              </th>

              </tr>

              <tr>
      <td colSpan="5" id="col"><hr /></td>
    </tr>
              </thead>
            
          


            <tbody>
{filteredData.map((product) => (
    
    <tr key={product.id}>

      <td><img src={product.image} className="table-image" alt=""/></td>
      <td className="sample">{product.title}

      <div className="hidden-spans"> 
      <p className="upload"><span className="span-right"><i class="ri-upload-2-line"></i>{product.publishedDate.toLocaleDateString('en-GB').replace(/\//g, '.')}</span></p>
      <p className="download"><span><i class="ri-download-2-line"></i>{product.lastDownload.toLocaleDateString('en-GB').replace(/\//g, '.')}</span></p>
       </div>
       </td>
      <td className="published-time">{product.publishedDate.toLocaleDateString('en-GB').replace(/\//g, '.')}</td>
      <td className="downloaded-time">{product.lastDownload.toLocaleDateString('en-GB').replace(/\//g, '.')}</td>
      <td className="check-box">
        <input type="checkbox" checked={isChecked} />
        </td>
    </tr>
))}

            </tbody>
            
          </table>
                ) : (
                    <div>No results found for "{searchForm}"</div>
            

)}
         
        </div>
      {/* </div> */}
      

    </>
  );
};

export default Table;


 {/* {isImagePreviewVisible && (
        <div style={{ width: '50%' }}>
          <img src={data[0].image} style={{ width: '100%' }} alt="" />
        </div>
      )} */}


                        