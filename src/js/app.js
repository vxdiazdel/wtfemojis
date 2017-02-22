const app = new Vue({
	el: '#app',
	data: {
		emojis: [],
		searchText: '',
		api: 'https://wtfemojisapi.herokuapp.com/wtf',
		copied: false,
		error: false
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
		fetchEmojis: function() {
			return $.ajax({
				method: 'GET',
				url: 'https://wtfemojisapi.herokuapp.com/wtf',
				crossDomain: true,
				dataType: 'json'
			});
		},
		copy: function(e) {
			const copyText = e.target;
			const range = document.createRange();

			range.selectNode(copyText);
			window.getSelection().addRange(range);

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
