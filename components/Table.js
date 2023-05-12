import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./SASS/table.scss";
import download from "./Images/download.svg";
import presentationIcon from './Images/presentation_icon.svg';
import excelIcon from './Images/excel_icon.svg';
import wordIcon from './Images/word_icon.svg';
import pdfIcon from './Images/pdf_icon.svg';
import imageIcon from './Images/image_icon.svg';

const Table = ({ isChecked, handleCheckAll }) => {
    const [data, setData] = useState([
        // 1
        {   
            icon: presentationIcon,
            name: "sample_name_finances_2023.pptx",
            publishedDate: '15.11.2014',
            lastDownload: '7.03.2015'
        },
        // 2
        {   
            icon: excelIcon,
            name: "sample_name_finances_2023.xlsx",
            publishedDate: "12.11.2020",
            lastDownload: "12.05.2017",
        },
        // 3
        {   
            icon: wordIcon,
            name: 'sample_name_finances_2023.docx',
            publishedDate: '15.11.2020',
            lastDownload: '1.01.2001',
        },
        // 4
        {   
            icon: wordIcon,
            name: 'sample_name_finances_2023.pptx',
            publishedDate: '15.11.2013',
            lastDownload: '5.03.2005'
        },
        // 5
        {   
            icon: presentationIcon,
            name: 'sample_name_finances_2023.pdf',
            publishedDate: '15.11.2028',
            lastDownload: '12.03.2021',
        },
        // 6
        {   
            icon: pdfIcon,
            name: 'sample_name_finances_2023.pdf',
            publishedDate: '15.11.2021',
            lastDownload: '9.07.2008',
        },
        {  
            icon: pdfIcon,
            name: 'sample_name_finances_2023.pdf',
            publishedDate: '15.11.2023',
            lastDownload: '12.07.2012'
        }
    ])

    const [sortOrder, setSortOrder] = useState({
        column: 'publishedDate',
        direction: 'desc',
    })

const handelSort = (column) => {
    const direction = sortOrder.column === column && sortOrder.direction === 'asc' ? 'desc' : 'asc';
    const sortedData = [...data].sort((a,b) => {
        if (column === 'publishedDate' || column === 'lastDownload'){
            const dateA = new Date(a[column].split('.').reverse().join('-'));
            const dateB = new Date (b[column].split('.').reverse().join('-'));
            return direction === 'asc' ? (dateA - dateB) : (dateB - dateA)
        } else {
            return direction === 'asc' ? (a[column] > b[column] ? 1 : -1) : (b[column] > a[column] ? 1 : -1)
        }
    });
    setData(sortedData);
    setSortOrder({column, direction});
}

  return (
    <>
      <div className="container">
        
        <div className="containerTable">
          <table>
            <thead>
            <tr>
              <th id="type">Type</th>

              <th id="header-name">Name</th>

              <th id="published">
                published
                <span id="download">
                  {/* <img src={download} /> */}
                  <span onClick={() => handelSort('publishedDate')}>{sortOrder.column === 'publishedDate' &&
                (sortOrder.direction === 'asc' ? (
                  <i className="ri-arrow-up-line"></i>
                ) : (
                  <i className="ri-arrow-down-line"></i>
                ))}</span>
                </span>
              </th>

              <th id="last-download" onClick = {() => handelSort('lastDownload')}>
                last download
              </th>

              <th id="load">
                download
              </th>

              </tr>

              <tr>
      <td colSpan="5" id="col"><hr /></td>
    </tr>
              </thead>
            
          


            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                    {/* 1 */}
                <td><img src={row.icon} className="table-image"/></td>
                <td className="sample">{row.name}</td>
                <td className="published-time">{row.publishedDate}</td>
                <td className="downloaded-time">{row.lastDownload}</td>
                <td className="check-box"><input type="checkbox" checked={isChecked} /></td>

                </tr>
                
                
                ))}
                

                

                {/* <tr> */}
                    {/* 3 */}
                    {/* <td><img src={wordIcon} className="table-image" alt="word-icon"/></td> */}
                    {/* <td className="sample">sample_name_finances_2023.docx</td> */}
                {/* <td className="published-time">15.11.2020</td> */}
                {/* <td className="downloaded-time">1.01.2001</td> */}
                {/* <td className="check-box"><input type="checkbox" checked={isChecked} /></td> */}
                {/* </tr> */}

                {/* <tr> */}
                    {/* 4 */}
                {/* <td><img src={presentationIcon} className="table-image"/></td> */}
                {/* <td className="sample">sample_name_finances_2023.pptx</td> */}
                {/* <td className="published-time">15.11.2013</td> */}
                {/* <td className="downloaded-time">5.03.2005</td> */}
                {/* <td className="check-box"><input type="checkbox" checked={isChecked} /></td>  */}
                {/* </tr> */}

                {/* <tr> */}
                    {/* 5 */}
                {/* <td><img src={pdfIcon} className="table-image" alt="table-icon"/></td> */}
                {/* <td className="sample">sample_name_finances_2023.pdf</td> */}
                {/* <td className="published-time">15.11.2028</td> */}
                {/* <td className="downloaded-time">12.03.2021</td> */}
                {/* <td className="check-box"><input type="checkbox" checked={isChecked} /></td>  */}
                {/* </tr> */}

                {/* <tr> */}
                    {/* 6 */}
                {/* <td><img src={pdfIcon} className="table-image"/></td> */}
                {/* <td className="sample">sample_name_finances_2023.pdf</td> */}
                {/* <td className="published-time">15.11.2021</td> */}
                {/* <td className="downloaded-time">9.07.2008</td> */}
                {/* <td className="check-box"><input type="checkbox" checked={isChecked} /></td>  */}
                {/* </tr> */}

                {/* <tr> */}
                    {/* 7 */}
                    {/* <td><img src={imageIcon} className="table-image"/></td> */}
                    {/* <td className="sample">sample_name_finances_2023.pdf</td> */}
                {/* <td className="published-time">15.11.2023</td> */}
                {/* <td className="downloaded-time">12.07.2012</td> */}
                {/* <td className="check-box"><input type="checkbox" checked={isChecked} /></td>  */}
                {/* </tr>                 */}
            </tbody>
            {/* <hr></hr> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
