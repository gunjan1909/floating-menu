const navigation = document.querySelector(".navigation");
document.querySelector(".toggle").onclick = function () {
  navigation.classList.toggle("active");
  this.classList.toggle("active");
};
