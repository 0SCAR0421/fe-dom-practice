// 엘리먼츠 선택
const container = document.querySelector('#container')
// 엘리먼츠 생성
const tweetDiv = document.createElement('div')
// 엘리먼츠 읽기와 쓰기
tweetDiv.textContent = 'dev'
// 클래스 추가
tweetDiv.classList.add('tweet')
// 엘리먼츠 삽입
container.append(tweetDiv)

// 엘리먼츠 삭제
// tweetDiv.remove()
// const tweets = document.querySelectorAll('.tweet');
// tweets.forEach((e) => {
//     e.remove()
// })

