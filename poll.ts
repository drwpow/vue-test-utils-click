export async function pollUntil(check:() => boolean, pollMs=10, timeoutMs=1000){
    const startMs = new Date().getTime();
    while(new Date().getTime() - startMs < timeoutMs){
        if(check()){
            return;
        }
        await new Promise((resolve) => setTimeout(resolve, pollMs));
    }
    throw new Error(`Timeout exceeded: ${check.toString()}`)
}