//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill} 	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"1.1 요구사항명세서",imgurl:"https://drive.google.com/file/d/1_b_BViI-nn1iG5StanUV3CqjsVdD2JbR/view?usp=drive_link",imglog:"한눈에 보기 편하기 위해 이미지를 업로드 해보았습니다.",sourceurl:"https://docs.google.com/document/d/1QRlBgw9ikWA6ibnaokX77xwuoYcilPMl5GhDTCEG4Bo/edit?usp=drive_link"})//이미지타이틀


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"1.2 개발언어선정",imgurl:"https://drive.google.com/file/d/1bg1r2gRqmJrkHZ7TkyAZUiXTWG_Smq3x/view?usp=drive_link",imglog:"자바언어기반 Spring Tool, Visual Studio Code, heidiSQL",sourceurl:"https://docs.google.com/document/d/1e_E-PyAc3xPwuNIgLZqztFUwEJ_0XoDpOBfLCskYOlk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"Spring Tool",imgurl:"https://drive.google.com/file/d/1jMaPaIrOyHZO3nyHyVmqhFEknYM-tfuX/view?usp=drive_link",imglog:"Spring Tool v4.27.0",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"Visual Studio Code",imgurl:"https://drive.google.com/file/d/1BqIjUnIsl5vQgMwqPGekWQw0adz_q-om/view?usp=drive_link",imglog:"Visual Studio Code v1.96.4",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"HeidiSQL",imgurl:"https://drive.google.com/file/d/1BbvSKFjKABwHLF6Ic4AWlyyDrx0mKvt8/view?usp=drive_link",imglog:"heidiSQL v12.8.0.6908",sourceurl:""})//이미지타이틀


d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1mw6ZBtTbbZQYlfz1YQXCuTfoi-hnvfpg/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1cZjIfmsX8DRTvO9XoQyWKiVxMv6JsVJk/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1ow7c4hIHefpRvtvVY4FZ-h4XPBITkX3B/view?usp=sharing",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1qL0Y0k36IxZqoJaXGtD9Z1ICFigW_tt_/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)


// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("회원가입 및 로그인, 로그아웃")//서브 타이틀
d2.set_img(0,{imgtitle:"2.1 회원가입 및 로그인,로그아웃",imgurl:"https://drive.google.com/file/d/1t3bK5srDf_QR8WCuSpkYca8Htw0E8Bw3/view?usp=drive_link",imglog:"회원가입을 위해 작성해보았습니다..",sourceurl:"https://docs.google.com/document/d/1rNgWAcadIBPlY_Gf3ghb3X9uj8vFVvCZJ-OlRF5DKQg/edit?usp=sharing"})//이미지타이틀

d2.set_content("테스트케이스")//서브 타이틀
d2.set_img(1,{imgtitle:"2.2 테스트 케이스",imgurl:"https://drive.google.com/file/d/1i5JIgLe-Xjo7sa-AgNc8aT-Mc2WaLJVr/view?usp=drive_link",imglog:"회원가입에서 테스트를 해보았습니다.",sourceurl:"https://docs.google.com/document/d/1QCzhmIHE0CPg5CZkfc3XXcrBc3ECCk_DGQhbTOM1JoA/edit?usp=drive_link"})//이미지타이틀

d2.set_content("단위테스트")//서브 타이틀
d2.set_img(2,{imgtitle:"2.3 회원가입 성공",imgurl:"https://drive.google.com/file/d/1t3bK5srDf_QR8WCuSpkYca8Htw0E8Bw3/view?usp=drive_link",imglog:"회원가입에 성공하였습니다.",sourceurl:"https://docs.google.com/document/d/1QCzhmIHE0CPg5CZkfc3XXcrBc3ECCk_DGQhbTOM1JoA/edit?usp=drive_link"})//이미지타이틀
d2.set_img(2,{imgtitle:"2.3 로그인 성공",imgurl:"https://drive.google.com/file/d/1i0YH_mnQ2QMl8FfxKnGWunz9xBqqTte0/view?usp=drive_link",imglog:"로그인에 성공하였습니다.",sourceurl:"https://docs.google.com/document/d/1QCzhmIHE0CPg5CZkfc3XXcrBc3ECCk_DGQhbTOM1JoA/edit?usp=drive_link"})//이미지타이틀
d2.set_img(2,{imgtitle:"2.3 로그아웃 성공",imgurl:"https://drive.google.com/file/d/1GTJOF9orMjG-Nb3oPLDjwMy2Kf6e9KBo/view?usp=drive_link",imglog:"로그아웃에 성공하였습다.",sourceurl:"https://docs.google.com/document/d/1QCzhmIHE0CPg5CZkfc3XXcrBc3ECCk_DGQhbTOM1JoA/edit?usp=drive_link"})//이미지타이틀

d2.set_content("테스트 결과보고서")//서브 타이틀
d2.set_img(3,{imgtitle:"2.4 프로젝트 이름",imgurl:"https://drive.google.com/file/d/1XC2JjCTRnxJDO4eKfd4viRap2AZ7Vdt5/view?usp=drive_link",imglog:"프로젝트 이름",sourceurl:""})//이미지타이틀
d2.set_img(3,{imgtitle:"2.4 버전",imgurl:"https://drive.google.com/file/d/1jMaPaIrOyHZO3nyHyVmqhFEknYM-tfuX/view?usp=drive_link",imglog:"버전",sourceurl:""})//이미지타이틀

d2.set_fill("서버의 실행을 위해 여러 테스트를 수행")//사용자 에필로그
data_sets.push(d2)
//d3.set_img(0,{imgtitle:"",imgurl:"",imglog:"",sourceurl:""})//이미지타이틀
// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"회원가입하기",imgurl:"https://drive.google.com/file/d/1gBMCySsALVJj1oL9Ap9Drb5MJXllENWB/view?usp=drive_link",imglog:"회원가입폼",sourceurl:""})
d3.set_img(0,{imgtitle:"가입정보수신",imgurl:"https://drive.google.com/file/d/1uHp7braBV_mw3ZX5xWngCmBlZ5CLEUR9/view?usp=drive_link",imglog:"회원 정보 수신",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(0,{imgtitle:"정보입력",imgurl:"https://drive.google.com/file/d/1CK9eN58DDgVGFOXmPacPVB7Q78pAaUz4/view?usp=drive_link",imglog:"데이터베이스에 정보입력전 dao",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOimpl.java"})
d3.set_img(0,{imgtitle:"매퍼",imgurl:"https://drive.google.com/file/d/174qODmZdMEOu0A-YisCXl_4jZdda8fYz/view?usp=drive_link",imglog:"데이터베이스로 가입정보 쿼리",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})
d3.set_img(0,{imgtitle:"가입완료",imgurl:"https://drive.google.com/file/d/1HTaaAxw145eoL-e4JiiQ5Z_P5z-54mEQ/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(0,{imgtitle:"데이터베이스",imgurl:"https://drive.google.com/file/d/1xUawYLXrk_bq7sjdCyEGilLRbEvc5s_Y/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_content("회원로그인구현")
d3.set_img(1,{imgtitle:"로그인폼",imgurl:"https://drive.google.com/file/d/176Wif3JRWMUQTX0Kk6kkRARm-otTP6Ie/view?usp=drive_link",imglog:"로그인 정보 입력",sourceurl:""})
d3.set_img(1,{imgtitle:"서버컨트롤",imgurl:"https://drive.google.com/file/d/11Xm_hGoS4pUTXtrrRrYuGd5hGWYD041C/view?usp=drive_link",imglog:"로그인 정보를 입력받는다.",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(1,{imgtitle:"dao작동",imgurl:"https://drive.google.com/file/d/157KL49qnUl7p8oFfl5yoDRqhhbU83hxH/view?usp=drive_link",imglog:"로그인정보를 매퍼로 전달한다.",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOimpl.java"})
d3.set_img(1,{imgtitle:"매퍼",imgurl:"https://drive.google.com/file/d/1MWpTS6R7YMaxCnv_5xtKTrdGxLig7kTM/view?usp=drive_link",imglog:"데이터베이스쿼리",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})
d3.set_img(1,{imgtitle:"로그인성공",imgurl:"https://drive.google.com/file/d/1HTaaAxw145eoL-e4JiiQ5Z_P5z-54mEQ/view?usp=drive_link",imglog:"로그인 성공페이지",sourceurl:""})
d3.set_content("회원로그아웃구현")//서브타이틀
d3.set_img(2,{imgtitle:"로그인 화면",imgurl:"https://drive.google.com/file/d/1mskfUUFuVNHbFFUVrR3lGaeC3piKLQ9v/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(2,{imgtitle:"로그아웃 전달",imgurl:"https://drive.google.com/file/d/1W1aFkywXUt_euOs48vFOnQa6acrRZfT-/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(2,{imgtitle:"세션해제",imgurl:"https://drive.google.com/file/d/19aAO6bYCYG8naCHQ2hCQGdQg-qiQgI1O/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(2,{imgtitle:"로그아웃 결과",imgurl:"https://drive.google.com/file/d/1-XcfTtfzSqDfKdevRLlL0JO4ozU76utR/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_content("회원리스트연동")
d3.set_img(3,{imgtitle:"로그인상태",imgurl:"https://drive.google.com/file/d/1fGm405HTfRiVNZaPEOD0rKLupnN4wQUC/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(3,{imgtitle:"서버에서 수신",imgurl:"https://drive.google.com/file/d/1IQr2IIZ0CJD1EiQjmmvAd9j9ewp1bH66/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(3,{imgtitle:"dao",imgurl:"https://drive.google.com/file/d/1EaDlgJ2by58kNH6vn__diNb9z8VfcCDB/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOimpl.java"})
d3.set_img(3,{imgtitle:"최종리스트 수신",imgurl:"https://drive.google.com/file/d/1xE-_i-nSQsmFECLpCgoMCMn6KzsZFTkR/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀
d4.set_content("배치스케줄구현")//서브타이틀
d4.set_img(0,{imgtitle:"배치설치",imgurl:"https://drive.google.com/file/d/1JgS3SSwnsxwAnCLJC86KED3Lq9ah6vrh/view?usp=drive_link",imglog:"",sourceurl:""})
d4.set_img(0,{imgtitle:"배치작업설정",imgurl:"https://drive.google.com/file/d/19kgb5SEkypK_sxyeoODLwCD5T8zX5-PO/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/Kimseungjun97/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/job/BatchConfiguration.java"})
d4.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)