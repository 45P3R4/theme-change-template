let currentTheme = getCookie("data-theme");

document.firstElementChild.setAttribute("data-theme", currentTheme);

function changeTheme()
{
    currentTheme = currentTheme == "light" ? "dark" : "light";

    document.firstElementChild.setAttribute("data-theme", currentTheme);
    document.cookie = "data-theme=" + currentTheme;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }