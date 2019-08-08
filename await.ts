function awaitError() : Promise<string> {
	return new Promise<string> ( (resolve, reject) => {
			function afterWait() {
				console.log(`calling reject`);
				resolve("an error occurred");
			}
			setTimeout(afterWait, 1000);
		}
	);
}

async function callAwaitError() {
	console.log(`call awaitError`);
	try {
		await awaitError();
	} catch (error) {
		console.log(`error returned : ${error}`);
	} finally {
		console.log(`after awaitDelayed`);
		setTimeout(()=>{console.log('hello');}, 1000);
	}
}
callAwaitError();
