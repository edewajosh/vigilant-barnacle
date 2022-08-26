import { useContext, useEffect, useState } from "react"
import { LoginProvider } from "../context/LoginContext"

const API_URL = 'http://127.0.0.1:8002/api/v1/payment/transaction/'
const SERVICE_API_URL = 'http://127.0.0.1:8001/api/v1/product/services/'

const Content = () => {
    const [packages, setPackages] = useState([])
    const [create, setCreate] = useState(false)

    const [token, ] = useContext(LoginProvider)


    const fetchDetails = async () => {
      const req = await fetch(SERVICE_API_URL, {
        headers: {
          'Authentication': 'Bearer '+ token,
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      const data = await req.json()
      setPackages(data)
    }
    
    useEffect(() => {
      fetchDetails()
    }, [])

  const servicePayment = async (service) => {
    const req = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authentication': 'Bearer '+ token,
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({'service_uuid': service.service_id})
    })
    console.log(req.status)
    if (req.status === 201){
      fetchDetails()
    }
  }

    
  return (
    <div className="content">

      <table className="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>ID</th>
            <th>Type</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { packages && packages.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.created_by}</td>
              <td>{service.service_id}</td>
              { service.type_of_transaction === 'IN'? <td>Incoming</td> : <td>Outgoing</td> }
              { service.payment_complete === false? 
              <td><button className="paidButton button" onClick={() => servicePayment(service)}>Pay</button></td>
              : <td><button className="paidButton1 button" disabled>Paid</button></td>}
              <td><button className="paidButton2 button" disabled>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Content