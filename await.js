var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function awaitError() {
    return new Promise((resolve, reject) => {
        function afterWait() {
            console.log(`calling reject`);
            resolve("an error occurred");
        }
        setTimeout(afterWait, 1000);
    });
}
function callAwaitError() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`call awaitError`);
        try {
            yield awaitError();
        }
        catch (error) {
            console.log(`error returned : ${error}`);
        }
        finally {
            console.log(`after awaitDelayed`);
            setTimeout(() => { console.log('hello'); }, 1000);
        }
    });
}
callAwaitError();
