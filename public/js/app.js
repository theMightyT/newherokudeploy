(() => {
	// generic lambda to kick things off

	console.log(`running...`);

	const app = new Vue({
		el : "#app",

		data : {
			message : "Welcome to the Vue app!"
		}
	});

})();