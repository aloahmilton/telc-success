//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-S3aud_OG.js
var manifest = {
	"726da4790fd677d337fe40d2fe6529ab4d7e14a7d7c48b33a17298feee6128dc": {
		functionName: "getAdminInquiries_createServerFn_handler",
		importer: () => import("./_ssr/actions-2uRNpaWT.mjs")
	},
	"b02e2eda31a7fff20cd20ef19cd561edacb1f219535c7d14f05b70ceb3238735": {
		functionName: "submitContactInquiry_createServerFn_handler",
		importer: () => import("./_ssr/actions-2uRNpaWT.mjs")
	},
	"d0d1dde5ee33041ad46583735065b6d8adc4e2594106580aaa1aeb820c0ede49": {
		functionName: "submitCandidateSupportAction_createServerFn_handler",
		importer: () => import("./_ssr/actions-2uRNpaWT.mjs")
	},
	"fa99bfa40ae3176813d08cafe3fe57e4246c962ac73a7eb67c9c1edb6bacd02d": {
		functionName: "verifyCertificateAction_createServerFn_handler",
		importer: () => import("./_ssr/actions-2uRNpaWT.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
