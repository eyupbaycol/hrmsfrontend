import React from 'react'
import {NavLink} from 'react-router-dom'
import {
  Icon,
  Menu,
  Segment,
  Sidebar,
  List,
  Dropdown,
  Image,
  Label
} from 'semantic-ui-react'
function AdminPanelSideBar() {
  return (
    <div>
      <Sidebar
        as={Menu}
        icon='labeled'
        vertical
        visible
        className="custom"
      >
        <Menu.Item>
          <Image size="tiny" avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C5603AQF7jros6d0R1g/profile-displayphoto-shrink_200_200/0/1548658433692?e=1628121600&v=beta&t=Ch6qxusVlGy4xWGXfSCnBNVEOKIPjcjvVXFV7hHGxBo" />
        </Menu.Item>
        <Menu.Item >
        <span> Onayda Bekleyen Şirket Hesapları </span>
        </Menu.Item>
        <Menu.Item as={NavLink} to="/confAdvertisementList">Onayda Bekleyen İş İlanları</Menu.Item>
        <Menu.Item >Onayda Bekleyen Profil Güncellemeleri</Menu.Item>
      </Sidebar>
    </div>
  )
}

export default AdminPanelSideBar
