import "./SASS/wrapper.scss";
import listView from "./Images/list_view.svg";
import preview from "./Images/preview_view.svg";
import titles from "./Images/tiles_view.svg";
import search from "./Images/search.svg";
import Table from "./Table";
import { useState } from "react";
import { useEffect } from "react";
import { Document } from "react-pdf";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Cards"

const Wrapper = () => {
  const [searchForm, setSearchForm] = useState("");
  const [isListView, setListView] = useState(false);
  const [isTitleView, setIsTitleView] = useState(false);


  const [sortOption, setSortOption] = useState("Name");

  const [sortDirection, setSortDirection] = useState("asc");
  const [tableWidth, setTableWidth] = useState("100%");
  const [data, setData] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [sortOrder, setSortOrder] = useState({
    column: "publishedDate",
    direction: "desc",
  });

  const handleSortClick = () => {
    const newDirection =
      sortOrder.column === "publishedDate" && sortOrder.direction === "asc"
        ? "desc"
        : "asc";
    setSortOrder({ column: "publishedDate", direction: newDirection });
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const options = [
    { label: "Name", value: "Name" },
    { label: "Type", value: "Type" },
    { label: "Published date", value: "Published date" },
    { label: "Last download", value: "Last download" },
  ];

  const directions = [
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ];

  const handleCheckAll = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    setDropdownVisible(!dropdownVisible);
    handleSortClick();
  };



  const handleInputChange = (event) => {
    setSearchForm(event.target.value);
  };

  const [file, setFile] = useState(null);
  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      setFile(null);
      // `Please select a valid PDF file`
    }
  };

  const [selectedOption, setSelectedOption] = useState(null);


  const [activeIcon, setActiveIcon] = useState('preview')

  const handlePreviewIcon = () => {
    setActiveIcon('preview')
    setIsTitleView(false)
    setListView(false)
  }

  const handleListIcon = () => {
    setActiveIcon('list')
    setListView(true)
    setIsTitleView(false)
  }

  const handleTitleIcon = () => {
    setActiveIcon('title')
    setIsTitleView(true)
    setListView(false)
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.error({e}))
  }, []);

  return (
    <>
      <div className="container">
        <div className="container-wrapper">
            <Container>
          <Row>
           

                  <Col xs={3} md={1} className="active-icons">
                    
                    

                    <span className={activeIcon === 'preview' ? 'active' : ''}>
                    <img
                    width={15}
                    height={15}
                      src={listView}
                      id="listView"
                      alt="list-view-logo"
                      onClick={handlePreviewIcon}
                    />
                    </span>
                    <span className={activeIcon=== "list" ? "active" : ""}>
                    <img
                    width={15}
                    height={15}
                      src={preview}
                      id="preview"
                      alt="preview"
                      onClick={handleListIcon}
                    />
                    </span>
                    <span className={activeIcon === "title" ? "active" : ""}>
                    <img
                    width={15}
                    height={15}
                      src={titles}
                      
                      id="title"
                      alt=""
                      onClick={handleTitleIcon}
                    />
                    </span>
                    {/* </Col> */}
                  </Col>
                {/* </div> */}

                <Col xs={9} md={2}>
                  <div id="form">
                      <input
                        placeholder="Search"
                        value={searchForm}
                        onChange={handleInputChange}
                      />
                        <img src={search} className="search" alt="search-logo"  />
                      
                  </div>
                </Col>

                <Col xs={0} md={4}>
                  <div id="sort">
                    <div className="sort-container">
                      <button className="sort-by" onClick={handleButtonClick}>
                        sort by: {sortOption}
                        {sortDirection === "asc" ? "Ascending" : "Descending"}
                        <span>
                          {sortOrder.column === "publishedDate" &&
                            (sortOrder.direction === "asc" ? (
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
                                className={`sort-option ${
                                  sortOption === option.value ? "active" : ""
                                } 
            ${selectedOption === option.value ? "selected" : ""}
            ${selectedOption === option.value ? "bullet" : ""}
            `}
                                onClick={() => {
                                  setSortOption(option.value);
                                  setSelectedOption(option.value);
                                }}
                              >
                                {option.label}
                              </div>
                            ))}
                          </div>
                          <div className="sort-option-group">
                            <hr />
                            <span className="sort-option-group-label">
                              Direction:
                            </span>
                            {directions.map((direction) => (
                              <div
                                key={direction.value}
                                className={`sort-option ${
                                  sortDirection === direction.value
                                    ? "active"
                                    : ""
                                } `}
                                onClick={() =>
                                  setSortDirection(direction.value)
                                }
                              >
                                {direction.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
              {/* </div> */}
              <Col xs={12} md={5}>
                <div className="buttons">
                  <button className="sort1" onClick={handleButtonClick}>
                    Sort by
                    <span className="arrow-display">
                      {sortOrder.column === "publishedDate" && (
                        <i
                          className={
                            sortOrder.direction === "asc"
                              ? "ri-arrow-up-s-fill"
                              : "ri-arrow-down-s-fill"
                          }
                        ></i>
                      )}
                    </span>
                  </button>

                  <div className="select-all">
                    <button onClick={handleCheckAll}>
                      Select all
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={isChecked}
                      />
                    </button>
                  </div>

                  <div className="download">
                    <button>Download</button>
                  </div>
                </div>
              </Col>
            {/* </div> */}
            </Row>
            </Container>
            <div
              className="container"
              style={{ display: "flex", width: "100%", position: "relative" }}
            >
              <div style={{ display: "flex" }}>
                {activeIcon === "title" ? (
                
                   <Card data={data} isChecked={isChecked}/>
                  
                ) : (
                  <Table
                    isChecked={isChecked}
                    handleCheckAll={handleCheckAll}
                    tableWidth={tableWidth}
                    searchForm={searchForm}
                  />
                )}
              </div>

              {activeIcon === "list" && (
                <div
                  className="form-wrapper"
                  style={{ display: isListView ? "block" : "none" }}
                >
                  <h2>PREVIEW</h2>
                  <p>Select a file to open the preview</p>
                  {/* <label htmlFor="file-input">Choose a PDF file:</label> */}
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileInputChange}
                  />

                  {file && (
                    <div style={{ width: "100%", height: "300px" }}>
                      <Document file={file} />
                    </div>
                  )}
                </div>
              )}
            </div>
          {/* </Row> */}
        </div>
      </div>
    </>
  );
};

export default Wrapper;

