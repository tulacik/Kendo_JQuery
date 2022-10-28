

function ConfirmAndDeleteItem(itemId) {

    // -> frong token?
    var confirmDialog = $("#confirmDialog");
    //$("#renderBodyDiv").fadeOut();
    var ww = $(window).width() * 0.5;
    var wPx = ~~ww + 'px';
    confirmDialog.kendoDialog({
        width: wPx,
        title: "Delete",
        closable: false,
        modal: true,
        content: "<p>Are you sure you want to delete the item?<p>",
        actions: [
            {
                text: 'Yes', action: function () {
                    onOKDeleteItem(itemId);
                }
            },
            {
                text: 'No', action: function () {
                    onConfirmDialogClose
                }
            }
        ],
        close: onConfirmDialogClose
    });
    confirmDialog.data("kendoDialog").open();
}


function onOKDeleteItem(itemId) {
    //do your stuff
}

function onConfirmDialogClose() {
    // whatever is necessary to do on close

}


function showLoaderForAjaxCall(divWhereToShow) {
    var loaderDiv = '<div class="k-d-flex k-align-items-center k-justify-content-center"><img src="/images/ajax-loader.gif" alt="processing image" style="max-height:75px;" class="my-auto" /></div>'
    $(divWhereToShow).html("");
    $(divWhereToShow).html(loaderDiv);
}


function showLoadingKendoUI(htmlElementDivID) {
    var progressDiv = $("#" + htmlElementDivID);
    kendo.ui.progress(progressDiv, true);
}

function hideLoadingKendoUI(htmlElementDivID) {
    var progressDiv = $("#" + htmlElementDivID);
    // or simply replace the div content!
    kendo.ui.progress(progressDiv, false);
}