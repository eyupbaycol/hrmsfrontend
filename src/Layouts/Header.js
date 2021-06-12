import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Dropdown, Menu, Segment,Icon,Input,Image, Container } from 'semantic-ui-react'
function Header() {
   const [state,setState] = useState('Ana Sayfa')

  const handleItemClick = (e, { name }) => setState( name)
   
    return (
       <Segment fixed="top" >
        <Menu secondary >
            <Menu.Item>
            <Icon color="purple" name="google wallet" size='big' /> 
            <a color="black">JOBHUNTER</a>
            </Menu.Item>    
            <Menu.Item>
            <Input icon='search' placeholder='Search...'/>
            </Menu.Item>
          <Menu.Item
           position="right"
            color="blue"
            name="Ana Sayfa"
            active={state === 'Ana Sayfa'}
            onClick={handleItemClick}
            as={NavLink}
            to="/jobSeeker"
          />
          <Menu.Item
            name='İş İlanları'
            active={state === 'İş İlanları'}
            onClick={handleItemClick}
            color="purple"
            as={NavLink}
            to="/jobAdvertisement"
          />
          <Menu.Item
            name='Hakkımızda'
            active={state === 'Hakkımızda'}
            color="yellow"
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Profil'
            active={state === 'Profil'}
            color="red"
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Öz Geçmişler'
            active={state === 'Öz Geçmişler'}
            color="green"
            onClick={handleItemClick}
          />
          <Menu.Item >
             <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C5603AQF7jros6d0R1g/profile-displayphoto-shrink_200_200/0/1548658433692?e=1628121600&v=beta&t=Ch6qxusVlGy4xWGXfSCnBNVEOKIPjcjvVXFV7hHGxBo"/>
             <Dropdown pointing="top left">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
         </Menu.Item>
        </Menu>
        </Segment>
    )
}

export default Header
