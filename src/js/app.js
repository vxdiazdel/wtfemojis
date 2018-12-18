const app = new Vue({
	el: '#app',
	data: {
		emojis: [],
		searchText: '',
		api: './config/emojis.json',
		copied: false,
		error: false,
		loaded: false
	},
	created: function() {
		this.fetchEmojis()
			.done((result) => {
				this.emojis = result;
				this.loaded = true;
			})
			.fail((result) => {
				this.emojis = [];
				console.error('Could not fetch emojis.');
			});
	},
	computed: {
		filteredList: function() {
			return this.emojis.filter((emoji) => {
				return emoji.name.toLowerCase().indexOf(this.searchText) !== -1;
			});
		}
	},
	methods: {
		fetchEmojis: function() {
			return $.ajax({
				method: 'GET',
				url: this.api,
				dataType: 'json'
			});
		},
		copy: function(e) {
			const copyText = e.target;
			const range = document.createRange();
			const selection = window.getSelection();

			range.selectNodeContents(copyText);
			selection.removeAllRanges();
			selection.addRange(range);

			if (document.execCommand('copy')) {
				this.copySuccess();
			} else {
				this.copyFail();
			}
		},
		copySuccess: function() {
			this.copied = true;
			window.getSelection().removeAllRanges();
			setTimeout(() => {
				this.copied = false;
			}, 1250);
		},
		copyFail: function() {
			this.error = true;
			setTimeout(() => {
				this.error = false;
			}, 1250);
		}
	}
});
