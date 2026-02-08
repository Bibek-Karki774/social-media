import { useReducer } from "react";

function reducer(state, action){
  switch(action.type){
    case "SET_TITLE":
      return {...state, title: action.payload}
    case "SET_DESCRIPTION":
      return {...state, description: action.payload}
    case "RESET_FORM":
      return action.payload
    default:
      return state;
  }

}

function CreatePost({setAddPost}) {

 let initialState= {
  title:"",
  description:"",
  reactions:0
};

let handleSubmit= (e)=>{
   e.preventDefault();        
    setAddPost(postDetails);     
     dispatch({type:"RESET_FORM", payload: initialState});
}
  const [postDetails, dispatch ]=useReducer(reducer, initialState);

    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Post Tittle</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
      value={postDetails.title} onChange={(e)=>{dispatch({type:"SET_TITLE", payload: e.target.value})}} />
 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Desription</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
     value={postDetails.description} onChange={(e)=>{dispatch({type:"SET_DESCRIPTION", payload: e.target.value})}} />
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    );
}
export default CreatePost;