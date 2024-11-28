document.addEventListener("DOMContentLoaded", () =>
{
    const headings_str = ["h1","h2","h3","h4","h5","h6"];
    // get all headings, skip over first element (which is the title)
    const headings_dom = Array.from(document.querySelectorAll(headings_str)).slice(1);
    const headings_num = headings_dom.map(heading => parseInt(heading.tagName[1]));
    // create labels
    const labels = (() =>
    {
        let temp = headings_num.map(n => ({"lvl":n,"lbl":[]}));
        for (let lvl=1; lvl<=headings_str.length; ++lvl)
        {
            let count = 0;
            temp.forEach(pair =>
            {
                if (pair["lvl"] == lvl)
                    ++count;
                if (pair["lvl"] >= lvl)
                    pair["lbl"].push(count);
                else
                    count = 0;
            });
        }
        return temp.map(p => p["lbl"].reduce((acc,n) => acc+(acc===""?"":".")+n.toString(),""));
    })();
    // fill it up
    for (let i=0; i<headings_dom.length; ++i)
        headings_dom[i].textContent = labels[i]+" "+headings_dom[i].textContent;
});

