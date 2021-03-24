# Webpack 5 Boilerplate

## config

- target

  - 지원하길 원하는 환경
  - values: web, node, es5, es6

- mode

  - 개발모드 또는 실배포환경 모드
  - values: development, production

- devtool

  - 디버깅을 위한 소스맵 설정
  - 소스맵 설정에 따라 퍼포먼스차이가 나므로 표를보고 확인 후 적용
  - 소스맵 설정표
    <https://webpack.js.org/configuration/devtool/#devtool>

- entry

  - webpack 이 파일을 읽기 시작하는 진입점 포인트 설정

- output

  - 번들 결과물에 대한 반환 설정
  - 주로 번들파일명과 번들경로 그리고 publicPath 설정이 들어간다.
  - path
    - 번들 결과파일이 위치할 경로
  - filename
    - 번들파일명을 설정
    - [contenthash] (웹팩5 신규 추가) 의 경우 빌드 될 때마다 파일명의 timestamp를 변경하는 것이 아니라 asset contents 가 바뀌었을 경우에만 [contenthash]가 변경됨
    - [fullhash] 의 경우 빌드 될 때마다 해시도 변경
    - 자리표시자 참고
      - [id] - 청크 ID 반환
      - [path] - 파일 경로 반환
      - [name] - 파일 이름 반환
      - [ext] - 확장자 반환
  - publicPath
    - 파일이 위치하는 서버상의 경로
