# 🇫🇷 React-Paris-Olympics

![image](https://github.com/user-attachments/assets/49bda511-529d-4a3e-a763-fba118905273)
![image](https://github.com/user-attachments/assets/0e85a1df-ad41-4ef7-a0c5-89786f48ae23)

<br/>
<br/>

# 💬 프로젝트 소개
> 📅 개발 기간 : 2025. 01. 21 ~ 2025. 01. 22 (총 2일) <br/>
> 🔗 배포 주소 : [https://llddang.github.io/React-Paris-Olympics/](https://llddang.github.io/React-Paris-Olympics/) <br/>
> 
> 파리 올림픽의 국가별 메달을 추적할 수 있는 **`Olympic Medal Tracker`** 입니다. <br/>
>
> 파리 올림픽에 출전한 국가를 검색하여 선택한 뒤, 금메달/은메달/동메달을 입력하면, <br/>
> 전체 국가에 대한 랭크를 확인할 수 있습니다.

<br/>
<br/>

# ⚙ 프로젝트 기능 소개
- **LocalStorage**를 이용해 국가별 메달 기록을 저장하고, 저장된 메달 리스트를 수정/삭제할 수 있습니다.
- 각 메달별 개수 혹은 합계 순으로 **정렬**이 가능합니다.
- 올바르지 않은 입력에 대해 **유효성 검증**을 구현하여 사용자 입력값의 정확성과 안전성을 개선했습니다
- 기본 브라우저 알럿 대신 **토스트 팝업**을 사용하여 사용자 경험을 개선했습니다.
- 국가명을 통해 2024 파리 올림픽 참가국 목록에서 쉽게 선택할 수 있습니다.

<br/>
<br/>

# 🕶️ 기술 스택
### **Deploy** <br/>
 &emsp; <img src="https://img.shields.io/badge/Github_Action-000000?style=for-the-badge&logo=github&logoColor=white" alt="Github Action"/>

### **Frontend** <br/>
 &emsp; <img src="https://img.shields.io/badge/React_18.3.1-087ea4?style=for-the-badge&logo=React&logoColor=white" alt="React"/> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript"/> <img src="https://img.shields.io/badge/Yarn_1.22.22-514C87.svg?style=for-the-badge&logo=Yarn&logoColor=white" alt="Yarn"/> <img src="https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white" alt="Shadcn"/>

<br/>
<br/>

# 🚀 트러블 슈팅

#### [영원히 입력 안되는 폼이 있다? : 진실혹은거짓](https://llddang-blog.tistory.com/64)

<br/>
<br/>

# 📁 프로젝트 구조

```markdown
📦 React-Paris-Olympics
├─ index.html
└─ src
   ├─ App.tsx
   ├─ components
   │  └─ ui (Shadcn.ui 라이브러리의 컴포넌트들을 모아두었습니다.)
   ├─ constants.ts
   ├─ containers (특정 페이지에서만 사용되는 컴포넌트들을 모아두었습니다. (MedalForm, MedalTable))
   ├─ index.css
   ├─ lib
   │  ├─ medalForm.util.ts
   │  └─ utils.ts
   ├─ main.tsx
   ├─ types.dto.ts
   └─ types.type.ts
```
