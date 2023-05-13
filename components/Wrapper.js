import "./SASS/wrapper.scss";
import listView from "./Images/list_view.svg";
import preview from "./Images/preview_view.svg";
import titles from "./Images/tiles_view.svg";
import search from "./Images/search.svg";
import Table from "./Table";
import { useState } from "react";



const Wrapper = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [sortOrder, setSortOrder] = useState({
        column: 'publishedDate',
        direction: 'desc',
      });
    
      const handleSortClick = () => {
        const newDirection =
          sortOrder.column === 'publishedDate' && sortOrder.direction === 'asc'
            ? 'desc'
            : 'asc';
        setSortOrder({ column: 'publishedDate', direction: newDirection });
      };

    const handleCheckAll = () => {
        setIsChecked(!isChecked);
      };

// const [showPDF, setShowPdf] = useState(false)

// const handleListViewClick = () => {
//     setShowPdf(true)
// }
  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <div className="first-wrapper">
            {/* <Col xs={2}> */}
            <div className="icons-wrapper">
              <div className="icons">
                {/* <div style={{display: showPDF ? 'none' : 'block'}}> */}
                <img src={listView} id="listView" alt="list-view-logo" />
                <img src={preview} id="preview" alt="preview" />
                <img src={titles} id="title" />
                {/* </div>                 */}
                {/* <div style={{ display: showPDF ? 'block' : 'none' }}>
        
      </div> */}

              </div>
              <div id="form">
                <form id="form-input">
                  <input placeholder="Search" />
                  <span className="search">
                    <img src={search} alt="search-logo" />
                  </span>
                </form>
              </div>
              

            <div id="sort">
              {/* <button className="sort-by">
                sort by: published descending
                <span>
                  <i className="ri-arrow-down-s-fill"></i>
                </span>
              </button> */}

<button className="sort-by" onClick={handleSortClick}>
          {sortOrder.column === 'publishedDate' ? (
            `sort by: published ${
              sortOrder.direction === 'asc' ? 'ascending' : 'descending'
            }`
          ) : (
            'sort by: published descending'
          )}
          <span>
            {sortOrder.column === 'publishedDate' &&
              (sortOrder.direction === 'asc' ? (
                <i className="ri-arrow-up-s-fill"></i>
              ) : (
                <i className="ri-arrow-down-s-fill"></i>
              ))}
          </span>
        </button>   
            </div>
            </div>
            
            <div className="buttons">
              <div className="select-all">
                <button  onClick={handleCheckAll}>
                  Select all
                  <input type="checkbox" id="checkbox" onClick={handleCheckAll}/>
                </button>
              </div>
              
              <button className="sort1" onClick={handleSortClick}>
  Sort by:
  <span className="arrow-display">
    {sortOrder.column === 'publishedDate' && (
      <i
        className={
          sortOrder.direction === 'asc'
            ? 'ri-arrow-up-s-fill'
            : 'ri-arrow-down-s-fill'
        }
      ></i>
    )}
  </span>
</button>

              <div className="download">
                <button>Download</button>
              </div>
            </div>
          </div>
          <Table isChecked={isChecked} handleCheckAll={handleCheckAll} />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
