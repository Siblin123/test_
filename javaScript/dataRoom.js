let rows = [...document.querySelectorAll("tbody tr")];//모든 글
let rowMaxCount = 10;//게시글의 최대 수

let pagenation = document.querySelector(".pagenation");
let pageCount = Math.ceil(rows.length / rowMaxCount); //모든 페이지 수 + 반올림
let pageMaxCount = 5; // 최대 페이지 수
let CurBefore_NextNum = 0;
//Start()
for (let i = 1; i <= pageCount; i++) //처음 시작시 페이지네이션 추가해주기
{
  pagenation.innerHTML += `<li><a href="">${i}</a></li>`;
}
VeiePageNation(CurBefore_NextNum);
VeiwRows(0);
Before_Next_Btn()



//Update()
MoveTO_PageNation();


//Funtion
function VeiwRows(index)//특정번호의 게시글만 보여주기
{
  //모든 게시글 꺼주기
  for (row of rows) {
    row.style.display = "none";
  }

  let StartIndex = index * rowMaxCount;
  let EndIndex = StartIndex + rowMaxCount

  for (let i = StartIndex; i < EndIndex; i++) {
    rows[i].style.display = "";
  }
}

function MoveTO_PageNation() //페이지이동
{
  let numbers = pagenation.querySelectorAll("a");
  numbers.forEach(function (number, index) {
    number.addEventListener("click", function (e) {
      e.preventDefault();
      VeiwRows(index);
    })
  });
}



//최대 페이지수로 보여주기
function VeiePageNation(index) {
  let pagenationNumbers = document.querySelectorAll(".pagenation li"); // 모든 페이지 수
  

  // 모든 페이지 비활성화
  pagenationNumbers.forEach((pageNum) => {
    pageNum.style.display = "none";
  });

  let startPage = index * pageMaxCount;
  let endPage = startPage + pageMaxCount;

  for (let i = startPage; i < endPage; i++) {
    if( pagenationNumbers[i]==null)
    {
      break;
    }
    pagenationNumbers[i].style.display = ""
  }



}


//이전 || 다음 페이지로 이동하기
function Before_Next_Btn() {
  let BeforeBtn = document.getElementById("Before");
  let NextBtn = document.getElementById("Next");

  if (CurBefore_NextNum == 0) { BeforeBtn.style.opacity = 0; console.log("이전삭제")}

  else { BeforeBtn.style.opacity = 1; console.log("이전복구")}


  if (CurBefore_NextNum == pageCount) { NextBtn.style.opacity = 0; console.log("이후삭제")}

  else { NextBtn.style.opacity = 1; console.log("이후 복구")}
  
  BeforeBtn.addEventListener("click", function (e) {
    e.preventDefault(); // a 태그 등의 기본 동작 막기
    CurBefore_NextNum--;
        VeiwRows(CurBefore_NextNum * pageMaxCount);
    VeiePageNation(CurBefore_NextNum);

    if (CurBefore_NextNum == 0) { BeforeBtn.style.opacity = 0; console.log("이전삭제")}

    else { BeforeBtn.style.opacity = 1; console.log("이전복구")}
  
  
    if (CurBefore_NextNum == pageCount) { NextBtn.style.opacity = 0; console.log("이후삭제")}
  
    else { NextBtn.style.opacity = 1; console.log("이후 복구")}
    // 이전 페이지 로직
  });

  NextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if(CurBefore_NextNum >Math.floor(pageCount/pageMaxCount))
      return;

    CurBefore_NextNum++;
    VeiwRows(CurBefore_NextNum * pageMaxCount);
    VeiePageNation(CurBefore_NextNum);
    // 다음 페이지 로직
    if (CurBefore_NextNum == 0) { BeforeBtn.style.opacity = 0; console.log("이전1삭제")}

    else {BeforeBtn.style.opacity = 1; console.log("이전1복구")}
  
  
    if (CurBefore_NextNum == Math.floor(pageCount/pageMaxCount)) { NextBtn.style.opacity = 0; console.log("이후1삭제")}
  
    else { NextBtn.style.opacity = 1; console.log("이후1 복구")}
  });




}


