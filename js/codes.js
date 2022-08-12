const url = 'https://docs.google.com/spreadsheets/d/1fUJUH6tfEwXRpwlVnA6pZP8mCgHQNICmlLQ6rbZtZRU/export?format=csv';

const main = document.querySelector('main');

async function preADV2() {
    
    const data = await fetch(url);
    const text = await data.text();
    const csvtext = await csv().fromString(text);
    main.innerHTML = '<h2>Heroes</h2>';
    const showMe = await csvtext.forEach(function(row) {
        main.innerHTML += "<p class='heroes'> <b><i>" + row.PADVName + "</i></b> [" + row.PADVClass + "] (" + row.PADVRanking + ") " + row.PADVXP + "XP " + row.PADVFP + "FP </p>";      
    });
    return showMe;
}

main.innerHTML = preADV2();
