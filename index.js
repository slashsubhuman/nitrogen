function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateNitroCode() {
    const prefix = 'discord.gift/';
    const suffixLength = 16;
    const suffix = generateRandomString(suffixLength);
    const nitroCode = `${prefix}${suffix}`;
    return nitroCode;
}

function generateCodeWithDelay() {
    const generatedCode = generateNitroCode();
    console.log(generatedCode);
    setTimeout(generateCodeWithDelay, 5000); // here, time in milliseconds if needed (5000 milliseconds = 5 seconds)

}

generateCodeWithDelay();
//coded by trippleslash.hq