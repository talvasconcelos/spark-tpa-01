import React from 'react';

import Topbar from './components/topbar'
import Display from './components/display'
import Keypad from './components/keypad'
import Buttonrow from './components/buttonrow'
import { getWidth, validateUrl } from './utils'

export default class App extends React.Component {
  state = {
		payValue: '',
		sanitizedValue: 0,
		fontSize: 120,
		clientConfirm: false,
		btcpayOpen: false,
		btcpayurl: null,
		orderId: null,
		visible: false
	}

  checkSize = () => {
		const div = document.getElementById('display')
		let maxWidth = getWidth(div.parentElement)
		let curWidth = getWidth(div, 1)
		const fontSize = this.state.fontSize
		const gamma = maxWidth / curWidth || 0
		if(curWidth > maxWidth){
			return this.setState({fontSize: Math.floor(fontSize * gamma)})
		}	
		
		if(curWidth < maxWidth && fontSize < 120) {
			return this.setState({fontSize: Math.min(fontSize * gamma, 120)})
		}
  }
  
  handleInput = (e) => {
		if(this.state.clientConfirm) return
		const key = e
		let value = this.state.payValue
		if(key == 'C') {
			value = value.substring(0, value.length - 1)
			if(value == '0'){value = ''}
			this.setState({payValue: value, sanitizedValue: Math.round(parseFloat(value) * 100) / 100})
			return this.checkSize()
		}
		if(key == '.' && value.includes(key)) return
		if(!value.length && key == '.') return this.setState({payValue: '0.'})
		this.setState((state, props) => {
			value = state.payValue + key
			return { payValue: value, sanitizedValue: Math.round(parseFloat(value) * 100) / 100 }
		})
		
		return this.checkSize()
  }
  
  handleCancel = () => {
		if(this.state.payValue === '') return
		return this.setState({
			payValue: '',
			clientConfirm: false,
			sanitizedValue: 0,
			orderId: null
		})
  }
  
  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <div className='root'>
					<Topbar openDrawer={this.showModal} />
					<Display value={this.state.payValue} fontSize={this.state.fontSize} />
					<div style={{display: 'flex', flexFlow: 'column', justifyContent: 'flex-end', height: '100%'}}>
						<Keypad click={this.handleInput} />
						<Buttonrow confirm={this.handleConfirm} cancel={this.handleCancel} />
					</div>
				</div>
    )
  }
}