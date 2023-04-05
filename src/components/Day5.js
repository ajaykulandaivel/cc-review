import React from 'react'

export default function Day5() {
    var fruits=["apple","orange","grapes","watermelon"]
    var displayfruits=fruits.map(fname=>{return <li>{fname}</li>})/*outside the function */
    const stuinfo=[{id:1,name:"nandhu"},{id:2,name:"hari"},{id:3,name:"bhuvii"},{id:4,name:"tna"},{id:5,name:"naveen"},{id:6,name:"jasiel"}]
  return (
    <div>{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    <TryCatch name="ajay"></TryCatch>
    </div>
  )
}
function TryCatch(props){
    try{
        if(props.name==="ajay"){
            throw new Error("INVALID USER")
        }
    }
    catch(error){
        console.log(error)
    }
    //finally{
        //document.write("ALWAYS EXCEUTED")
   // }
    return(
        <>
    <p>{props.name}</p>
        </>
    );
}