window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
    // Selector '#vrview' finds element with id 'vrview'.
    var vrView = new VRView.Player('#vrview', {
        image:"https://cors-anywhere.herokuapp.com/" + "https://64ed-2409-4073-414-19f-2488-3916-8473-2a94.ngrok-free.app/upscaled_image/upscaled_image.png",
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
