let mainTitle = document.querySelectorAll("#mainTitle");
let sub_wrap = document.querySelectorAll(".sub_wrap");
let data = null;

// 네비게이션 열기
mainTitle.forEach(title => {
    title.addEventListener("mouseenter", function () {
        title.classList.add("active");
        data = document.getElementById(this.dataset.target);

        sub_wrap.forEach(sub_ => {
            sub_.classList.remove("active");
            if (data && data.id === sub_.id) {
                sub_.classList.add("active");
            }
        });
    });
});

// 네비게이션 닫기
mainTitle.forEach(title => {
    title.addEventListener("mouseleave", function () {
        data = document.getElementById(this.dataset.target);
        sub_wrap.forEach(sub_ => {
            sub_.classList.remove("active");
        });
    });
});

// 네비게이션 유지하기
sub_wrap.forEach(sub_ => {
    sub_.addEventListener("mouseenter", () => {
        if (data && data.id === sub_.id) {
            sub_.classList.add("active");
        }
    });

    sub_.addEventListener("mouseleave", () => {
        sub_.classList.remove("active");
    });
});

// 갤러리 반응형 Swiper
let gallerySwiper;
let width_value = window.innerWidth;

function initGallerySwiper() {
    if (gallerySwiper) {
        gallerySwiper.destroy(true, true);
    }

    if (width_value <= 800) {
        gallerySwiper = new Swiper(".gallery", {
            loop: true,
            autoplay: {
                delay: 2000,
            },
        });
    } else {
        gallerySwiper = new Swiper(".gallery", {
            loop: true,
            autoplay: {
                delay: 3000,
            },
            slidesPerView: 3,
            spaceBetween: 60
        });
    }
}
initGallerySwiper();

window.addEventListener('resize', () => {
    width_value = window.innerWidth;
    initGallerySwiper();
});

// info_1 클릭 탭
document.querySelectorAll(".info_1 .item span").forEach((info1_span) => {
    info1_span.classList.remove("active");

    info1_span.addEventListener("click", () => {
        document.querySelectorAll(".info_1 .item").forEach(item => {
            item.classList.remove("active");
            if (item.id === info1_span.id) {
                item.classList.add("active");
            }
        });
    });
});

// info_2 클릭 탭
document.querySelectorAll(".info_2 .item span").forEach((info2_span) => {
    info2_span.classList.remove("active");

    info2_span.addEventListener("click", () => {
        document.querySelectorAll(".info_2 .item").forEach(item => {
            item.classList.remove("active");
            if (item.id === info2_span.id) {
                item.classList.add("active");
            }
        });
    });
});

// cardwraps 반응형 Swiper
let cardwrapSwiper;

function initCardwrapSwiper() {
    if (cardwrapSwiper) {
        cardwrapSwiper.destroy(true, true);
    }

    if (width_value <= 800) {
        cardwrapSwiper = new Swiper(".cardwraps", {
            loop: true,
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
    } else {
        cardwrapSwiper = new Swiper(".cardwraps", {
            loop: true,
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
}
initCardwrapSwiper();

window.addEventListener('resize', () => {
    width_value = window.innerWidth;
    initCardwrapSwiper();
});

// 반응형 메뉴
let menu = document.querySelector(".menu");
let mobile_Wraps = document.querySelector(".mobile_Wraps");
let closeBtn = document.querySelector(".close_Btn");

menu.addEventListener("click", () => {
    mobile_Wraps.classList.toggle("active");
    closeBtn.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    mobile_Wraps.classList.remove("active");
    closeBtn.classList.remove("active");
});

// 서브메뉴 열고 닫기
let all_Submenu = document.querySelectorAll(".submenu");
let all_INB = document.querySelectorAll(".INB");

all_INB.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();
        all_Submenu.forEach((submenu, i) => {
            submenu.classList.toggle("active", index === i);
        });
    });
});

let all_SubMenu = document.querySelectorAll(".submenu>ul>li>a");
let all_subMenuu = document.querySelectorAll(".subMenuu");

all_SubMenu.forEach((sub) => {
    sub.addEventListener("click", (e) => {
        all_subMenuu.forEach(subMenu => {
            if (sub.id === subMenu.id) {
                if (sub.id !== "") {
                    e.preventDefault();
                }
                subMenu.classList.toggle("active");
            }
        });
    });
});

// 반응형 사이드바
let mobile_sideBar = document.querySelector(".mobile_sideBar");
let sideBar_items = document.querySelector(".mobile_sideBar .sideBar_items");

mobile_sideBar.addEventListener("click", () => {
    sideBar_items.classList.toggle("active");
});

// 메인 비주얼 자동 슬라이더
if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade", // 페이드 효과 사용
        fadeEffect: {
            crossFade: true, // 부드러운 전환
        },
        autoplay: {
            delay: 3000, // 3초 간격 자동 전환
            disableOnInteraction: false, // 사용자 조작 후에도 자동 재생 유지
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
