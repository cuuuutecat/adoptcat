const goToDetail = document.querySelectorAll('.w3-quarter');

goToDetail.forEach((button) => {
    button.addEventListener('click', () => {
        location.href = "detail.html";
    })
});

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }