var jobs = [
	{
		picture:"images/lamp-tech.jpg",
		title : "Lamp Technitcian",
		description: "Fix Lamps",
		Requirements:"PhD or greater in Electrical Engineering and/or Circuit Analysis."
	},
	{
		picture:"images/sales.jpg",
		title : "Sales",
		description: "Sell Lamps",
		Requirements:"Must be able to set aside any moral compass and sell lamps at all costs."
	},
	{
		picture:"images/marketing.jpg",
		title : "Marketing",
		description: "Market our Lamps",
		Requirements:"Do whatever it takes to aquire market share and eliminate competition"
	},
	{
		picture:"images/analyst.jpg",
		title : "Business Analyst",
		description: "Analyse Lamp Market",
		Requirements:"Must keep a finger on the pulse of an ever shifting lamp business landscape"
	},
	{
		picture:"images/qualityassurance.jpg",
		title : "Q-A",
		description: "Monitor Quality",
		Requirements:"Check lamps before we sell them.  Then after we sell it.  Yes, it's a crime."
	},
	{
		picture:"images/bouncer.jpg",
		title : "Bouncer",
		description: "Law and Order",
		Requirements:"Must deal with unruly customers.  Must question everyone who enters our store"
	},
	{
		picture:"images/lamp-man.jpg",
		title : "Business Owner",
		description: "Own Lamp Store",
		Requirements:"Please buy my business!"
	}]


var divElement= document.getElementById('joblisting');
for (job in jobs) {
    var cards = `<article class="listing">
					<img src="${jobs[job].picture}" class="jobpics">
					<h2 class="job"> ${jobs[job].title}</h2>
					<h4>Description:</h4>
				    <p class="jobdesc"> ${jobs[job].description}</p>
				    <h4>Requirements:</h4>
				    <p class="jobpreq"> ${jobs[job].Requirements}</p>
				    </article>`;
    divElement.innerHTML += cards;
}







	