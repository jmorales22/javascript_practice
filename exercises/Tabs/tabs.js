const tabs = document.querySelector('.tabs');

const tabButtons = tabs.querySelectorAll('[role="tab"]');

const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel'));

function handleTabClick(event){
    //hide all tab panels
    tabPanels.forEach(panel => {
       panel.hidden = true;
    })
    // //mark all tabs as unselected
    tabButtons.forEach(tab => {
        //this will not work. you have to use setAttribute for ariaselected attribute
        // tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false);
    })
    //mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    //find the associated tabPanel and show it
    //Method 1 - Here is one way to do it
    // const { id } = event.currentTarget;
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // tabPanel.hidden = false;

    //Method 2 - find in the array of tab panels
    const tabPanel = tabPanels.find(panel => 
       panel.getAttribute('aria-labelledby') === id
        );
        tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click',handleTabClick));