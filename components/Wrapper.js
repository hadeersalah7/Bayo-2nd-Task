import "./SASS/wrapper.scss";
import listView from "./Images/list_view.svg";
import preview from "./Images/preview_view.svg";
import titles from "./Images/tiles_view.svg";
import search from "./Images/search.svg";
import Table from "./Table";
import { useState,useEffect  } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Cards";
import File from "./File";
import Download from './Download';
// import Download from './download';
import Nav from "./Nav";

const Wrapper = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState({
    column: "publishedDate",
    direction: "desc",
  });
  const [searchForm, setSearchForm] = useState("");
  const [isListView, setListView] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [sortOption, setSortOption] = useState("Name");
  const [sortDirection, setSortDirection] = useState("desc");
  const [arrowDirection, setArrowDirection] = useState("down")
  const [tableWidth, setTableWidth] = useState("100%");
  const [wrapperWidth, setWrapperWidth] = useState("100%");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeIcon, setActiveIcon] = useState("preview");
  const [isPreviewActive, setPreviewActive] = useState(true);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({});

  const options = [
    { label: "Name", value: "Name" },
    { label: "Type", value: "title" },
    { label: "Published date", value: "Published Date" },
    { label: "Last download", value: "Last download" },
  ];

  const directions = [
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ];

  useEffect(() => {
    // Fetch data from API
    fetch("https://fakestoreapi.com/products?limit=7")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((product) => ({
          ...product,
          publishedDate: new Date(`${product.id}`),
          lastDownload: new Date(`${product.id}/2/2005`),
        }));
        setData(newData);
      })
      .catch((error) => console.error(error));
  }, [data?.length]);

  useEffect(() => {
    const newCheckboxStates = {};
    data.forEach((product) => {
      newCheckboxStates[product.id] = false;
    });
    setCheckboxStates(newCheckboxStates);
  }, [data?.length]);

  const handleSort = (column, direction) => {
    
    const sortedData = [...data].sort((a, b) => {
      if (column === "title"){

        const compareResult = a.title.localeCompare(b.title, undefined, {
          sensitivity: "base",
        });
        return direction === "asc" ? compareResult : -compareResult;

       } else if (column === "publishedDate") {
        const dateA = a.publishedDate;
        const dateB = b.publishedDate;
        return direction === "asc" ? dateA - dateB : dateB - dateA;
      } else if (column === "lastDownload") {
        const dateA = new Date(a.lastDownload);
        const dateB = new Date(b.lastDownload);
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

  const handleDownloadClick = () => {
    setShowDownload(true);
  };

  const handleButtonClick = () => {
    setDropdownVisible(!dropdownVisible);
    setArrowDirection(arrowDirection === "down" ? "up" : "down")
    // handleSortClick();
  };

  const handleInputChange = (event) => {
    setSearchForm(event.target.value);
  };

  const handlePreviewIcon = () => {
    setActiveIcon("preview");
    setTableWidth("100%");
    setWrapperWidth("100%");
    setListView(false);
    setPreviewActive(true);
  };

  // set the table width and the wrapper width:

  const handleListIcon = () => {
    setActiveIcon("list");
    setTableWidth(isListView ? "100%" : "73%");
    setWrapperWidth(isListView ? "100%" : "73%");
    setPreviewActive(false);
    setListView(!isListView);
  };

  const handleTitleIcon = () => {
    setActiveIcon("title");
    setTableWidth("75%");
    setWrapperWidth("100%");
    setPreviewActive(true);
    setListView(false);
  };



  const handleSortOptionChange = (option) => {
    // setSortOption(option);
    setDropdownVisible(false);
  setSortOption(option);
  setSelectedOption(option);
  handleSort(option, sortOrder.direction);

  };

  const handleSortDirectionChange = (direction) => {
    setSortDirection(direction);
  };

  const handleSelectAllChange = () => {
    setSelectAllChecked(!selectAllChecked);
    setCheckboxStates((prevStates) => {
      const newState = { ...prevStates };
      Object.keys(newState).forEach((key) => {
        newState[key] = !selectAllChecked;
      });
      return newState;
    });
  };

  const handleCheckboxChange = (id) => {
    setCheckboxStates((prevStates) => {
      const newState = { ...prevStates };
      newState[id] = !newState[id];
      return newState;
    });
  };
  return (
    <>
      <Nav />

      <div className="container header-container">
        <h3 id="welcome">Welcome Tim</h3>
        <p id="collection">
          In the collection below you can find and download all available
          documents for your client.
        </p>
      </div>
      <div className="container">
        <div className="container-wrapper">
          <Container>
            <Row style={{ width: wrapperWidth }}>
              <Col
                xs={3}
                md={1}
                className="active-icons">
              
                <span className={activeIcon === "preview" ? "active" : ""}>
                  <img
                    src={listView}
                    id="listView"
                    alt="list-view-logo"
                    onClick={handlePreviewIcon}/> 
                </span>
                <span className={activeIcon === "list" ? "active" : ""}>
                  <img
                    src={preview}
                    id="preview"
                    alt="preview"
                    onClick={handleListIcon}/>
                </span>
                <span className={activeIcon === "title" ? "active" : ""}>
                  <img
                    src={titles}
                    id="title"
                    alt=""
                    onClick={handleTitleIcon}
                  />
                </span>
              </Col>

              <Col xs={9} md={2}>
                <div
                  id="form"
                  style={{
                    width: isPreviewActive ? "" : "220px",
                    marginLeft: isPreviewActive ? "" : "85px",
                  }}>
                
                  <input
                    placeholder="Search"
                    value={searchForm}
                    onChange={handleInputChange}/>       
                  <img src={search} className="search" alt="search-logo" />
                </div>
              </Col>

              <Col xs={0} md={4}>
                <div id="sort">
                  <div className="sort-container">
                    <button
                      className="sort-by"
                      onClick={handleButtonClick}
                      style={{ display: isPreviewActive ? "block" : "none" }}>
                      sort by {sortOption}
                      {sortDirection === "asc" ? " Ascending" : " Descending"}
                      <span>
                            <i className={`ri-arrow-${arrowDirection}-s-fill`}></i>
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
                                sortOption === option.value ? "active" : "" }
                               
                                ${selectedOption === option.value ? "selected" : "" }
                                        
                                ${selectedOption === option.value ? "bullet" : ""}`}
                                                              
                              onClick={() => {
                                handleSortOptionChange(option.value);
                                setSortOption(option.value);
                                setSelectedOption(option.value);
                              }}>
                            
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
                                sortDirection === direction.value ? "active" : "" } `}
                                  
                              onClick={() =>
                                handleSortDirectionChange(direction.value)}>
                              {direction.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="buttons">
                  <button className="sort1" onClick={handleButtonClick}>
                    Sort by
                    <span>
                            <i className={`ri-arrow-${arrowDirection}-s-fill`}></i>
                      </span>
                  </button>

                  <div className="select-all">
                    <button onClick={handleSelectAllChange}>
                      Select all
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={selectAllChecked}
                        onChange={handleSelectAllChange}/>   
                    </button>
                  </div>

                  <div className="download">
                    <button onClick={handleDownloadClick}>Download</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="row container" id="container">
            <div
              className="inside-container col-9"
              style={{ width: isListView ? "75%" : "100%" }}>
              {activeIcon === "title" ? (
                <Card
                  checkboxStates={checkboxStates}
                  handleCheckboxChange={handleCheckboxChange}/>
              ) : (
                <div>
                  <Table
                    tableWidth={tableWidth}
                    searchForm={searchForm}
                    data={data}
                    sortOrder = {sortOrder}
                    handleSort={handleSort}
                    checkboxStates={checkboxStates}
                    handleCheckboxChange={handleCheckboxChange}/>
                </div>
              )}
            </div>

            {activeIcon === "list" && (
              <div
                className="form-wrapper col-3"
                style={{ display: isListView ? "block" : "none" }}>
                <File />
              </div>
            )}
          </div>
        </div>
      </div>

      {showDownload && <Download showDownload={showDownload} />}
    </>
  );
};
export default Wrapper;



