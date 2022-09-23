import React,{useState,useEffect} from 'react'

const HomePage = () => {

    // useEffect(()=>{
    //     console.log(data)
    // },[])
    const [user,setUser] = useState("")
    const [data,setData] = useState({
        fname:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        let value = e.target.value
        let name = e.target.name
        setData((prev)=>{return {...prev,[name]:value}})
        console.log(data)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const res = await fetch('api/signup/',{
            method:"POST",
            "headers":{
                'Content-Type':'application/json',
              },
              body:JSON.stringify(data)
        })
        console.log(res)
        const datas = await res.json()
        setUser(datas)
        console.log(user)
        console.log("Form Data submitted")


    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name</label>
                <input onChange={handleChange} type="text" name="fname"/>
            </div>
            <div>
                <label>email</label>
                <input onChange={handleChange} type="email" name="email"/>
            </div>
            <div>
                <label>password</label>
                <input onChange={handleChange} type="password" name="password"/>
            </div>
            <button type="submit">Submit</button>
        </form>
        {user && user.map((use,index)=>(
            <p key={index}>
            {use.fname}
            </p>
        ))}
    </div>
  )
}

export default HomePage