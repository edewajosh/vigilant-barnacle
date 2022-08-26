import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginProvider } from "../context/LoginContext"

const SERVICE_API_URL = 'http://127.0.0.1:8001/api/v1/product/services/'

const AddService = () => {


    const [token, ] = useContext(LoginProvider)

    const navigate = useNavigate()

    const [service, setService] = useState({
        name: '',
        created_by: '',
        type_of_transaction: '',
        description: ''
    })

    const {name, created_by, type_of_transaction, description} = service

    const onChange = (e) => {
        setService((prevState) => ({
            ...prevState,
            [e.target.id] : e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const req = await fetch(SERVICE_API_URL, {
                method: 'POST',
                headers: {
                    'Authentication': 'Bearer '+ token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(service)
            })
            // const res = await req.json()
            // console.log(res)
            if(req.status === 201){
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="explore addService">
        <h3>Create a Service</h3>
        <form onSubmit={onSubmit}>
            <div className="row-1">
                <div className="col-75">
                    <input 
                        type="text" 
                        className="serviceName" 
                        id="name"
                        placeholder="Service name"
                        value={name}
                        onChange={onChange}
                        />
                </div>
                <div className="col-75">
                    <input 
                        type="email" 
                        className="serviceName" 
                        id="created_by" 
                        placeholder="Your email"
                        value={created_by}
                        onChange={onChange}
                        />
                </div>
                <div className="col-75">
                    <select 
                        defaultValue={'DEFAULT'}
                        className="typeOfService" 
                        id="type_of_transaction" 
                        value={type_of_transaction} 
                        onChange={onChange}>
                        <option value="DEFAULT">Type of transaction</option>
                        <option value="IN">Incoming</option>
                        <option value="OUT">Outgoing</option>
                    </select>
                </div>
                <div className="col-75">
                    <textarea 
                        className="subject" 
                        id="description" 
                        placeholder="Describe service ..." 
                        value={description}
                        onChange={onChange}
                        ></textarea>
                </div>
                <button className="submitButton">Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default AddService