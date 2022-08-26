
const Payment = ({service}) => {
  return (
    <div className="content-container">
        <h2>{service.name}</h2>
        { service.type_of_transaction === 'IN'? <p>Incoming</p> : <p>Outgoing</p> }
        <p>{service.created_by}</p>
        <p>{service.description}</p>
    </div>
  )
}

export default Payment