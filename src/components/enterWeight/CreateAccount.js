import React, {Component} from "react";
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

function CreateAccount() {
        const { register, handleSubmit, formState: { errors } } = useForm({
            mode:"onTouched",
        });
        console.log(errors);
        const onSubmit = (data) => console.log(data);
        
        return (
            <div className='App'>
            <div className='container py-3'>
              <div className='card border-0 shadow w-75 p-3 mx-auto'>
              <h2>Account Create</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-group">
                 <label htmlFor="fullname">Full Name</label>
                 <input
                   id="fullname"
                   type="text"
                   className={classNames("form-control",{"is-invalid":errors.fullname})}
                   placeholder="Enter Your Full Name"
                   {...register('fullname', { 
                    required: "this field is required",
                    minLength:{
                     value:4,
                     message:"please enter fullname minimum 4 characters"
                    }
                    })}
                 />
                 {errors.fullname && 
                 (<div className="invalid-feedback">{errors.fullname.message}</div>)}

               </div>
               <div className="form-group">
                 <label htmlFor="email">E-mail Address</label>
                 <input
                   id="email"
                   type="text"
                   className={classNames("form-control",{"is-invalid":errors.email})}
                   {...register('email', { 
                    required: "this field is required",
                    pattern:{
                        value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: "Please enter valid email address",
                    }
                 })}
                   placeholder="Enter Your E-mail Address"
                 />
                 {errors.email && 
                 (<div className="invalid-feedback">{errors.email.message}</div>)}
               </div>
               <div className="form-group">
                 <label htmlFor="phone">Phone Number</label>
                 <input
                   id="phone"
                   type="text"
                   className={classNames("form-control",{"is-invalid":errors.phone})}
                   placeholder="Enter Your Phone Number"
                   {...register('phone', {
                    required: "this field is required",
                    pattern:{
                        value:/^\d{10}$/,
                        message: "Please enter valid 10 digit phone number",
                    }
                    })}
                 />
                 {errors.phone && 
                 (<div className="invalid-feedback">{errors.phone.message}</div>)}
               </div>
               <div className="form-group">
                 <label htmlFor="password">Password</label>
                 <input
                   id="password"
                   type="password"
                   className={classNames("form-control",{"is-invalid":errors.password})}
                   placeholder="Enter Your Password"
                   {...register('password', { 
                    required: true,
                    pattern:{
                        value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                        message: "Please (Uppercase, Lowercase, Number/SpecialChar and min 8 Chars)",
                    }
                })}
                 />
                 {errors.password && 
                 (<div className="invalid-feedback">{errors.password.message}</div>)}
               </div>
               <div className="form-group">
                 <label htmlFor="state">Choose Your State</label>
                 <select className={classNames("form-control",{"is-invalid":errors.state})} id="state" {...register('state', { 
                    required: "this field is required",
                    })}>
                   <option value="">--- Select Your State ---</option>
                   <option value="Jharkhand">Jharkhand</option>
                   <option value="Assam">Assam</option>
                   <option value="Meghalaya">Meghalaya</option>
                   <option value="Punjab">Punjab</option>
                 </select>
                 {errors.state && 
                 (<div className="invalid-feedback">{errors.state.message}</div>)}
               </div>
               <div className="form-group">
                 <label htmlFor="gender" className="mr-4">Choose Your Gender</label>
                 <div className="form-check form-check-inline">
                   <input
                     className="form-check-input"
                     type="radio"
                     id="male"
                     value="male"
                     {...register('gender', { 
                        required: "this field is required",
                    })}
                   />
                   <label className="form-check-label" htmlFor="male">male</label>
                 </div>
                 <div className="form-check form-check-inline">
                   <input
                     className="form-check-input"
                     type="radio"
                     id="female"
                     value="female"
                     {...register('gender', { 
                        required: "this field is required",
                    })}
                   />
                   <label className="form-check-label" htmlFor="female">female</label>
                 </div>
                 <div className="form-check form-check-inline">
                   <input
                     className="form-check-input"
                     type="radio"
                     id="other"
                     value="other"
                     {...register('gender', {
                        required: "this field is required",
                        })}
                   />
                   <label className="form-check-label" htmlFor="other">other</label>
                 </div>
                 {errors.gender && 
                 (<div className="form-text text-danger">{errors.gender.message}</div>)}
               </div>
               <div className="form-group">
                 <div className="form-check form-check-inline">
                   <input className="form-check-input" type="checkbox" id="tnc"  {...register('tnc', { 
                    required: "this field is required",
                     })}/>
                   <label className="form-check-label" htmlFor="tnc"
                     >I agree all terms & conditions</label
                   >
                 </div>
                 {errors.tnc && 
                 (<div className="form-text text-danger">{errors.tnc.message}</div>)}
               </div>
               <button className="btn btn-primary" type="submit">Create New Account</button>
             </form>
              </div> 
            </div>
           </div>
            )
        
}


export default CreateAccount 
