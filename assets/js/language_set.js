// const languageSelect = document.getElementById('language-select');
// TODO
// 在不同的頁面中設定不同的 JSON 檔（但要怎麼解決預設值的問題？）
const title = document.getElementById('title');
const banner = document.getElementById('banner');
const introduction = document.getElementById("introduction");

const aboutMe = document.getElementById("aboutMe");
const aboutMeContent = document.getElementById("aboutMeContent");

// const 內外科看護學 = document.getElementById('內外科看護學');
// const 公用ê藥方 = document.getElementById('公用ê藥方');
// const 身體理ê總論 = document.getElementById('身體理ê總論');
// const 身體理 = document.getElementById('身體理');
// const 內外科看護學簡介 = document.getElementById('內外科看護學簡介');
// const 公用ê藥方簡介 = document.getElementById('公用ê藥方簡介');
// const 身體理ê總論簡介 = document.getElementById('身體理ê總論簡介');
// const 身體理簡介 = document.getElementById('身體理簡介');


// 預設語言為中文
let currentLanguage = 'zh';

// 切換語言時更新介面文字
// languageSelect.addEventListener('change', () => {
//   currentLanguage = languageSelect.value;
//   console.log(currentLanguage);
//   updateInterfaceText();
// });
  
  // 初始化介面文字
  updateInterfaceText();
  
  function updateInterfaceText() {
    fetch(`JSON/${currentLanguage}.json`)
      .then(response => response.json())
      .then(data => {
        title.innerHTML = data.title;
        banner.innerText = data.homepageBanner;
        introduction.innerText = data.homepageIntro;


        aboutMe.innerText = data.aboutMe;
        aboutMeContent.innerText = data.aboutMeContent;

        // 內外科看護學.innerText = data.literature[0].name;
        // 身體理.innerText = data.literature[1].name;
        // 身體理ê總論.innerText = data.literature[2].name;
        // 公用ê藥方.innerText = data.literature[3].name;
        // 內外科看護學簡介.innerText = data.literature[0].intro;
        // 身體理簡介.innerHTML = data.literature[1].intro;
        // 身體理ê總論簡介.innerText = data.literature[2].intro;
        // 公用ê藥方簡介.innerText = data.literature[3].intro;
      });
  }