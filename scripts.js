window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
    // Selector '#vrview' finds element with id 'vrview'.
    var vrView = new VRView.Player('#vrview', {
        image:"https://images.unsplash.com/photo-1584184087921-b397a56c13c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3342&q=80",
    });

    vrView.on('click', function (event) {
        permission()
    });
}

function permission() {
    // handle iOS 13+ devices
    if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {
        // (optional) Do something before API request prompt.
        DeviceMotionEvent.requestPermission()
            .then(response => {
                // (optional) Do something after API prompt dismissed.
                if (response == "granted") {
                    window.addEventListener("devicemotion", (e) => {
                        // do something for 'e' here.
                    })
                } else {
                    //console.warn("not granted")
                }
            })
            .catch(console.error)
    } else {
        // handle non iOS 13+ devices
    }
}
