import axios from './api'

const TotalCommand = {
	async getAmenities() {
		const amenities = await axios.get('/content/convenience/')
		return amenities.data.results
	},
	async getOpinions() {
		const opinions = await axios.get('/content/review/')
		return opinions.data.results
	},
	async getPartners() {
		const opinions = await axios.get('/content/partners/')
		return opinions.data.results
	}
}

export default TotalCommand