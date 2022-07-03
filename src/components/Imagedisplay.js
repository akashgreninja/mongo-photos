import React ,{useState,useEffect} from 'react'

function Imagedisplay() {
    const [notes, setnotes] = useState([])

    useEffect(() => {
        
          allNotes()
      
        // eslint-disable-next-line 
      }, [])
    const allNotes = async () => {
       
        const response = await fetch(`http://localhost:5000/check/getall`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
           
          },
        });
        const json=await response.json()
      
        setnotes(json)
        console.log(json)
      };

  return (
    <>
    <div>Imagedisplay</div>
    { notes.map((e)=>{
        // const base=btoa(String.fromCharCode(...new Uint8Array(e.photo)));
        // console.log(e.photo.data.data)
        // console.log(base)
        // return <img src={`data:image/jpeg;charset=utf-8;base64,${convertBufferToBase64(e.photo.data.data)}`} alt="sassq" />
        return <img src={`${e.photo}`} alt="sassq" />
        
    })}
    </>
  )
}

export default Imagedisplay