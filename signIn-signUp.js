const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => {
    e.preventDefault()
    e.preventDefault()
    let username = document.getElementById('username-signUp')
    let email = document.getElementById('email-signUp')
    let pw = document.getElementById("password-signUp")

    let lowerCaseLetter = /[a-z]/g
    let upperCaseLetter = /[A-Z]/g
    let numbers = /[0-9]/g

    if (username.value.trim().length == 0 && email.value.trim().length == 0 && pw.value.trim().length == 0) {
        alert("Please input your username, email & password")
    }
    else if (username.value.trim().length == 0) {
        alert("Please input your username")
    }
    else if (email.value.trim().length == 0) {
        alert("Please input your email")
    }
    else if (pw.value.trim().length == 0) {
        alert("Please input your password")
    }
    else if (pw.value.trim().length < 8) {
        alert("Password must be at least 8 characters.")
    }
    else if (!pw.value.trim().match(lowerCaseLetter)) {
        alert("Password must  contain a lowercase letter")
    }
    else if (!pw.value.trim().match(upperCaseLetter)) {
        alert("Password must  contain a uppercase letter")
    }
    else if (!pw.value.trim().match(numbers)) {
        alert("Password must  contain a number or special character")
    }
    else {
        if (localStorage.users) {
            let users = JSON.parse(localStorage.users)
            let check = false;
            for (let index = 0; index < users.length; index++) {
                const user = users[index];
                if (user.email == email.value.trim()) {
                    check = true
                }
            }
            if (check) {
                alert("Email has been registered")
            } else {
                users.push({
                    username: username.value.trim(),
                    email: email.value.trim(),
                    pw: pw.value.trim()
                })
                localStorage.setItem("users", JSON.stringify(users))
                container.classList.remove("right-panel-active");
            }
        } else {
            localStorage.setItem("users",
                JSON.stringify(
                    [
                        {
                            username: username.value.trim(),
                            email: email.value.trim(),
                            pw: pw.value.trim()
                        }
                    ]));
            container.classList.remove("right-panel-active");
        }
    }
}
);
secondForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let users = JSON.parse(localStorage.users)

    let email = document.getElementById("email-signIn")
    let pw = document.getElementById("password-signIn");

    let check = users.map(index => index.email == email.value.trim() && index.pw == pw.value.trim())

    if (check[0] == true) {
        // window.location.href = "../logout.html"
        alert("Đăng nhập thành công")
    } else {
        alert("Please input again")
    }
}
);


