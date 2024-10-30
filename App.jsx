import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [des, setdes] = useState("");
  const [maintask, setmaintask] = useState("");
  const sumbite = (val) => {
    val.preventDefault();
    setmaintask([...maintask, { title, des }]);
    // console.log(maintask);
    // console.log(title)
    // console.log(des)
    setTitle("");
    setdes("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...maintask]
    copyTask.splice(i, 1)
    setmaintask(copyTask)
  }
  let renderTask = <h2>no task available</h2>;
  if(maintask.length > 0) {
     renderTask = maintask.map((t, index) => {
      return (
        <div className=" flex justify-between   border-b-[1px] border-b-gray-400 "> 
          <h4 className="text-2xl font-semibold p-2">{index + ":  "} {t.title } </h4> <br />
          <h5 className="w-2/3 text-lg font-semibold p-2">{index + ":  "}{t.des }</h5>
          <button onClick={() => {deleteHandler(i)}} className="text-sm bg-red-400 px-2 py-1 rounded-xl mt-5">Delete</button>
        </div>
      );
    });
  }
  return (
    <div className="w-full ">
      <div className=" h-[10vw] bg-zinc-700 rounded flex items-center justify-center pt-10">
        <h1 className="text-zinc-800 capitalize tracking-wide px-2 rounded-md font-serif text-4xl bg-[#f1f5f0] ">Do to List</h1>
      </div>
      <form onSubmit={sumbite}>
        <input
          className=" border-b-gray-100 px-4 py-2"
          type="text"
          placeholder="please enter your task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="m-10 border-zinc-700 px-5 py-2"
          type="text"
          placeholder="please enter your description"
          value={des}
          onChange={(event) => {
            setdes(event.target.value);
          }}
        />
        <button className="m-10 bg-zinc-800 px-3 py-2 text-xl text-white tracking-wide font-sans rounded-md">
          Add task
        </button>
      </form>
      <hr />
      <div className="p-6 bg-[#f1f5f0] text-zinc-700 text-5xl">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}

export default App;
