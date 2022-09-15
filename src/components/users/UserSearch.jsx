import React from "react";
import { useState,useContext } from "react";
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
  const [text, settext] = useState('');
  const {users,searchusers,clearusers} = useContext(GithubContext)


  const handlechange = (e)=>{
    settext(e.target.value);

  }

  const handlesubmit =(e)=>{
    e.preventDefault();

    if(text===''){
        alert("enter some value")
    }
    else{
        searchusers(text)

        //to something on search
       
    }
    
  }

  


//from context menu



  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8 ">
      <div>
        <form onSubmit={handlesubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="input input-bordered  input-lg w-full "
                value={text}
                onChange={handlechange}
                
              />

              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-30 btn btn-lg"
                
               

              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0&&(<div>
        <button className="btn btn-lg btn-outline" onClick={clearusers}>Clear</button>
      </div>)}
      
    </div>
  );
}

export default UserSearch;
