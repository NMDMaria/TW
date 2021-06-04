
const modificareStilMeniuItem = () =>
{
    const elements = document.getElementsByClassName('meniu_item');
    for (let element of elements)
    {
        const children = element.children;
        for (let child of children)
        {
            if (child.nodeName === "SPAN" || child.nodeName ==="A")
            {
                child.style.color = "#9E9E9E"; 
            }
            if (child.classList.contains("submenu"))
            {
               child.classList.add("dark");
               for (let k of child.children)
               {
                   k.style.backgroundColor = "#363636";
               }
            }
        }
    }
    const searchbar = document.getElementById("search");
    searchbar.style.backgroundColor = "#363636";
    searchbar.style.color = "#737373";
    searchbar.style.border = "2px solid #363636";
    
}

let recursiveColor = (name, stil = "dark") =>
{
    name.classList.add(stil);
    for (let x of name.children)
    {
        recursiveColor(x, stil);
    }
}

let recursiveRemove = (name, stil = "dark") =>
{
    for (let s of name.classList)
    {
        if (s.indexOf(stil) != -1)
        {
            name.classList.remove(s);
        }
    }
    for (let c of name.children)
    {
        recursiveRemove(c, stil);
    }
}


const Darkmode = () =>
{
    event.currentTarget.style.filter = "invert(1)";
    const backg = document.querySelector('.body_style');
    backg.style.backgroundColor = "#363636";
    let before =  getComputedStyle(backg);
    let background_c = before.backgroundImage;
    backg.style.backgroundImage = "linear gradient(45deg,#3d3d3d, #4f4f4f), " + background_c;
    backg.style.backgroundBlendMode = "multiply";
    const header = document.getElementsByClassName("container_header1");
    for (let elem of header)
    {
        elem.style.backgroundColor = "#1f1f1f";
        elem.childNodes[1].style.backgroundColor = "#1f1f1f";
    }
    const m = document.getElementsByTagName("nav");
    for (let elem of m)
    {
        elem.style.backgroundColor = "#121212";
    }
    modificareStilMeniuItem();


    for (let art of document.getElementsByClassName("article"))
    {
        art.classList.add("dark_Article");
    }

    for (let x of document.getElementsByTagName("footer")[0].children)
    {
        console.log(x);
        if (x.classList.contains("footer_dunga"))
        {
            x.classList.add("vdark");
        }
        else 
        {
            recursiveColor(x, "dark");
        }
    }

    let n = document.getElementById("news");
    if (n != null)
    {
        for (let k of n.children)
        {
            if (k.nodeName === "FORM")
            {
                for (let x of k.children)
                {
                if (x.nodeName === "INPUT")
                        x.classList.add("dark_form");
                    if (x.nodeName === "LABEL")
                    {
                        x.classList.add("dark_label");
                    }
                }
            }
        }
    }

    n = document.getElementById("join");
    if (n != null)
    {
        for (let k of n.children)
        {
            if (k.nodeName === "FORM")
            {
                for (let x of k.children)
                {
                   if (x.nodeName === "INPUT")
                        x.classList.add("dark_form");
                    if (x.nodeName === "LABEL")
                    {
                        x.classList.add("dark_label");
                    }
                    if(x.nodeName === "DIV")
                    {
                        for (let y of x.children)
                        {
                            if (y.nodeName === "INPUT")
                                y.classList.add("dark_form");
                            if (y.nodeName === "LABEL")
                            {
                                y.classList.add("dark_label");
                            }
                        }
                    }
                }
            }
        }
    }

}

const Normal = () =>
{
    recursiveRemove(document.getElementsByTagName("body")[0], "dark");
    const elements = document.getElementsByClassName('meniu_item');
    for (let element of elements)
    {
        const children = element.children;
        for (let child of children)
        {
            if (child.nodeName === "SPAN" || child.nodeName ==="A")
            {
                child.style.color = ""; 
            }
            if (child.classList.contains("submenu"))
            {
               child.classList.add("dark");
               for (let k of child.children)
               {
                   k.style.backgroundColor = "";
               }
            }
        }
    }
    const searchbar = document.getElementById("search");
    searchbar.style.backgroundColor = "";
    searchbar.style.color = "";
    searchbar.style.border = "";


    event.currentTarget.style.filter = "";
    const backg = document.getElementsByTagName("body");
    for (let elem of backg)
    {
        elem.style.backgroundColor = "";
        elem.style.backgroundBlendMode = "";
    }
    const header = document.getElementsByClassName("container_header1");
    for (let elem of header)
    {
        elem.style.backgroundColor = "";
        elem.childNodes[1].style.backgroundColor = "";
    }
    const m = document.getElementsByTagName("nav");
    for (let elem of m)
    {
        elem.style.backgroundColor = "";
    }

}

const backnormal = (rodi) =>
{
    rodi.src = "images/rodi.png";
    localStorage.setItem("status", "normal");
}

const sleeptime = (rodi) =>
{
    let k = setTimeout(() => {
        rodi.src = "images/rodi.png";
        localStorage.setItem("status", "normal");
    }, 3000);
}

const hearts = (rodi) =>
{
    rodi.src = "images/rodi_heart.png";
    setTimeout(() => {
        rodi.src = "images/rodi.png";
    }, 3000);
}

const rodiSleep = () =>
{
    let rodi = document.getElementById("crodi"); 
    rodi.src = "images/rodi_sleep.png";
    localStorage.setItem("sleep", true);
    sleeptime(rodi);
}

const movedown = () =>
{
    let rodi = document.getElementById("crodi");
    rodi.src = "images/rodi.png";
    let y = rodi.style.top.split("px")[0];
    if (localStorage.getItem("here"))
    {
        document.getElementById("hey").remove();
        localStorage.removeItem("here");
    }
    if (localStorage.getItem("miss"))
    {
        document.getElementById("miss").remove();
        localStorage.removeItem("miss");
    }
    if (parseInt(y) + 10 > window.innerHeight)
        y = 0;
    rodi.style.top = (parseInt(y) + 10) + "px";
}

const moveup = () =>
{
    let rodi = document.getElementById("crodi");
    rodi.src = "images/rodi.png";
    let y = rodi.style.top.split("px")[0];
    if (localStorage.getItem("here"))
    {
        document.getElementById("hey").remove();
        localStorage.removeItem("here");
    }
    if (localStorage.getItem("miss"))
    {
        document.getElementById("miss").remove();
        localStorage.removeItem("miss");
    }
    if (parseInt(y) - 10 < 0)
        y = window.innerHeight - 30;
    rodi.style.top = (parseInt(y) - 10) + "px";
}

const moveleft = () =>
{
    let rodi = document.getElementById("crodi");
    rodi.src = "images/rodi.png";
    let x = rodi.style.right.split("px")[0];
    if (localStorage.getItem("here"))
    {
        document.getElementById("hey").remove();
        localStorage.removeItem("here");
    }
    if (localStorage.getItem("miss"))
    {
        document.getElementById("miss").remove();
        localStorage.removeItem("miss");
    }
    if (parseInt(x) + 10 >= window.innerWidth)
        x = -10;
    rodi.style.right = (parseInt(x) + 10) + "px";
}


const moveright = () =>
{
    let rodi = document.getElementById("crodi");
    rodi.src = "images/rodi.png";
    let x = rodi.style.right.split("px")[0];
    if (localStorage.getItem("here"))
    {
        document.getElementById("hey").remove();
        localStorage.removeItem("here");
    }
    if (localStorage.getItem("miss"))
    {
        document.getElementById("miss").remove();
        localStorage.removeItem("miss");
    }
    if (parseInt(x) - 10 < 0)
        x = window.innerWidth - 50;
    rodi.style.right = (parseInt(x) - 10) + "px";
}

const randomPos = (x, limit) =>
{
   return Math.floor(Math.random() * (limit + 1)) + x;
}

const randomColor = () =>
{
    return Math.floor(Math.random()*16777215).toString(16);
}

const addRodi = () =>
{
    const rodi = document.createElement("img");
    rodi.src = "images/rodi.png";
    rodi.style.position = "fixed";
    if (window.innerWidth < 1024)
        rodi.style.top = "160px";
    else
        rodi.style.top = "20px";
    rodi.style.right = "0";
    rodi.id = "crodi";

    if (localStorage.getItem("hadRodi") === null)
    {
        const heyimhere = document.createElement("img");
        heyimhere.style.position = "fixed";
        heyimhere.style.top = (parseInt(rodi.style.top.split("px")[0]) - 50) + "px";
        heyimhere.style.right = (parseInt(rodi.style.right.split("vw")[0]) + 8) + "vw";
        heyimhere.src = "images/rodi_hi.png";
        heyimhere.id = "hey";
        heyimhere.style.opacity = "60%";
        document.body.appendChild(heyimhere);
        localStorage.setItem("here", true);
        setTimeout(function()
        {
            heyimhere.remove();
            localStorage.removeItem("here");
        }, 5000);
    }
    else
    {
        const heymissed = document.createElement("img");
        heymissed.style.position = "fixed";
        heymissed.style.top = (parseInt(rodi.style.top.split("px")[0]) - 40) + "px";
        heymissed.style.right = (parseInt(rodi.style.right.split("vw")[0]) + 5) + "vw";
        heymissed.src = "images/rodi_missed.png";
        heymissed.id = "miss";
        heymissed.style.opacity = "60%";
        localStorage.setItem("miss", true);
        document.body.appendChild(heymissed);
        setTimeout(() =>
        {
            heymissed.remove();
            localStorage.removeItem("miss");
        }, 5000);
    }
    localStorage.setItem("status", "normal");
    document.body.appendChild(rodi);
    setInterval(() => {
        localStorage.setItem("status", "sleep");
        rodiSleep();}, 8000);
    setInterval(() => 
    {
        const cx = parseInt(getComputedStyle(rodi).right.split("px")[0]);
        const cy = parseInt(getComputedStyle(rodi).top.split("px")[0]);
        //console.log(cx);
        //console.log(cy);
        let nx = randomPos(cx, 10);
        let ny = randomPos(cy, 10);
        //console.log(nx);
        //console.log(ny);
        rodi.style.top = nx + "px";
        rodi.style.right = ny + "px";
    }, 10000);
    document.addEventListener("keydown", (event) =>
    {
       if (event.key === "ArrowDown")
        movedown();
        if (event.key === "ArrowUp")
        moveup();
        if (event.key === "ArrowLeft")
        moveleft();
        if (event.key === "ArrowRight")
        moveright();
    });
    document.addEventListener("keypress", (event) =>
    {
        if(event.key === "l")
        {
            hearts(rodi);
        }
    });
    rodi.addEventListener("click", () =>
    {
        hearts(rodi);
    });
}

const add = () =>
{
    event.target.style.cursor = "not-allowed";
    localStorage.setItem("hasRodi", true);
    addRodi();
    localStorage.setItem("hadRodi", true);
    document.getElementById("friend").innerHTML = "Rodi is here!";
    document.getElementById("friend").removeEventListener("click", add);
}

const addData = () =>
{
    const iarna = ["Decembrie", "Ianuarie", "Februarie"];
    const primavara = ["Martie", "Aprilie", "Mai"];
    const vara = ["Iunie", "Iulie", "August"];
    const toamna = ["Septembrie", "Octombrie", "Noiembrie"];
    let x = iarna.shift();

    const luni = iarna.concat(primavara, vara, toamna);
    luni.push(x);
    let data = document.createElement("span");
    data.id = "date";
    var d = new Date;
    data.innerHTML = "Astazi este: " + d.getDate() + " " + luni[d.getMonth()];
    document.getElementById("meniu").appendChild(data);
}

const keyhandler = () =>
{
    event.stopPropagation();
}

window.onload = () =>
{
   localStorage.setItem("hasRodi", false);
   addData();
   const darkButton = document.getElementById("darkmode");
   const rodi = document.getElementById("friend");
   darkButton.addEventListener("click", () =>
   {
       if (localStorage.getItem("dark") === "false" || localStorage.getItem("dark") === null)
       {
           Darkmode();
           localStorage.setItem("dark", true);
       }
       else
       {
           Normal();
           localStorage.setItem("dark", false);
       }
   });
   let clickEvent = new Event("click");
   if (localStorage.getItem("dark") === "true")
   {
       darkButton.checked = true;
       localStorage.setItem("dark", false);
       darkButton.dispatchEvent(clickEvent);
   }
   rodi.addEventListener("click", add);
   
   setInterval(() =>
   {
       let k = document.getElementById("date");
       k.style.color = "#" + randomColor();
   }, 10000);

   document.getElementById("search").placeholder = "Căutați...";
   document.getElementById("search").autocomplete = "off";
   document.getElementById("search").addEventListener("keypress", keyhandler);
   if (document.querySelector("#join") != null)
   {
        document.querySelector("#join").addEventListener("keypress", keyhandler);
        document.querySelector("#join").addEventListener("submit", () =>
        {
            event.preventDefault();
        });
   }
   if (document.querySelector("#news") != null)
   {
    document.querySelector("#news").addEventListener("keypress", keyhandler);
    document.querySelector("#news").addEventListener("submit", async (event) =>
    {
        event.preventDefault();

            const name = document.getElementById("nume");
            const mail = document.getElementById("mail");

            let regexMail =new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            if (!regexMail.test(mail.value))
            {
                alert("Email introdus greșit!");
                return false;
            }

            const formData = {
                nume: name.value,
                mail: mail.value
            };

            alert("Abonat cu succes!");

            window.location.href = 'Formular.html';

    });
}

   let retete = [];
   let contor = 0;
   for (let k of document.querySelectorAll('.article'))
   {
       for (let y of k.children)
       {
            if (y.tagName === 'DIV')
            {
                let r = {nume: 0,
                        continut: 0};
                for (let h2 of y.children)
                {
                    if (h2.tagName ==='H2')
                    {
                        r.nume = h2.innerHTML;
                    }
                    if (h2.tagName === 'P')
                    {
                        r.continut = h2.innerHTML;
                    }
                }
                retete.push(r);
                contor ++;
            }
       }
   }
   console.log(retete);

   let searchbar = document.getElementById('cautare');
   let flag = "false";
   searchbar.addEventListener("submit",async () =>
   {
       event.preventDefault();
       let text = document.getElementById('search').value;
       document.getElementById('search').value = "";
       for (let s of text.split(" "))
       {
           for (let k of retete)
           {
               if (k.nume.toLowerCase().includes(text.toLowerCase()) && flag === "false")
               {
                   flag = "true";
                   alert("Exista o reteta similara in pagina!");
                   window.location.href = "/Pagina.html";
               }
           }
       }
       if (flag === "false")
       {
            window.location.href = "/404.html";
       }
   })

}


const openpage = () =>
{
    window.open("formular.html", '_blank');
}

const verifyNews = () =>
{
    let x = document.forms["news"]["mail"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    else
    {
        let regexMail =new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        if (!regexMail.test(x))
        {
            alert("Email introdus greșit!");
            return false;
        }
    }
    let y = document.forms["news"]["nume"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
      }
      console.log(x);

    return true;
}

const verifyTel = () =>
{
    let x = document.forms["join"]["tel"].value;
    if (x == "") {
        alert("Telefon must be filled out");
        return false;
      }
      else
      {
          let regexT = new RegExp(/(07)+([0-9]{8})$/i);
          if(!regexT.test(x))
          {
            alert("Telefon introdus greșit!");
            window.location.href = "/Formular.html";
            return false;
          }
      }
    let y = document.forms["join"]["name"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }
    let z = document.forms["join"]["prenume"].value;
    if (z == "") {
        alert("Prenume must be filled out");
        return false;
      }
    x = document.forms["join"]["gender"].value;
    if (x == "") {
        alert("Gender must be filled out");
        return false;
      }

    alert("Înscris cu succes!");
}
