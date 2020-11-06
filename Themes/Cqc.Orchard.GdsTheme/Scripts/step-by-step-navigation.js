var stepByStep = (function() {
    var stepByStepContainer = $("div#step-by-step-navigation");
    var showAllText = stepByStepContainer.data("show-all-text");
    var hideAllText = stepByStepContainer.data("hide-all-text");
    var showText = stepByStepContainer.data("show-text");
    var hideText = stepByStepContainer.data("hide-text");
    var jsHiddenClass = ".js-hidden";
    var showAllButton = $("button#showAllSteps");
    var jsToggleLinkClass = ".js-toggle-link";

    $(".js-toggle-panel").click(function () {
	    var panel = $(this);
        var step = panel.siblings(jsHiddenClass);
        step.toggle();
        toggleLinkText(panel.find(jsToggleLinkClass));
    });

    showAllButton.click(function () {
	    var thisLink = $(this);
        var steps = $(jsHiddenClass);
        if (thisLink.text() === showAllText) {
            //Show All
            hideShowAll(steps, false, thisLink);
        } else {
            //Hide All
            hideShowAll(steps, true, thisLink);
	    }
    });

    function toggleLinkText(link) {
	    if (link.data("show") === true) {
		    link.text(hideText);
		    link.data("show", false);
	    } else {
		    link.text(showText);
		    link.data("show", true);
		    //If hiding update to Show All text!
		    showAllButton.text(showAllText);
	    }
    }

    function hideShowAll(steps, hide, link) {
	    steps.each(function () {
		    var thisStep = $(this);
            var link = thisStep.parent().find(jsToggleLinkClass);
		    if (hide) {
			    thisStep.hide();
			    link.data("show", false);
			    toggleLinkText(link);
		    } else {
			    thisStep.show();
			    link.data("show", true);
			    toggleLinkText(link);
		    }
	    });

	    link.text(hide ? showAllText : hideAllText);
    }
});

if ($("div#step-by-step-navigation").length) {
	stepByStep();
}



