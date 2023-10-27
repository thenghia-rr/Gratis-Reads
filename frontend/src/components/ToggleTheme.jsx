import { useEffect } from 'react'


const ToggleTheme = () => {
  useEffect(() => {
    const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem("theme");

    if (toggleSwitch && currentTheme) {
      document.documentElement.setAttribute("class", currentTheme);
      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }

    const switchTheme = (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute("class", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("class", "light");
        localStorage.setItem("theme", "light");
      }
    };

    toggleSwitch.addEventListener("change", switchTheme);

    // Cleanup event listener on component unmount
    return () => {
      toggleSwitch.removeEventListener("change", switchTheme);
    };
  }, []); // Empty dependency array ensures useEffect runs once after the initial render

  return (
    <>
      <label
        htmlFor="toggle"
        className="absolute cursor-pointer toggle-switch "
      >
        <input
          type="checkbox"
          name=""
          id="toggle"
          className="darkmode-input hidden"
        />
        <div
          className="
          w-[68px]
          h-[29px]
          border border-[#ccc]
          rounded-full
          fixed
          right-5
          bottom-4
          z-50
          p-[5px]
          transition-colors
        "
        >
          <div
            className="
            w-5
            h-5
            bg-[#ccc]
            rounded-full
            transition-transform
            absolute
            top-1
            darkmode-spinner
          "
          ></div>
        </div>
      </label>
    </>
  );
};

export default ToggleTheme;
