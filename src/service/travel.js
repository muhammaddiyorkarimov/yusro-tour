import axios from './api'

const Travel = {
	async getPlaces() {
		const places = await axios.get('/travel/places/')
		return places.data
	},
	async getTourPacks() {
		const opinions = await axios.get('/travel/tour-packs/')
		return opinions.data
	},
}

export default Travel