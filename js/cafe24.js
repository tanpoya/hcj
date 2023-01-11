$(() => {
    const gnb = $(".gnb ul li");
    const text = $(".gnb ul li span");

    for(let i = 0; i < gnb.length; i++) {
        $(gnb[i]).click(() => {
            console.log($(text[i]).text());
        });
    }
})