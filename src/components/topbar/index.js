import React from 'react'

import { Icon, Button, Layout, Drawer } from 'antd'
const { Header } = Layout

const navbarStyle = {
    height: '100%',
    background: '#363636',
    color: '#fff',
    padding: '0 20px'
}

class Topbar extends React.Component {

    state = {visible: false}

    showDrawer = () => {
        this.setState({visible: true})
    }

    onClose = () => {
        this.setState({visible: false})
    }

    render() {
        return (
            <Layout>
                <Header style={navbarStyle}>
                    {/* <Button shape='circle' icon='setting' onClick={this.showDrawer} /> */}
                    <Icon type="setting" onClick={this.showDrawer} />
                </Header>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >

                </Drawer>
            </Layout>
        )
    }
}

export default Topbar