import {useState} from 'react'
import './SASS/download.scss'
const Download = ({showDownload}) => {

const [showContainer, setShowContainer] = useState(showDownload)

const handleShowClick = () => {
    setShowContainer(false)
}

        return (
            <>
            {showContainer && (
            <div className="container">
            <div className="download-container ">
                       <footer>
                           <span className='delete' onClick={handleShowClick}><i class="ri-close-fill"></i></span>
                           <div className="icons-container">
                               <span className='file1'><i class="ri-file-3-fill"></i></span>
           <span className='file-search'><i class="ri-file-search-line"></i></span>
           <span className='file1'><i class="ri-file-3-fill"></i></span>
           
                           </div>
                      <p className='footer'>7 files are currently being Downloaded</p> 
           
                       </footer>
                   </div>
                       </div>
            )

            }

       
       </>
        )
    }
    
    export default Download