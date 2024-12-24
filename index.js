function changeTheme()
{
    let currentTheme = document.firstElementChild.getAttribute("data-theme")
    if(currentTheme == "light")
        document.firstElementChild.setAttribute("data-theme", "dark")
    else
        document.firstElementChild.setAttribute("data-theme", "light")
}