import {
	DeliveryMethod
} from "@shopify/shopify-api";

/**
 * @type {{[key: string]: import("@shopify/shopify-api").WebhookHandler}}
 */
export default {
	CUSTOMERS_DATA_REQUEST: {
		deliveryMethod: DeliveryMethod.Http,
		callbackUrl: "/api/webhooks",
		callback: async (topic, shop, body, webhookId) => {
			const payload = JSON.parse(body);
		},
	},

	CUSTOMERS_REDACT: {
		deliveryMethod: DeliveryMethod.Http,
		callbackUrl: "/api/webhooks",
		callback: async (topic, shop, body, webhookId) => {
			const payload = JSON.parse(body);
		},
	},

	SHOP_REDACT: {
		deliveryMethod: DeliveryMethod.Http,
		callbackUrl: "/api/webhooks",
		callback: async (topic, shop, body, webhookId) => {
			const payload = JSON.parse(body);
		},
	},

	PRODUCTS_UPDATE: {
		deliveryMethod: DeliveryMethod.Http,
		callbackUrl: "/api/webhooks",
		callback: async (topic, shop, body, webhookId) => {
			const payload = JSON.parse(body);
			console.log('product update: ', payload);
		},
	},

	// CARTS_CREATE: {
	// 	deliveryMethod: DeliveryMethod.Http,
	// 	callbackUrl: "/api/webhooks",
	// 	callback: async (topic, shop, body, webhookId) => {
	// 		const payload = JSON.parse(body);
	// 		console.log('CARTS_CREATE: ', payload);
	// 	},
	// },

	// CARTS_UPDATE: {
	// 	deliveryMethod: DeliveryMethod.Http,
	// 	callbackUrl: "/api/webhooks",
	// 	callback: async (topic, shop, body, webhookId) => {
	// 		const payload = JSON.parse(body);
	// 		console.log('CARTS_UPDATE: ', payload);
	// 	},
	// },
};