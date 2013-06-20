Ext.define('MyIndo', {
	singleton: true,
	config: {
		nameSpace: '',
		baseUrl: '',
		siteUrl: '',
		mediaUrl: '',
		defaultActionMethods: {
			read: 'POST',
			destroy: 'POST',
			create: 'POST',
			update: 'POST'
		},
		defaultReader: {
			type: 'json',
			root: 'data.items',
			totalProperty: 'data.totalCount'
		}
	},
	setNameSpace: function(str) {
		this.config.nameSpace = str;
	},
	getNameSpace: function(str) {
		return this.config.nameSpace + '.' + str;
	},
	setBaseUrl: function(url) {
		this.config.baseUrl = url;
	},
	setSiteUrl: function(url) {
		this.config.siteUrl = url;
	},
	getBaseUrl: function(url) {
		return this.config.baseUrl + url;
	},
	baseUrl: function(url) {
		return this.getBaseUrl(url);
	},
	getSiteUrl: function(url) {
		return this.config.siteUrl + url;
	},
	siteUrl: function(url) {
		return this.getSiteUrl(url);
	},
	setMediaUrl: function(url) {
		this.config.mediaUrl = url;
	},
	getMediaUrl: function(url) {
		return this.config.mediaUrl + url;
	},
	mediaUrl: function(url) {
		return this.getMediaUrl(url);
	}
});