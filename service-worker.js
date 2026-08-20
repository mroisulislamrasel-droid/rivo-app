const CACHE_NAME = const CACHE_NAME = "rivo-ui-v4";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];

const UI_CSS = `
:root{
  --bg:#ffffff !important;
  --card:#ffffff !important;
  --card2:#f7f8fb !important;
  --border:#e5e7eb !important;
  --text:#111318 !important;
  --muted:#667085 !important;
  --pink:#e91e63 !important;
  --purple:#7c3aed !important;
  --green:#16a34a !important;
}

html,
body{
  background:#ffffff !important;
  color:#111318 !important;
}

body{
  color:#111318 !important;
}

.app{
  background:#ffffff !important;
}

.header{
  background:rgba(255,255,255,.96) !important;
  color:#111318 !important;
  border-bottom:1px solid #e5e7eb !important;
}

.iconBtn{
  background:#f3f4f6 !important;
  color:#111318 !important;
}

.page,
.title,
.cardTitle,
.username,
.caption,
.metric b,
.menuText b,
.sheetHead h3{
  color:#111318 !important;
}

.card{
  background:#ffffff !important;
  border-color:#e5e7eb !important;
  box-shadow:0 8px 25px rgba(16,24,40,.07) !important;
}

.input{
  background:#ffffff !important;
  color:#111318 !important;
  border-color:#d9dde7 !important;
}

.input::placeholder{
  color:#98a2b3 !important;
}

.outline,
.menu{
  background:#ffffff !important;
  color:#111318 !important;
  border-color:#e5e7eb !important;
}

.menuIcon{
  background:#fdf0f5 !important;
}

.menuText small,
.muted,
.metric small{
  color:#667085 !important;
}

.metric{
  background:#f8f9fb !important;
  border-color:#e5e7eb !important;
}

.bottom{
  background:rgba(255,255,255,.97) !important;
  border-top:1px solid #e5e7eb !important;
}

.nav{
  color:#98a2b3 !important;
}

.nav.active{
  color:#111318 !important;
}

.sheet,
.noticePanel{
  background:#ffffff !important;
  color:#111318 !important;
  border-color:#e5e7eb !important;
  box-shadow:0 20px 60px rgba(16,24,40,.15) !important;
}

.close{
  background:#f3f4f6 !important;
  color:#111318 !important;
}

.duration{
  background:#ffffff !important;
  color:#111318 !important;
  border-color:#d9dde7 !important;
}

.duration b,
.duration small{
  color:#111318 !important;
}

.pill{
  background:#f7f8fb !important;
  color:#344054 !important;
  border-color:#e5e7eb !important;
}

/* SETTINGS */

.rivo-settings-card{
  background:#ffffff;
  border:1px solid #e5e7eb;
  border-radius:20px;
  padding:8px 14px;
  margin:12px 0;
  box-shadow:0 8px 25px rgba(16,24,40,.06);
}

.rivo-settings-row{
  width:100%;
  display:flex;
  align-items:center;
  gap:12px;
  padding:14px 2px;
  border:0;
  border-bottom:1px solid #eef0f4;
  background:#ffffff;
  color:#111318;
  text-align:left;
}

.rivo-settings-row:last-child{
  border-bottom:0;
}

.rivo-settings-icon{
  width:44px;
  height:44px;
  border-radius:14px;
  display:grid;
  place-items:center;
  background:#f5f6fa;
  font-size:21px;
  flex:none;
}

.rivo-settings-copy{
  flex:1;
}

.rivo-settings-copy b{
  display:block;
  color:#111318;
  font-size:16px;
}

.rivo-settings-copy small{
  display:block;
  color:#667085;
  margin-top:2px;
  line-height:1.4;
}

.rivo-theme-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:8px;
  margin:12px 0 5px;
}

.rivo-theme-btn{
  border:1px solid #d9dde7;
  border-radius:14px;
  background:#ffffff;
  color:#111318;
  padding:10px 5px;
  font-weight:700;
}

.rivo-theme-btn.active{
  border-color:#e91e63;
  box-shadow:0 0 0 2px rgba(233,30,99,.12);
}

.rivo-theme-dot{
  width:30px;
  height:30px;
  border-radius:50%;
  margin:0 auto 5px;
  border:1px solid #ddd;
}

/* SETTINGS MODALS */

.rivo-modal{
  position:fixed;
  inset:0;
  z-index:9999;
  background:rgba(15,23,42,.45);
  display:none;
  align-items:center;
  justify-content:center;
  padding:14px;
}

.rivo-modal.show{
  display:flex;
}

.rivo-modal-box{
  width:min(500px,100%);
  max-height:90vh;
  overflow:auto;
  background:#ffffff;
  border-radius:22px;
  padding:18px;
  color:#111318;
  box-shadow:0 25px 70px rgba(16,24,40,.25);
}

.rivo-modal-head{
  display:flex;
  align-items:center;
  margin-bottom:10px;
}

.rivo-modal-head h3{
  flex:1;
  margin:0;
  color:#111318;
}

.rivo-modal-close{
  border:0;
  border-radius:50%;
  width:38px;
  height:38px;
  background:#f3f4f6;
  color:#111318;
  font-size:20px;
}

/* PINK MODE */

.rivo-pink-mode{
  background:#fff7fb !important;
}

.rivo-pink-mode .app{
  background:#fff7fb !important;
}

.rivo-pink-mode .header,
.rivo-pink-mode .bottom{
  background:rgba(255,247,251,.97) !important;
}

/* BLUE MODE */

.rivo-blue-mode{
  background:#f6fbff !important;
}

.rivo-blue-mode .app{
  background:#f6fbff !important;
}

.rivo-blue-mode .header,
.rivo-blue-mode .bottom{
  background:rgba(246,251,255,.97) !important;
}
`;

const UI_JS = `
(function(){

  function addRivoSettings(){

    if(document.getElementById("rivoSettingsInjected")){
      return;
    }

    let page = document.getElementById("settings");

    if(!page){

      page = document.createElement("section");

      page.id = "settings";

      page.className = "page";

      const app =
        document.querySelector(".app") ||
        document.body;

      app.appendChild(page);
    }

    const box = document.createElement("div");

    box.className = "rivo-settings-card";

    box.innerHTML = \`
      <div class="title" style="margin-top:4px">
        ⚙️ সেটিংস
      </div>

      <button
        class="rivo-settings-row"
        onclick="RivoSettings.open('report')"
      >
        <span class="rivo-settings-icon">
          🚩
        </span>

        <span class="rivo-settings-copy">
          <b>রিপোর্ট</b>
          <small>
            সমস্যা বা অনুপযুক্ত কনটেন্ট রিপোর্ট করুন
          </small>
        </span>

        <span>›</span>
      </button>


      <button
        class="rivo-settings-row"
        onclick="RivoSettings.open('privacy')"
      >
        <span class="rivo-settings-icon">
          🔒
        </span>

        <span class="rivo-settings-copy">
          <b>প্রাইভেসি</b>
          <small>
            আপনার তথ্য ও গোপনীয়তা সম্পর্কে জানুন
          </small>
        </span>

        <span>›</span>
      </button>


      <div
        class="rivo-settings-row"
        style="display:block"
      >

        <div
          style="
            display:flex;
            align-items:center;
            gap:12px;
          "
        >

          <span class="rivo-settings-icon">
            🎨
          </span>

          <span class="rivo-settings-copy">
            <b>কালার মুড</b>

            <small>
              অ্যাপের রঙের ধরন বেছে নিন
            </small>
          </span>

        </div>


        <div class="rivo-theme-grid">

          <button
            class="rivo-theme-btn"
            data-theme="light"
            onclick="RivoSettings.theme('light')"
          >

            <div
              class="rivo-theme-dot"
              style="background:#ffffff"
            ></div>

            সাদা

          </button>


          <button
            class="rivo-theme-btn"
            data-theme="pink"
            onclick="RivoSettings.theme('pink')"
          >

            <div
              class="rivo-theme-dot"
              style="background:#ffd7e8"
            ></div>

            পিংক

          </button>


          <button
            class="rivo-theme-btn"
            data-theme="blue"
            onclick="RivoSettings.theme('blue')"
          >

            <div
              class="rivo-theme-dot"
              style="background:#d9efff"
            ></div>

            ব্লু

          </button>

        </div>

      </div>


      <button
        class="rivo-settings-row"
        onclick="RivoSettings.open('about')"
      >

        <span class="rivo-settings-icon">
          ℹ️
        </span>

        <span class="rivo-settings-copy">

          <b>Rivo About</b>

          <small>
            Rivo অ্যাপ সম্পর্কে
          </small>

        </span>

        <span>›</span>

      </button>


      <div
        id="rivoSettingsInjected"
        style="display:none"
      >
        Rivo
      </div>
    \`;

    page.appendChild(box);


    createModal(
      "report",
      "🚩 রিপোর্ট",
      "কোনো ভিডিও, ছবি, ইউজার বা অন্য কোনো সমস্যার বিষয়ে রিপোর্ট করতে নিচের ঘরে লিখে পাঠান।",
      true
    );


    createModal(
      "privacy",
      "🔒 প্রাইভেসি",
      "আপনার অ্যাকাউন্ট, প্রোফাইল এবং আপলোড করা কনটেন্ট Rivo-এর সেবা পরিচালনার জন্য ব্যবহৃত হয়। প্রয়োজন ছাড়া আপনার তথ্য প্রকাশ করা হবে না।",
      false
    );


    createModal(
      "about",
      "ℹ️ Rivo About",
      "Rivo হলো ভিডিও, ছবি, ক্রিয়েটর এবং আয়ের জন্য তৈরি একটি সামাজিক প্ল্যাটফর্ম।",
      false
    );


    RivoSettings.apply(
      localStorage.getItem("rivo-theme") || "light"
    );
  }


  function createModal(
    type,
    title,
    text,
    reportBox
  ){

    if(
      document.getElementById(
        "rivo-" + type + "-modal"
      )
    ){
      return;
    }

    const modal =
      document.createElement("div");

    modal.id =
      "rivo-" + type + "-modal";

    modal.className =
      "rivo-modal";


    let extra = "";

    if(reportBox){

      extra = \`
        <textarea
          id="rivoReportText"
          class="input"
          rows="5"
          placeholder="রিপোর্ট লিখুন..."
        ></textarea>

        <button
          class="btn full"
          onclick="RivoSettings.sendReport()"
        >
          রিপোর্ট পাঠান
        </button>
      \`;
    }


    modal.innerHTML = \`
      <div class="rivo-modal-box">

        <div class="rivo-modal-head">

          <h3>
            \${title}
          </h3>

          <button
            class="rivo-modal-close"
            onclick="RivoSettings.close('\${type}')"
          >
            ×
          </button>

        </div>

        <p
          style="
            line-height:1.8;
            color:#667085;
          "
        >
          \${text}
        </p>

        \${extra}

      </div>
    \`;


    document.body.appendChild(modal);
  }


  window.RivoSettings = {

    open:function(type){

      const modal =
        document.getElementById(
          "rivo-" + type + "-modal"
        );

      if(modal){
        modal.classList.add("show");
      }
    },


    close:function(type){

      const modal =
        document.getElementById(
          "rivo-" + type + "-modal"
        );

      if(modal){
        modal.classList.remove("show");
      }
    },


    theme:function(theme){

      localStorage.setItem(
        "rivo-theme",
        theme
      );

      this.apply(theme);
    },


    apply:function(theme){

      document.body.classList.remove(
        "rivo-pink-mode",
        "rivo-blue-mode"
      );


      if(theme === "pink"){

        document.body.classList.add(
          "rivo-pink-mode"
        );

      }


      if(theme === "blue"){

        document.body.classList.add(
          "rivo-blue-mode"
        );

      }


      document.documentElement.style
        .setProperty(
          "--bg",
          theme === "pink"
            ? "#fff7fb"
            : theme === "blue"
              ? "#f6fbff"
              : "#ffffff"
        );


      document.documentElement.style
        .setProperty(
          "--card",
          "#ffffff"
        );


      document.documentElement.style
        .setProperty(
          "--card2",
          theme === "pink"
            ? "#fff0f6"
            : theme === "blue"
              ? "#eef7ff"
              : "#f7f8fb"
        );


      document.documentElement.style
        .setProperty(
          "--text",
          "#111318"
        );


      document.documentElement.style
        .setProperty(
          "--muted",
          "#667085"
        );


      document.querySelectorAll(
        ".rivo-theme-btn"
      ).forEach(function(button){

        button.classList.toggle(
          "active",
          button.dataset.theme === theme
        );

      });
    },


    sendReport:function(){

      const input =
        document.getElementById(
          "rivoReportText"
        );

      const text =
        input
          ? input.value.trim()
          : "";

      if(!text){

        alert(
          "রিপোর্ট লিখুন।"
        );

        return;
      }


      alert(
        "রিপোর্ট গ্রহণ করা হয়েছে।"
      );


      this.close("report");

      if(input){
        input.value = "";
      }
    }

  };


  const oldShowPage =
    window.showPage;


  window.showPage = function(id){

    if(
      typeof oldShowPage === "function"
    ){

      oldShowPage(id);
    }


    if(id === "settings"){

      const settings =
        document.getElementById(
          "settings"
        );


      if(settings){

        document
          .querySelectorAll(".page")
          .forEach(function(page){

            page.classList.remove(
              "active"
            );

          });


        settings.classList.add(
          "active"
        );
      }


      addRivoSettings();
    }
  };


  if(
    document.readyState === "loading"
  ){

    document.addEventListener(
      "DOMContentLoaded",
      addRivoSettings
    );

  }else{

    addRivoSettings();
  }

})();
`;


async function injectRivoUI(response){

  try{

    const contentType =
      response.headers.get(
        "content-type"
      ) || "";


    if(
      !contentType.includes(
        "text/html"
      )
    ){

      return response;
    }


    const html =
      await response.text();


    if(
      html.includes(
        "rivoSettingsInjected"
      )
    ){

      return new Response(
        html,
        {
          status:response.status,
          headers:response.headers
        }
      );
    }


    const modified =
      html
        .replace(
          "</head>",
          "<style id=\"rivo-ui-override\">" +
          UI_CSS +
          "</style></head>"
        )
        .replace(
          "</body>",
          "<script>" +
          UI_JS +
          "</script></body>"
        );


    const headers =
      new Headers(
        response.headers
      );


    headers.delete(
      "content-length"
    );


    return new Response(
      modified,
      {
        status:response.status,
        statusText:response.statusText,
        headers:headers
      }
    );

  }catch(error){

    return response;
  }
}


self.addEventListener(
  "install",
  function(event){

    event.waitUntil(

      caches
        .open(CACHE_NAME)
        .then(function(cache){

          return cache.addAll(
            APP_FILES
          );

        })
        .then(function(){

          return self.skipWaiting();

        })

    );

  }
);


self.addEventListener(
  "activate",
  function(event){

    event.waitUntil(

      caches
        .keys()
        .then(function(keys){

          return Promise.all(

            keys
              .filter(function(key){

                return key !== CACHE_NAME;

              })
              .map(function(key){

                return caches.delete(
                  key
                );

              })

          );

        })
        .then(function(){

          return self.clients.claim();

        })

    );

  }
);


self.addEventListener(
  "fetch",
  function(event){

    if(
      event.request.method !== "GET"
    ){

      return;
    }


    event.respondWith(

      fetch(event.request)

        .then(function(response){

          const result =
            event.request.destination === "document"
              ? injectRivoUI(
                  response.clone()
                )
              : response;


          if(response.ok){

            caches
              .open(CACHE_NAME)
              .then(function(cache){

                cache.put(
                  event.request,
                  response.clone()
                );

              });

          }


          return result;

        })

        .catch(function(){

          return caches
            .match(event.request)
            .then(function(response){

              return response ||
                new Response(
                  "Offline",
                  {
                    status:503
                  }
                );

            });

        })

    );

  }
);
