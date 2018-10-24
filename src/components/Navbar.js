import React, { Component } from 'react'
import { Menu,  Button, Modal, Form  } from 'semantic-ui-react'

class Navbar extends Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem, open, size  } = this.state
  
    return (
      <Menu>
        <Menu.Item name='gabivora' active={activeItem === 'gabivora'} onClick={this.handleItemClick}>
          GABIVORA
        </Menu.Item>

        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          Home
        </Menu.Item>
        
        <Menu.Item name='tentangkami' active={activeItem === 'tentangkami'} onClick={this.handleItemClick}>
          Tentang Kami
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.show('tiny')}>
            Login
          </Menu.Item>
          <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick}>
            Register
          </Menu.Item>
            <Modal size={size} open={open} onClose={this.close}>
                <Modal.Header>SILAHKAN LOGIN DI GABIVORA</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder='Password' />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green'><i class="unlock alternate icon"></i>Login</Button>
                    <Button color='red'>Register</Button>
                </Modal.Actions>
            </Modal>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar