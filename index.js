(function () {

  function palindrome(str) {
    let removed = str.replace(/[\W_]/g, "").toLowerCase();
    let reversed = removed.split("").reverse().join("");

    document.getElementById("palindrome").value = "";
    return str === ""
      ? (document.querySelector(".palindrome-result").innerHTML =
          "Please, enter the word or sentence")
      : removed === reversed
      ? (document.querySelector(".palindrome-result").innerHTML =
          "Yes, it is a palindrome")
      : (document.querySelector(".palindrome-result").innerHTML =
          "No, it is not a palindrome");
  }

  document.querySelector("button").addEventListener("click", () => {
    palindrome(document.getElementById("palindrome").value);
  });
  
})();
