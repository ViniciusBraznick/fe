import PropTypes from 'prop-types'
import EventManager from '../libs/EventManager';

export const toastEventManager = new EventManager();

export default function toast({ type, text, duration }) {
	toastEventManager.emit('addtoast', { type, text, duration })
}



toast.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	duration: PropTypes.number
}
