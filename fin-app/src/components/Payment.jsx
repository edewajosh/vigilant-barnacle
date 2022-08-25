
const Payment = ({payment}) => {
  return (
    <div>
        <h2>{payment.transaction_id}</h2>
        <p>{payment.service_uuid}</p>
        <p>{payment.completed}</p>
    </div>
  )
}

export default Payment