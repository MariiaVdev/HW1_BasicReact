import { Component } from 'react'
import styles from './App.module.scss';
import Button from './components/Button/Button.js'



class App extends Component {

	state = {
		isOpenModal: false,
		isOpenModal2: false,
	}

	modalState = () => {
		{
			!this.state.isOpenModal ? this.setState({
				isOpenModal: true
			}) : this.setState({
				isOpenModal: false
			})
		}
	}

	modalState2 = () => {
		{
			!this.state.isOpenModal2 ? this.setState({
				isOpenModal2: true
			}) : this.setState({
				isOpenModal2: false
			})
		}
	}

	render() {
		return (
			<>
				<Button bgColor={'#00b763'} textBtn={'Open first modal'} onClick={this.modalState} isOpenModal={this.state.isOpenModal} header={'Do you want to delete this file?'}
					closeButton={true} text={"Once you delete this file, it won't be possible to undo this action."}
					actions={<>
						<button className={styles.modalConfirmBtn} onClick={this.modalState}>Ok</button>
						<button className={styles.modalCancelBtn} onClick={this.modalState}>Cancel</button>
					</>} />

				<Button bgColor={'#2866c1'} textBtn={'Open second modal'} onClick={this.modalState2} isOpenModal={this.state.isOpenModal2} header={'Do you want to delete this file?'}
					closeButton={true} text={"Be careful, this action is irreversible."}
					actions={<>
						<button className={styles.modalConfirmBtn2} onClick={this.modalState2}>Ok</button>
						<button className={styles.modalCancelBtn2} onClick={this.modalState2}>Cancel</button>
					</>} />

			</>
		)
	}
}

export default App
