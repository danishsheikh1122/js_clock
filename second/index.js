// alert("ok")

const s_hand = document.querySelector(".hand-second");
const m_hand = document.querySelector(".hand-min");
const h_hand = document.querySelector(".hand-hour");
const setDate = () => {
  const now = new Date();
  
  const second = now.getSeconds();
  const sdegree = ((second / 60) * 360) + 90;
  s_hand.style.transform = `rotate(${sdegree}deg)`;
  
  const min = now.getMinutes();
  const mdegree = ((min / 60) * 360) + 90;
  m_hand.style.transform = `rotate(${mdegree}deg)`;
  
  const hour = now.getHours();
  const hdegree = ((hour / 12) * 360) + 90;
  h_hand.style.transform = `rotate(${hdegree}deg)`;
//   console.log(second);
};
setInterval(setDate, 1000);
