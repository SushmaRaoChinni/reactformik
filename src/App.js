import './App.css';
import { useFormik } from 'formik';

const App = () =>{
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
   onSubmit:(values)=>{
    console.log('form submit', values)
   },
   validate:(values) =>{
    let errors ={}
    if(!values.name){
      errors.name = "Name is required"
    }
    if(!values.email){
      errors.email = "Email is required"
    }
    if(!values.password){
      errors.password = "password is required"
    }
    return errors;
   }

  })
  return (
    <div className="App">
      <h1>Vaildation Form</h1>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input type='text' name="name" id="name"
        value={formik.values.name} onChange={formik.handleChange}/>
        {formik.errors.name?<div className='errors'>{formik.errors.name}</div>:null}<br/>

        <label>Email</label>
        <input type="email" name="email" id="email"
        value={formik.values.email} onChange={formik.handleChange}/>
        {formik.errors.email?<div className='errors'>{formik.errors.email}</div>:null} <br/>

        <label>Password</label>
        <input type="password" name="password" id="password"
         value={formik.values.name} onChange={formik.handleChange}/>
         {formik.errors.password?<div className='errors'>{formik.errors.password}</div>:null}
         <br/>


        <button  className="button" type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
