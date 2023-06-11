// import { Row, Col } from 'react-bootstrap'
import './SASS/security.scss'
const Security = () => {
return (
    <>
    <div className="security-wrapper">
         <h3 className='security-header'>Security</h3>

         <p className='paragraph'>Change your password and/or your prefered <br />two-factor authentcation method. </p>


         <h2 className='current'>Current MFA-Method:</h2>
         <p className='auth'>Authenticator</p>


         <div className="change">
            {/* <Row>
               <Col xs={9}> */}
               <a href="/">Change method</a>
               {/* </Col> */}

               {/* <Col xs={3}> */}
                <button>CHANGE PASSWORD</button>
               {/* </Col>
            </Row> */}
         </div>
    </div>
    </>
)
}

export default Security