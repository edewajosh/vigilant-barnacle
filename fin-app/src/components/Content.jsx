import { useEffect, useState } from "react"
import Payment from "./Payment"

const API_URL = 'http://127.0.0.1:8002/api/v1/payment/transaction/'

const Content = () => {
    const [payments, setPayments] = useState([])
    
    useEffect(() => {
      const fetchPaymentDetails = async () => {
        const req = await fetch(API_URL)
        const data = await req.json()
        setPayments(data)
      }

      fetchPaymentDetails()
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