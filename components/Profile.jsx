import './SASS/profile.scss';
// import {Row, Col} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
const Profile = () => {

    const {register, formState: {errors}, handleSubmit} = useForm()

    const [showPassword, setShowPassword] = useState(false);

  

    const onSubmit = (data) => console.log(data)
return (
    <>
    <div className="wrapper">
        <div className="profile-card">
        <div className='profile-header'> 
           <h5>Profile Information</h5>
        </div>


        <form onSubmit={handleSubmit(onSubmit)} >
            {/* First Name Input */}
        <div className="form-floating mb-3">
              <input type="text" name='firstName' placeholder='First Name'
              {...register("firstName", {
                required: "First Name is required",
                pattern: {
                 value:  /^[a-zA-Z]{3,}$/,
                message: "Name Must Be More Than 2 letters",
              }
              })
            }
            className={`form-control ${errors.firstName ? 'border-danger' : ''}`}
               id="floatingInput" ></input>
              <label htmlFor="floatingInput" className="form-label">First Name</label>
            <p className='error'>{errors.firstName?.message}</p>
            </div>

{/* Last Name Input*/}
            <div className="form-floating mb-3">
              <input type="text" name='lastName' placeholder='Last Name'
              {...register("lastName", {
                required: "Last Name is required",
                pattern: {
                 value: /^[a-zA-Z]{3,}$/,
                message: "Name Must Be More Than 2 Letters",
              }
              })
            }
            className={`form-control ${errors.lastName ? 'border-danger' : ''}`}
               id="floatingInput" ></input>
              <label htmlFor="floatingInput" className="form-label">Last Name</label>
            <p className='error'>{errors.lastName?.message}</p>
            </div>



{/* Email Input */}
            <div className="form-floating mb-3">
              <input type="email" name='email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                 value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email Must Be Valid",
              }
              })
            }
            className={`form-control ${errors.email ? 'border-danger' : ''}`}
               id="floatingInput" placeholder='Email'></input>
              <label htmlFor="floatingInput" className="form-label">Email</label>
            <p className='error'>{errors.email?.message}</p>
            </div>

            {/* Password Input */}
            <div className="form-floating">


              <input type={showPassword ? 'text' : 'password'}   name='password' {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,

                  message: "Password Must Be More Than 8 digits, Contains One Letter & Special Character",
                },
                minLength:{
                  value: 8,
                  message: "Password Must Have at least 8 charachters",
                }
              })} 
              className={`form-control ${errors.password ? 'border-danger' : ''}`}
              placeholder='Password'
              id="floatingInput" />
              <label htmlFor="floatingInput" className="form-label">Password</label>
              <span className='eye-password' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <i className="ri-eye-off-fill"></i> : <i className="ri-eye-fill"></i>}
              </span>
              <p className='error'>{errors.password?.message}</p>
            
            </div>
            <button className='save' type='submit'>Save</button>

            </form>     
                   

        </div>
    </div>
    
    </>
)
}

export default Profile