function Alerts() {
  const items = JSON.parse(localStorage.getItem("items")) || []
  const today = new Date()

  const expiring = items.filter(item => {
    const exp = new Date(item.expiryDate)
    const diff = (exp - today) / (1000 * 60 * 60 * 24)
    return diff <= 30
  })

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Expiring Soon</h1>
      {expiring.map(item => (
        <p key={item.id} className="text-red-600">
          {item.name} expires on {item.expiryDate}
        </p>
      ))}
    </div>
  )
}

export default Alerts
