
const Payment = ({payment}) => {
  return (
    <div>
        <h2>{payment.name}</h2>
        <p>{payment.description}</p>
        <p>{payment.completed}</p>
    </div>
  )
}

export default Payment