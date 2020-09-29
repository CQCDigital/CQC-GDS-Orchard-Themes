/**
 * Copyright (c) Care Quality Commission, Inc. All rights reserved.
 * Version: 1.0.0
 */
tinymce.PluginManager.add('gds_para', function (editor, url) {

    var openDialog = function () {
        return editor.windowManager.open({
            title: 'GDS Paragraph',
            body: {
                type: 'panel',
                items: [
                    {
                        type: 'textarea',
                        name: 'title',
                        label: 'Text'
                    }
                ]
            },
            buttons: [
                {
                    type: 'cancel',
                    text: 'Close'
                },
                {
                    type: 'submit',
                    text: 'Save',
                    primary: true
                }
            ],
            onSubmit: function (api) {
                var data = api.getData();
                // Insert content when the window form is submitted
                editor.insertContent("<p class='govuk-body'>" + data.title + "</p>");
                api.close();
            }
        });
    };

    // Add a button that opens a window
    editor.ui.registry.addButton('gds_para', {
        text: '&lt;/p&gt;',
        onAction: function () {
            // Open window
            openDialog();
        }
    });

    // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
    editor.ui.registry.addMenuItem('gds_para', {
        text: 'GDS Paragraph',
        onAction: function () {
            // Open window
            openDialog();
        }
    });

    return {
        getMetadata: function () {
            return {
                name: 'GDS Paragraph',
                url: 'http://exampleplugindocsurl.com'
            };
        }
    };
});