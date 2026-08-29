import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-S3aud_OG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actions-B6kmGGWv.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Submit Contact Form Inquiry to MongoDB Atlas and Send Admin Email via Google SMTP
*/
var submitContactInquiry = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("b02e2eda31a7fff20cd20ef19cd561edacb1f219535c7d14f05b70ceb3238735"));
/**
* Submit B2 Candidate Support Registration to MongoDB Atlas and Send Admin Email via Google SMTP
*/
var submitCandidateSupportAction = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("d0d1dde5ee33041ad46583735065b6d8adc4e2594106580aaa1aeb820c0ede49"));
createServerFn({ method: "GET" }).handler(createSsrRpc("726da4790fd677d337fe40d2fe6529ab4d7e14a7d7c48b33a17298feee6128dc"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("fa99bfa40ae3176813d08cafe3fe57e4246c962ac73a7eb67c9c1edb6bacd02d"));
//#endregion
export { submitContactInquiry as n, submitCandidateSupportAction as t };
