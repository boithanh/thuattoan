declare var Toastify: any;
export function showNotification(text = "", duration = 3000, style = { background: "linear-gradient(to right, #ff8177, #ff867a,#ff8c7f, #f99185, #cf556c, #b12a5b)", color: "white" }) {
    Toastify({
        text,
        duration,
        destination: "https://boithanh-dev.vercel.app/",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style,
        onClick: function () { } // Callback after click
    }).showToast();
}
