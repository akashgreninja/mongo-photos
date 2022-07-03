import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
const Image = () => {
  const [credentials, setcredentials] = useState({ email: "" });
  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", "hoola");
    formData.append("image", file);

    // const response = await fetch(
    //   `${host}/check/goimages`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: formData,
    //     // body:formData
    //   }
    //   // console.log(JSON.stringify({email:"ddwdw"}))
    // );

    // let a = await response.json();
    console.log(formData);
    axios.post( `http://localhost:5000/check/goimages`,formData,).then(res=>{
      console.log(res)
    }).catch(
      err=>console.log(err)
    )
    
   
  };
  const filePickerRef = useRef();
  const [file, setfile] = useState();
  const [previewUrl, setpreviewUrl] = useState();
  const [isValid, setisValid] = useState(false);
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setpreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

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
        <input
          id="hola"
          ref={filePickerRef}
          type="file"
          accept=".jpg,.png,.jpeg"
          onChange={pickedHandle}
          style={{ display: "none" }}
        />
        <div>
          <img src={previewUrl} alt="Preview" />
        </div>
        {/* <input type="title" className="form-control" id="title" value={credentials.email} onChange={onChange} name="title"  /> */}
        <button type="button" onClick={ImageHandler}>
          Pick image
        </button>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Image;
