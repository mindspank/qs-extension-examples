define([], function() {

    return {
        initialProperties: {
            customProperty: 'Hello'
        },
        support: {
            snapshot: true
        },
        setSnapshotData: function(layout) {
            return new Promise((resolve, reject) => {

                layout.customProperty = 'Hola'
                resolve(layout)

            });
        },
        paint: function($element, layout) {
            return new Promise((resolve, reject) => {
                
                // If we are rendering inside of a snapshot context
                if ( this.backendApi && this.backendApi.isSnapshot ) {
                    $element.text('Rendering inside of Snapshot. ' + layout.customProperty)
                } else {
                    // We are in analysis mode
                    $element.text('Rendering inside of analysis mode. ' + layout.customProperty)
                }

                resolve();
                
            });
        }
    }

});