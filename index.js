let currentTheme = localStorage.getItem("theme");

document.firstElementChild.setAttribute("data-theme", currentTheme);

function changeTheme()
{
    currentTheme = currentTheme == "light" ? "dark" : "light";

    document.firstElementChild.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
}