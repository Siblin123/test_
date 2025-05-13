let mainTitle = document.querySelectorAll("#mainTitle");
let sub_wrap = document.querySelectorAll(".sub_wrap");
let data = null;
//네비게이션 열기
mainTitle.forEach(title => {
    title.addEventListener("mouseenter", function () {
        title.classList.add("active");
        data = document.getElementById(this.dataset.target);

        //데이터 타겟으로 네비메뉴의 li자체를 들고오고
        sub_wrap.forEach(sub_ => {

            sub_.classList.remove("active")
            if (data.id == sub_.id)//타겟으로 가지고온 li의 id와 지금 마우스 올린 메뉴의 id가 같으면
            {

                sub_.classList.add("active")

            }
        })
    })
})

//네비게이션 닫기
mainTitle.forEach(title => {
    title.addEventListener("mouseleave", function () {

        data = document.getElementById(this.dataset.target);
        sub_wrap.forEach(sub_ => {
            sub_.classList.remove("active")

        })
    })
})

//네비게이션 유지하기
sub_wrap.forEach(sub_ => {

    sub_.addEventListener("mouseenter", () => {
        sub_.classList.remove("active")
        if (data.id == sub_.id) {
            sub_.classList.add("active")

        }
    })

    sub_.addEventListener("mouseleave", () => {
        sub_.classList.remove("active")

    })
})

//갤러리 부분
let gallerySwiper;
let width_vaule = window.innerWidth;
if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
}
if (width_vaule <= 800) {
    gallerySwiper = new Swiper(".gallery", {
        loop: true, // 루프 모드
        autoplay: {
            delay: 1000, // 자동 재생 (2초)
        },


    });
}
else {
    gallerySwiper = new Swiper(".gallery", {
        loop: true, // 루프 모드
        autoplay: {
            delay: 3000, // 자동 재생 (2초)
        },
        slidesPerView: 3,
        spaceBetween: 60

    });
}


window.addEventListener('resize', () => {
    let width_vaule = window.innerWidth;
    if (gallerySwiper) {
        gallerySwiper.destroy(true, true);
    }
    if (width_vaule <= 800) {
        gallerySwiper = new Swiper(".gallery", {
            loop: true, // 루프 모드
            autoplay: {
                delay: 2000, // 자동 재생 (2초)
            },


        });
    }
    else {
        gallerySwiper = new Swiper(".gallery", {
            loop: true, // 루프 모드
            autoplay: {
                delay: 3000, // 자동 재생 (3초)
            },
            slidesPerView: 3,
            spaceBetween: 60

        });
    }

});


let info1_spans = document.querySelectorAll(".info_1 .item span");


info1_spans.forEach((info1_span) => {


    info1_span.classList.remove("active");

    info1_span.addEventListener("click", () => {
        let info1_items = document.querySelectorAll(".info_1 .item");

        console.log(info1_items);//[div#notice.item, div#news.item.active]
        info1_items.forEach(item => {
            item.classList.remove("active");
            if (item.id == info1_span.id) {
                console.log(item.id, info1_span.id)
                let span = document.getElementById("news");
                item.classList.add("active");

            }
        });



    });
});

let info2_spans = document.querySelectorAll(".info_2 .item span");

info2_spans.forEach((info2_span, e) => {


    info2_span.classList.remove("active");

    info2_span.addEventListener("click", () => {
        let info2_items = document.querySelectorAll(".info_2 .item");

        console.log(info2_items);//[div#notice.item, div#news.item.active]
        info2_items.forEach(item => {
            item.classList.remove("active");
            if (item.id == info2_span.id) {
                console.log(item.id, info2_span.id)
                let span = document.getElementById("news");
                item.classList.add("active");

            }
        });



    });
});

//반응형 // cardwraps 청소년 이야기

let cardwrapSwiper;


if (cardwrapSwiper) {
    cardwrapSwiper.destroy(true, true);
}
if (width_vaule <= 800) {
    cardwrapSwiper = new Swiper(".cardwraps", {
        loop: true, // 루프 모드

        slidesPerView: 1,
        spaceBetween: 60,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}
else {
    cardwrapSwiper = new Swiper(".cardwraps", {
        loop: true, // 루프 모드

        slidesPerView: 4,
        spaceBetween: 60,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },

    });
}


//이야기
window.addEventListener('resize', () => {
    let width_vaule = window.innerWidth;
    if (cardwrapSwiper) {
        cardwrapSwiper.destroy(true, true);
    }
    if (width_vaule <= 800) {
        cardwrapSwiper = new Swiper(".cardwraps", {
            loop: true, // 루프 모드

            slidesPerView: 1,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }
    else {
        cardwrapSwiper = new Swiper(".cardwraps", {
            loop: true, // 루프 모드

            slidesPerView: 4,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }

});




//반응형 메뉴
let menu = document.querySelector(".menu");

let mobile_Wraps = document.querySelector(".mobile_Wraps");
menu.addEventListener("click", () => {
    mobile_Wraps.classList.toggle("active");
    closeBtn.classList.toggle("active");
})


//서브메뉴 끄기 켜기
let all_Submenu = document.querySelectorAll(".submenu");
let all_INB = document.querySelectorAll(".INB");
let closeBtn = document.querySelector(".close_Btn");

//닫기
closeBtn.addEventListener("click", () => {
    mobile_Wraps.classList.remove("active");
    closeBtn.classList.remove("active");
})


all_INB.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();
        for (let i = 0; i < all_INB.length; i++) {
            if (index == i) {
                console.log(i + "겨기");
                all_Submenu[i].classList.add("active");
            }
            else {
                all_Submenu[i].classList.remove("active");
                console.log(i + "끄기");
            }
        }
    })

});

let all_SubMenu = document.querySelectorAll(".submenu>ul>li>a");
let all_subMenuu = document.querySelectorAll(".subMenuu");

//console.log(all_SubMenu);


all_SubMenu.forEach((sub, index) => {
    console.log(sub);
    sub.addEventListener("click", (e) => {
        console.log(sub.id)
        
        all_subMenuu.forEach(subMenu => { 
            if (sub.id == subMenu.id) {
                
                if(sub.id!="")
                {
                    e.preventDefault();

                }
                    subMenu.classList.toggle("active");
            }
        });
    })
})





//반응형 사이드바
let mobile_sideBar = document.querySelector(".mobile_sideBar");
let sideBar_items = document.querySelector(".mobile_sideBar .sideBar_items");

console.log(sideBar_items)
mobile_sideBar.addEventListener("click", () => {
    console.log(sideBar_items)
    sideBar_items.classList.toggle("active");
})