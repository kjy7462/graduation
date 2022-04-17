var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.67344157,126.7768471), // 지도의 중심좌표
        level:5  // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var data =[['밀알', '031-975-9166', 19, '경기도 고양시 일산동구 하늘마을로 57-5, 4층 (중산동)', 37.6835157, 126.7881781], ['가람지역아동센터', '031-979-0122', 40, '경기도 고양시 덕양구 중앙로472번길 85-1 (행신동)', 37.6226355, 126.8439592], ['가나안', '031-973-3181', 48, '경기도 고양시 덕양구 지도로115번길 35 (토당동)', 37.6267743, 126.8212945], ['그루터기지역아동센터', '070-7137-8275', 29, '경기도 고양시 덕양구 토당로42번길 19 (토당동)', 37.6201619, 126.8217636], ['꿈나무지역아동센터', '031-967-3006', 36, '경기도 고양시 덕양구 통일로 797, 3층 (관산동, 벽일빌딩)', 37.6884921, 126.8618678], ['다메섹지역아동센터', '031-925-1690', 26, '경기도 고양시 일산서구 호수로856번길 73-14, 3층 (대화동)', 37.673906, 126.7491563], ['둥지', '031-968-8066', 42, '경기도 고양시 일산동구 고양대로1037번길 17 (식사동)', 37.67246, 126.8084541], ['반석지역아동센터', '031-970-8806', 29, '경기도 고양시 덕양구 용현로 33 (행신동)', 37.6157495, 126.8355924], ['사랑샘', '031-923-9109', 29, '경기도 고양시 일산서구 가좌4로 12-12 (가좌동)', 37.6862344, 126.7189126], ['쉴가', '070-4307-0692', 29, '경기도 고양시 일산서구 성저로42번길 64 (대화동)', 37.6833804, 126.7558466], ['아가페', '031-908-9232', 29, '경기도 고양시 일산동구 경의로 309 (마두동)', 37.6573252, 126.7934892], ['어울림', '031-972-6653', 29, '경기도 고양시 덕양구 행신동 644번지 50호 3층,지하1층', 37.6242993, 126.8290372], ['일산', '031-975-3987', 29, '경기도 고양시 일산서구 고양대로695번길 10 (일산동)', 37.6842908, 126.773937], ['주향', '031-902-9183', 29, '경기도 고양시 일산동구 고풍로 20, 202호 (풍동)', 37.6617931, 126.7981006], ['푸른학교반디교실', '031-818-1236', 35, '경기도 고양시 덕양구 토당로78번길 7-22 (토당동)', 37.6231042, 126.8192645], ['한빛지역아동센터', '031-970-5025', 29, '경기도 고양시 덕양구 토당동  876-7번지 삼윤상가 5층', 37.6203034, 126.8259316], ['한사랑푸른', '031-962-8062', 29, '경기도 고양시 일산동구 성현로 505 (사리현동)', 37.6975166, 126.838595], ['행복한', '070-8239-1377', 19, '경기도 고양시 일산서구 탄중로101번길 36 (덕이동)', 37.6943209, 126.7572163], ['강선', '031-914-5130', 19, '경기도 고양시 일산서구 중앙로 1376, 304-2호/305-1호 (주엽동, 한양상가)', 37.667321, 126.7670186], ['하늘그림', '031-976-0387', 34, '경기도 고양시 일산서구 원일로21번길 19, 2층 (일산동, 일신건영빌딩)', 37.688011, 126.7644589], ['한울타리', '070-7012-6645', 25, '경기도 고양시 일산서구 장자길118번길 54 (덕이동)', 37.701878, 126.7436862], ['꿈틀이지역아동센터', '031-906-1033', 19, '경기도 고양시 일산동구 산두로109번길 19 (정발산동)', 37.6670223, 126.7850408], ['꿈쟁이', '070-7834-6186', 19, '경기도 고양시 일산서구 주엽로 134, 5층 511호 (주엽동)', 37.6706274, 126.7580992], ['원당제일', '031-964-1988', 49, '경기도 고양시 덕양구 호국로790번길 87 (성사동)', 37.6545794, 126.8406161], ['글로리아지역아동센터', '031-938-7942', 49, '경기도 고양시 덕양구 호국로716번길 21-7 (성사동)', 37.6512445, 126.8332578], ['늘푸른교실', '031-964-9923', 49, '경기도 고양시 덕양구 대양로285번길 73 (고양동)', 37.7042686, 126.8969232], ['동녘', '031-903-2760', 40, '경기도 고양시 일산동구 중앙로 1123, 1층 160호 (백석동, 흰돌마을)', 37.6471043, 126.7814843], ['맑은샘', '031-977-4454', 29, '경기도 고양시 일산동구 고봉로658번길 13 (성석동)', 37.7154578, 126.7898212], ['LH행복꿈터삼송지역아동센터', '070-5111-9923', 19, '경기도 고양시 덕양구 오금2로 26 (신원동, 신원마을 2단지 주민복지관 2층)', 37.666324, 126.8915368], ['신성', '031-904-9336', 19, '경기도 고양시 일산동구 백석동 1344', 37.6408829, 126.7837915], ['아가페21', '031-977-1004', 35, '경기도 고양시 일산서구 일청로91번길 82, 3층 301호 (일산동)', 37.6910409, 126.7702882], ['열매지역아동센터', '031-905-5133', 19, '경기도 고양시 일산동구 백석로 153, 지하1층 (백석동)', 37.651603, 126.7929047], ['푸른우리', '031-905-3400', 29, '경기도 고양시 일산동구 백석동 1343', 37.6422192, 126.7852945], ['정발신성', '031-916-8610', 29, '경기도 고양시 일산동구 대산로 20 (정발산동)', 37.6700742, 126.7742414], ['새꿈터', '031-911-0611', 24, '경기도 고양시 일산동구 산두로229번길 29,2층(정발산동)', 37.6746859, 126.7782966]]
// 마커를 표시할 위치와 title 객체 배열입니다 
// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
//마커들을 담을 배열 
var radius = 100000;
var markers =[];
var markers1 =[];
var markers2 =[];
var markers3 =[];
var markers4 =[];
var markers5 =[];
var markers6 =[];
var custumoverlays =[];
var buttons = document.getElementById("button1");
var buttons2 = document.getElementById("button2");
var buttons3 = document.getElementById("button3");
var korean = document.getElementById("test");
var korean2 = document.getElementById("korean");
var closeBtns = [];

{for (var i = 0; i < data.length; i ++) {
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    var markerposition = new kakao.maps.LatLng(data[i][4],data[i][5]);
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: markerposition, // 마커를 표시할 위치
        title : data[i][0], // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage, // 마커 이미지 

    });
                        var Customcontent = document.createElement('div');
						Customcontent.className = "wrap";

						var info = document.createElement('div');
						info.className = "info"			
						Customcontent.appendChild(info);

						//커스텀오버레이 타이틀
						var contentTitle = document.createElement("div");
						contentTitle.className = "title"
						contentTitle.appendChild(document.createTextNode(data[i][0]));
						info.appendChild(contentTitle);

						//커스텀오버레이 닫기 버튼
						var closeBtn = document.createElement("div");
						closeBtn.className = "close";
						closeBtn.setAttribute("title","닫기");
						closeBtn.onclick = function() {customoverlay.setMap(null); };
						contentTitle.appendChild(closeBtn);

						var bodyContent = document.createElement("div");
						bodyContent.className = "body";
						info.appendChild(bodyContent);

						var imgDiv = document.createElement("div");
						imgDiv.className = "img";
						bodyContent.appendChild(imgDiv);

						//커스텀오버레이 이미지
						var imgContent = document.createElement("img");
						imgContent.setAttribute("src", "http://cfile181.uf.daum.net/image/250649365602043421936D");
						imgContent.setAttribute("width", "73");
						imgContent.setAttribute("heigth", "70");
						imgDiv.appendChild(imgContent);

						var descContent = document.createElement("div");
						descContent.className = "desc"
						bodyContent.appendChild(descContent);

						//커스텀오버레이 주소			
						var addressContent = document.createElement("div");
						addressContent.className = "ellipsis";
						addressContent.appendChild(document.createTextNode(data[i][3]));
						descContent.appendChild(addressContent);

						//커스텀오버레이 지번주소
						var address2Content = document.createElement("div");
						address2Content.className = "jibun ellipsis";
						address2Content.appendChild(document.createTextNode(data[i][1]));
						descContent.appendChild(address2Content);
						var link = document.createElement("a");
						link.href="https://map.kakao.com/link/to/"+data[i][0]+","+data[i][4]+","+data[i][5];
						link.target = "_blank";
						link.appendChild(document.createTextNode("길찾기"));
						descContent.appendChild(link);
						var menu = document.createElement("div");
						menu.className = "ellipsis";
                        menu.appendChild(document.createTextNode("정원:"));
						menu.appendChild(document.createTextNode(data[i][2]));
                        menu.appendChild(document.createTextNode("명"));
						descContent.appendChild(menu);
						//마커 위에 커스텀오버레이 콘텐츠 Dom으로 구현 끝

// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
var customoverlay = new kakao.maps.CustomOverlay({
    content:  Customcontent,
    position: marker.getPosition()       
});
markers.push(marker);
custumoverlays.push(customoverlay);
closeBtns.push(closeBtn);
// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
}
// 클릭 이벤트 핸들러
function getClickHandler(seq){
	return function(e){
		var marker = markers[seq],
			customoverlay = custumoverlays[seq];
			if (customoverlay.getMap()) {
            customoverlay.setMap(null);
        } else {
            customoverlay.setMap(map);
        }
	}
}
// 마커 클릭시 이벤트를 정의합니다. 
for (var i=0, ii=markers.length; i<ii; i++) {
    kakao.maps.event.addListener(markers[i], 'click', getClickHandler(i));
	
}

//거리순으로 정렬하기 위한 옵션입니다. 
// 원(Circle)의 옵션으로 넣어준 반지름
// 마커들이 담긴 배열
markers.forEach(function(m) {
    var c1 = map.getCenter();
    var c2 = m.getPosition();
    var poly = new kakao.maps.Polyline({
      // map: map, 을 하지 않아도 거리는 구할 수 있다.
      path: [c1, c2]
    });
    var dist = poly.getLength(); // m 단위로 리턴
    if (dist < radius) {
        m.setMap(map);
    } else {
        m.setMap(null);
    }
});

}
