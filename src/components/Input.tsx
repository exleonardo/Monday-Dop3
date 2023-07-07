import React, {ChangeEvent, RefObject, useState} from "react";

type InputType = {
  newTitle:RefObject<HTMLInputElement>
  // setNewTitle:(value:string)=>void
}
const Input = (props:InputType) => {
//   // const [newTitle , setNewTitle]=useState("")
//   const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
// props.setNewTitle(e.currentTarget.value)
//   }
  return (
    // <input value={props.newTitle} onChange={onChangeHandler} />
    <input  ref={props.newTitle} />
  );
};

export default Input;
//-----------------------------------------------------------------------------------------
// import React, {ChangeEvent ,useState} from 'react';
//
// type InputType = {
//   newTitle:string;
//   setNewTitle:(value:string)=>void
// }
// const Input = (props:InputType) => {
//   // const [newTitle , setNewTitle]=useState("")
//   const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
//     props.setNewTitle(e.currentTarget.value)
//   }
//   return (
//     <input value={props.newTitle} onChange={onChangeHandler} />
//   );
// };
//
// export default Input;