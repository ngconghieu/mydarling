document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Em à!",
        "Anh biết là em vẫn còn đang giận anh",
        "Về chuyện hôm qua, hay cả những chuyện trước kia nữa",
        "Anh cũng biết đã nhiều lần khiến em phải thất vọng",
        "Giờ anh không biết phải nói gì hơn ngoài câu nói...",
        "Anh thật lòng xin lỗi em, anh sai rồi...",
        "Anh mong em có thể tha lỗi cho anh...",
        "Anh sẽ tự kiểm điểm lại bản thân của mình nhưng chỉ mong rằng, ",
        "em đừng giận anh nữa nha :(("
    
    ];
    const delay = 33; 
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            lyricsElement.innerHTML += "<br>";

            await new Promise((resolve) => setTimeout(resolve, delay * 30));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 30));
        }
    }

    displayLyrics();
});

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Thank you very much, I promise to be more careful not to disappoint you again";
  gif.src =
    "https://media3.giphy.com/media/eVVY8Ez0HoPXAzT7GJ/giphy.gif?cid=ecf05e47kcauiwsxt3ros9yfrb19oik8unu20f6u8d3c9tgf&ep=v1_gifs_search&rid=giphy.gif&ct=g";
});


noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
