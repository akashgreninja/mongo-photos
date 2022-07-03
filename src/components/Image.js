import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import FileBase64 from 'react-file-base64';
const Image = () => {
  const [credentials, setcredentials] = useState({ email: "" });
  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData();

    // formData.append("title", "hoola");
    // formData.append("image", file);
    // console.log(file)

    const response = await fetch(
      `${host}/check/goimages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:"ddwdw",photo:file})
        // body:formData
      },
      console.log(JSON.stringify({file}))
    );

    // let a = await response.json();
    // console.log(formData);
    // axios.post( `http://localhost:5000/check/goimages`,formData,).then(res=>{
    //   console.log(formData)
    // }).catch(
    //   err=>console.log(err)
    // )
    
   
  };
  const filePickerRef = useRef();
  const [file, setfile] = useState({ title: '', image: '' });
  const [previewUrl, setpreviewUrl] = useState();
  const [isValid, setisValid] = useState(false);
  // useEffect(() => {
  //   if (!file) {
  //     return;
  //   }
  //   const fileReader = new FileReader();
  //   fileReader.onload = () => {
  //     setpreviewUrl(fileReader.result);
  //   };
  //   fileReader.readAsDataURL(file);
  // }, [file]);

  const pickedHandle = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      const pickedfile = e.target.files[0];
      setfile(pickedfile);
      setisValid(true);
    } else {
      setisValid(false);
    }
  };
  const ImageHandler = () => {
    filePickerRef.current.click();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setfile({ ...file, image: base64 })}
        />
        <div>
          <img src={previewUrl} alt="Preview" />
        </div>
        {/* <input type="title" className="form-control" id="title" value={credentials.email} onChange={onChange} name="title"  /> */}
        {/* <button type="button" onClick={ImageHandler}>
          Pick image
        </button> */}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Image;
