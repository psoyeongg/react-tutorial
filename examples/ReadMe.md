
#### 해당예제를 보기 앞서 미리 보시면 좋은 강의 목록입니다.

# 브라우저의 Workflow
=================================================================

![ex_screenshot](./01-hello-world/image/dom.png)

## DOM Tree 생성
브라우저가 HTML 을 전달받으면, 브라우저의 렌더 엔진이 이를 파싱하고 DOM 노드(Node) 로 이뤄진 트리를 만들어요. 각 노드는 각 HTML 엘리먼트들과 연관되어있죠.

 

## Render Tree 생성
그리고, 외부 CSS 파일과 각 엘리먼트의 inline 스타일을 파싱해요. 스타일 정보를 사용하여 DOM 트리에 따라 새로운 트리, 렌더트리를 만들어요.

 

## Render Tree 생성 – 그 뒤에선 무슨일이 일어나고 있는가..?
Webkit 에서는 노드의 스타일을 처리하는 과정을 ‘attachment’ 라고 불러요. DOM 트리의 모든 노드들은 ‘attach’ 라는 메소드가 있어요. 이 메소드는 스타일 정보를 계산해서 객체형태로 반환합니다.

이 과정은 동기적(synchronous) 작업이구요, DOM 트리에 새로운 노드가 추가되면 그 노드의 attach 메소드가 실행됩니다.

렌더 트리를 만드는 과정에선, 각 요소들의 스타일이 계산되구요, 또 이 계산되는 과정에서 다른 요소들의 스타일 속성들을 참조합니다.

 

## Layout (reflow 라고도 불립니다)
렌더 트리가 다 만들어지고 나면, 레이아웃 과정을 거쳐요. 각 노드들은 스크린의 좌표가 주어지고, 정확히 어디에 나타나야 할 지 위치가 주어집니다.

 

## Painting
그 다음 작업은 렌더링 된 요소들에 색을 입히는 과정입니다. 트리의 각 노드들을 거쳐가면서 paint() 메소드를 호출해요. 그러고나면, 스크린에 원하는 정보가 나타나는거죠.


### 강의 소개
- React.js 학습 방법 안내
- 최종 학습 목표 안내

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/GEoNiUcVwjE/0.jpg)](https://www.youtube.com/watch?v=fT9iFFAt60E&feature=youtu.be&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH)


### 프론트엔드 라이브러리
- 프론트엔드 라이브러리란 무엇인가?

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/H24D0GveBYY/0.jpg)](https://www.youtube.com/watch?v=_aBq1SKl6yQ&index=2&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH)


### React.js Virtual DOM
- 리액트의 Virtual DOM

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/fISs08P6eMc/0.jpg)](https://www.youtube.com/watch?v=wKwMRH0PkMg&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH&index=3)


### React의 특별한점
- 리액트를 특별하게 만드는 점은?

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/fISs08P6eMc/0.jpg)](https://www.youtube.com/watch?v=aP5rmFZ70js&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH&index=4)