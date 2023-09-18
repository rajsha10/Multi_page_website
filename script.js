//changing navbar styles on scrolling.

window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 50);
  });
  
  //show/hide FAQ answers.
  
  const faqs = document.querySelectorAll(".faq");
  
  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("open");
  
      //changing the icon "+" "-"
      const icon = faq.querySelector(".faq-icon ion-icon");
      let icon_name = icon.getAttribute("name");
      if (icon_name === "add-sharp") {
        icon.setAttribute("name", "remove-sharp");
      } else {
        icon.setAttribute("name", "add-sharp");
      }
    });
  });
  
  //to toggle the hamburger menu and close icon in small and medium devices.
  
  const close_icon = document.querySelector("#close-menu-btn");
  const menu_icon = document.querySelector("#open-menu-btn");
  const nav_menu = document.querySelector(".nav-menu");
  
  menu_icon.addEventListener("click", () => {
    nav_menu.style.display = "block";
    menu_icon.style.display = "none";
    close_icon.style.display = "inline-block";
  });
  
  close_icon.addEventListener("click", () => {
    nav_menu.style.display = "none";
    menu_icon.style.display = "inline-block";
    close_icon.style.display = "none";
  });
  
  //for the increment in the achievements section
  
  const counters = document.querySelectorAll(".achievement-count");
  
  counters.forEach((counter) => {
    counter.innerHTML = 0;
    console.log(counter);
  
    const updateCounter = () => {
      const requiredCount = Number(counter.getAttribute("data-target")); //converting from string to number.
      console.log(requiredCount);
  
      const initialCount = Number(counter.innerHTML);
  
      const incr = requiredCount / 10;
  
      if (initialCount < requiredCount) {
        counter.innerHTML = `${Math.round(initialCount + incr)}`;
        setTimeout(updateCounter, 100);
      }
    };
  
    updateCounter();
  });