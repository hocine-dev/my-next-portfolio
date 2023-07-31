import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const [Mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handelChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if(check === "dark"){
            document.documentElement.classList.add('dark')
        }
        else{ document.documentElement.classList.remove('dark')}
      }
    };

    mediaQuery.addEventListener("change", handelChange);

    return ()=>{removeEventListener("change",handelChange)}
  }, []);


  useEffect(()=>{

if(Mode === "dark"){
    window.localStorage.setItem('theme',"dark");
    document.documentElement.classList.add("dark");
}else{ window.localStorage.setItem('theme',"light");
document.documentElement.classList.remove("dark");}


  },[Mode])

  return [Mode, setMode]
};

export default useThemeSwitcher;
