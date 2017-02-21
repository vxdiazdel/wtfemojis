const app = new Vue({
	el: '#app',
	data: {
		emojis: [],
		searchText: '',
		api: 'https://wtfemojisapi.herokuapp.com/wtf'
	},
	created: function() {
		this.fetchEmojis()
			.done((result) => {
				this.emojis = result.data;
			})
			.fail((result) => {
				this.emojis = [];
				console.error('Could not fetch emojis.');
			});
	},
	computed: {
		filteredList: function() {
			return this.emojis.filter((emoji) => {
				return emoji.name.indexOf(this.searchText) !== -1;
			});
		}
	},
	methods: {
		fetchEmojis: () => {
			return $.ajax({
				method: 'GET',
				url: 'https://wtfemojisapi.herokuapp.com/wtf',
				crossDomain: true,
				dataType: 'json'
			});
		}
	}
});
