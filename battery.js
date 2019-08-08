navigator.getBattery().then((battery) => {
	console.log(`${battery.level * 100}%`);
	console.log(navigator.onLine ? 'online' : 'offline');
	battery.addEventListener('levelchange', () => {
		console.log(`${this.level * 100}%`);
	});
});
