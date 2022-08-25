import { useContext, useEffect, useState } from "react"
import { LoginProvider } from "../context/LoginContext"
import Payment from "./Payment"

const API_URL = 'http://127.0.0.1:8002/api/v1/payment/transaction/'

const Content = () => {
    const [payments, setPayments] = useState([])
    const [token, ] = useContext(LoginProvider)
    
    useEffect(() => {
      const fetchPaymentDetails = async () => {
        const req = await fetch(API_URL, {
          headers: {
            Authentication: 'Bearer '+ token,
          }
        })
        const data = await req.json()
        setPayments(data)
      }
      fetchPaymentDetails()
      console.log('Line 21 Payment',payments)
    }, [])
    
  return (
    <div className="content">
        <ul>
            {
                payments && payments.map((payment) => (
                    <Payment key={payment.id} payment={payment} />
                ))
            }
        </ul>
    </div>
  )
}

export default Content