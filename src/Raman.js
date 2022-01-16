 
import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";

const Raman = () => {

    const[name, setName] = useState("");
    const[fullName, setFullName] = useState("");
    const[password, setPassword] = useState("");
    const changeValue = (e)=>{
        setName(e.target.value);
    }

    const onSubmit= (e)=>{
      e.preventDefault();
      setFullName(name);
    }
    const changeSet = (event)=>{
       setPassword(event.target.value)
    }
  
    return (
        <>  
            <form onSubmit={onSubmit}>
            <div className='main-div'>
                <h2 className='text-center'> <FaGithub/> Hello {fullName} </h2>
                <input type="text"
                  placeholder='Enter your Name'
                      onChange={changeValue}
                      value={name}
                  />
                  <br />
                  <input type="password"
                  placeholder='Enter your password'
                      onChange={changeSet}
                      value={password}
                  />
                  <button type='submit' className='btn btn-primary '> submit me</button>
                  <section>
                      <option value="1">1</option>
                      <option value="5">5</option>
                      <option value="89">89</option>
                      <option value="09">09</option>
                  </section>

            </div>
            </form>
        </>
    )
}

export default Raman

