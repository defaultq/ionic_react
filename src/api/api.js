export const getCurrencyData = async (from, to) => {

    //fetch the the data from what currentcy to what currentcy


    try {
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');



        return await res.json();

    } catch (e) {

        console.log(e);
    }





}