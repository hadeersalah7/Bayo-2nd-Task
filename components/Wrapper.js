import "./SASS/wrapper.scss";
import listView from "./Images/list_view.svg";
import preview from "./Images/preview_view.svg";
import titles from "./Images/tiles_view.svg";
import search from "./Images/search.svg";
import Table from "./Table";
import { useState } from "react";
import { useEffect } from "react";


const Wrapper = () => {


useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=7')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);


const [searchForm, setSearchForm] = useState('');
  const [isListView, setListView] = useState(false)
  const [isTitleView, setIsTitleView] = useState(false)
  const [sortOption, setSortOption] = useState('publishedDate');
  const [sortDirection, setSortDirection] = useState('desc');
  const [tableWidth, setTableWidth] = useState('100%')
  const [isImagePreviewVisible, setImagePreviewVisible] = useState(false)
  const [data, setData] = useState(false)
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

      
      const [dropdownVisible, setDropdownVisible] = useState(false);
      const options = [
        { label: 'Name', value: 'Name' },
        { label: 'Type', value: 'Type' },
        { label: 'Published date', value: 'Published date' },
        { label: 'Last download', value: 'Last download' }
      ];
      
      const directions = [
        { label: 'Ascending', value: 'asc' },
        { label: 'Descending', value: 'desc' }
      ];

      
     const handleCheckAll = () => {
        setIsChecked(!isChecked);
      };

      const handleButtonClick = () => {
        setDropdownVisible(!dropdownVisible);
        handleSortClick()
      }




const handleImagePreviewClick = () =>{
    setTableWidth(isImagePreviewVisible ? "100%" : "95%");
    setImagePreviewVisible(!isImagePreviewVisible)
}


const handleListView = () => {
    setListView(!isListView)
}

const handleTitleViewClick = () => {
    setIsTitleView(!isTitleView)
    // setTableWidth(isTitleView ? '100%' : '70%')
}


const handleInputChange = (event) => {
setSearchForm(event.target.value)
}


  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <div className="first-wrapper">
            {/* <Col xs={2}> */}
            <div className="icons-wrapper">
              <div className="icons active">
                {/* <div style={{display: showPDF ? 'none' : 'block'}}> */}
                <img src={listView} id="listView" alt="list-view-logo" onClick={handleListView}/>
                <img src={preview} id="preview" alt="preview" onClick={handleImagePreviewClick}/>
                <img src={titles} id="title" alt="" onClick={handleTitleViewClick}/>
              

              </div>
              <div id="form">
                <form id="form-input">
                  <input placeholder="Search" value={searchForm} onChange={handleInputChange}/>
                  <span className="search">
                    <img src={search} alt="search-logo" />
                  </span>
                </form>
              </div>
              

            <div id="sort">
              



<div className="sort-container">
  <button className="sort-by" onClick={handleButtonClick} >
    sort by: {sortOption} {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
    
<span >
            {sortOrder.column === 'publishedDate' &&
              (sortOrder.direction === 'asc' ? (
                <i className="ri-arrow-up-s-fill"></i>

              ) : (
                <i className="ri-arrow-down-s-fill"></i>

              ))}
          </span>

  </button>
  {dropdownVisible && (
    <div className="sort-dropdown">
      <div className="sort-option-group">
        <span className="sort-option-group-label"></span>
        {options.map((option) => (
          <div
            key={option.value}
            className={`sort-option ${sortOption === option.value ? 'active' : ''}`}
            onClick={() => setSortOption(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
      <div className="sort-option-group">
        <hr></hr>
        <span className="sort-option-group-label">Direction:</span>
        {directions.map((direction) => (
          <div
            key={direction.value}
            className={`sort-option ${sortDirection === direction.value ? 'active' : ''}`}
            onClick={() => setSortDirection(direction.value)}
          >
            {direction.label}
          </div>
        ))}
      </div>
    </div>
  )}
</div>


            </div>
            </div>
            
            <div className="buttons">
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
              <div className="select-all">
                <button  onClick={handleCheckAll}>
                  Select all
                  <input type="checkbox" id="checkbox" checked={isChecked} onChange={() => {}} />
                </button>
              </div>
              
              

              <div className="download">
                <button>Download</button>
              </div>
            </div>
          </div>

          
          <div className="container" style={{display: 'flex', width: '100%'}}>

          <div style={{ display: 'flex' }}>
              {isTitleView ? (
                <div className="title-view" style={{ display: 'flex'}}>
                  {data.map((item) => (
                    <div key={item.id} className="title-container">
                         <input type='checkbox' style={{position: 'absolute', top: '5%', left: '10%'}} ></input>
                      <img src={item.image} alt={item.title} style={{width: '70px'}}/>
                    </div>
                  ))}
                </div>
              ) : (
                <Table isChecked={isChecked} handleCheckAll={handleCheckAll} isImagePreviewVisible={isImagePreviewVisible} handleImagePreviewClick={handleImagePreviewClick} tableWidth={tableWidth} searchForm={searchForm}/>
              )}
            </div>

            {isListView && (
              <div className="form-wrapper" style={{ display: isListView ? 'block' : 'none' }}>
                <h2>PREVIEW</h2>
                <p>Select a file to open the preview</p>
              </div>
            )}

            {isImagePreviewVisible && (
              <div className="image-wrapper">
                <img src={data[0].image} style={{ width: '60%', display: 'block', margin: '0 auto', paddingTop: '15px' }} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};


          {/* <Table isChecked={isChecked} handleCheckAll={handleCheckAll} isImagePreviewVisible={isImagePreviewVisible} handleImagePreviewClick={handleImagePreviewClick} tableWidth={tableWidth} />

          {isTitleView && (
              <div className="title-view" >
                {data.map((item) => (
                  <div key={item.id} className="title-container">
                    <img src={item.image} alt={item.title} />
                  </div>
                ))}
              </div>
            )}

          {isListView && (
          <div className="form-wrapper" style={{display: isListView ? 'block': 'none'}}>
           <h2>PREVIEW</h2>
           <p>Select a file to open the preview</p>
          </div>
        )}
          {isImagePreviewVisible && (
          <div className="image-wrapper">
            <img src={data[0].image} style={{ width: "60%",display: 'block', margin: '0 auto'}} alt="" />
          </div>
          
        )}

          </div>
        </div>
      </div>
    </>
  );
}; */}

export default Wrapper;


 {/* {sortOrder.column === 'publishedDate' ? (
            `sort by: published ${
              sortOrder.direction === 'asc' ? 'ascending' : 'descending'
            }`
          ) : (
            'sort by: published descending'
          )} */}

          
          