export async function cardInfo(){
    let res = await fetch("/stub/cardInfo.json");
    return res.json();
}