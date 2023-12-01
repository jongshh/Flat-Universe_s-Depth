# 평면 우주의 입체성
- 별과 우주의 물질들, 그리고 현 우주에 존재하지 않는 반물질과 물질의 반응성
- 평면에 우주를 존재한다면, 어떤 느낌일까요?
  
- GUI로 캔버스 크기, 별 갯수, 질량 범위, 물질 양 등을 조정가능하도록 합니다.

할일 및 동작

- 추가할 클래스들 |
- 기능적 클래스 | 어트렉터 / 리펠러 (혹은 병합, +/- 수치로 밀고/당기기 전환이 가능함) / 별 물리 (움직임 (위/속/가), 충돌 판정과 파티클 생성등) 슈퍼 클래스)
- 파티클 클래스 |  폭발 시스템 (어트/리펠 속성 상속) / 폭발 파티클 (어트/리펠 속성 상속) / 물질 파티클 시스템 / 물질 파티클 / 별 파티클 시스템 (어트/리펠 속성 상속) / 별 파티클 (어트/리펠 속성 상속) / 고정 항성 시스템 (어트/리펠 속성 상속, 영향 X)/ 고정 항성 파티클 (어트/리펠 속성 상속, 영향 X)

- 어트렉터/리펠러 자체에 개체를 만드는 것이 아닌 해당 속성을 상속하는 개체를 생성, 마찬가지로 물질 (파티클) 과 동잃하게 랜덤한 움직임을 가지도록 한다.
- 별들은 물질(당김)이나 반물질(밀어냄)로 이루어져 있으며, 물질 계열성은 하얀색 아웃라인을, 반물질 계열성은 검은색 아웃라인을 가진다. 내부 색상은 RGB 배열중 무작위로 선택된다.
- 고정 항성 / 블랙홀 (갯수 제어 가능) 무작위 위치에 생성된 항성, 마찬가지로 GUI로 초기 질량이 설정 가능하다.

- 마우스 동작 (중앙 상단에 마우스의 힘 계수를 써두거나, GUI 를 통해 마우스의 속성을 제어할 수 있다. 마찬가지로 물질/반물질 성질을 둘 다 가질 수 있으며 -/+ 로 표현한다. 마찬가지로 물질 (+)은 하얀색, 반물질 (-)는 검은색 아웃라인을 가진다. 클릭하였을때만 빨간색으로 칠해지며 작동하며, 누르지 않았을 때는 투명한 내부를 가진다. 마찬가지로 힘의 크기에 따라서 포인터의 크기가 달라진다. (계수는 작음)
- 별들은 (-+500, 무작위) 수명을 가지고 있고, 각 수명 주기에 따라 크기, 질량이 점차 커지고, 밝기가 밝아진다. (물질/반물질 동일) 수명이 다한 별들은 폭발 파티클 시스템 (충돌 지점에서 전 방위로 방사하는 입자)을 남긴다. 해당 시스템은 강한 리펠러를 가진다 (수명 주기동안)
- 별들이 충돌하면 (가능하면 두 별의 질량을 합친) 폭발 파티클 시스템이 생성된다. 동시에 별들의 수명은 최대가 되어 사라진다. (별들이 사라질 때마다 새로운 초기 별들을 무작위 위치에 생성한다.)
- 만약 반물질/물질 별이 구별 가능하다면, 별의 속성에 따른 폭발 파티클의 세기 조정?

- 물질들은 별에 비하면 너무나 작은 질량 (물론 이것들 역시 질량을 가지지만) 별들에 영향을 주기 어렵고, 물질의 움직임 역시 서로 간섭을 줄 여지가 있기 때문에 현재는 어트렉터/리펠러의 영향만을 받고, 영향을 주는 것은 X.
- 고정 항성은 별과 충돌하지 않는다. (현재는) 혹은 고정 항성 자체를 삭제할 예정
  
