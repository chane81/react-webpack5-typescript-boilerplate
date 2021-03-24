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
    - [contenthash] (`웹팩5 신규 추가`) 의 경우 빌드 될 때마다 파일명의 timestamp를 변경하는 것이 아니라 asset contents 가 바뀌었을 경우에만 [contenthash]가 변경됨
    - [fullhash] 의 경우 빌드 될 때마다 해시도 변경
    - 자리표시자 참고
      - [id] - 청크 ID 반환
      - [path] - 파일 경로 반환
      - [name] - 파일 이름 반환
      - [ext] - 확장자 반환
  - publicPath

    - 파일이 위치하는 서버상의 경로

  - module

    - 의존성 트리의 모듈 처리방식을 설정, 로더들이 위치함
    - [test] - 로더가 읽을 파일을 정규식으로 정의
    - [use] - 로더 및 로더의 옵션들을 정의
    - [exclude] - 컴파일하지 않을 폴더/파일을 정의
    - [include] - 컴파일할 폴더/파일을 정의
    - 스타일 (css, sass)
      - style-loader, css-loader, sass-loader
    - 이미지파일

      - 기존 웹팩5 이전에는 아래가 사용됨

        - file-loader
        - url-loader
        - raw-loader

      - 웹팩5부터 아래가 사용됨

        - asset/resource (file-loader)
        - asset/inline (url-loader)
        - asset/source (raw-loader)
        - asset - automatically

      - 리액트 컴포넌트 (jsx, tsx)
        - babel-loader (jsx)
        - ts-loader (tsx)

  - plugins

    - 번들링 후 결과물에 대한 처리를 할 다양한 플러그인에 대한 설정을 함
    - 자주사용되는 플러그인
      - https://agal.tistory.com/71
      - https://velog.io/@cckn/%EC%9B%B9%ED%8C%A9-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%B0%8F-%EC%A3%BC%EC%9A%94-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8
