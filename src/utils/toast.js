import PropTypes from 'prop-types'
import EventManager from '../libs/EventManager';

export const toastEventManager = new EventManager();

export default function toast({ type, text }) {
	toastEventManager.emit('addtoast', { type, text })
}



toast.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}
