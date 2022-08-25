import Content from "../components/Content"
import SideBar from "../components/SideBar"

const Dashboard = () => {
  return (
    <div className="row">
      <SideBar />
      <Content />
    </div>
  )
}

export default Dashboard