const detailPageMock = {
	status: 200,
	message: 'success',
	data: {
		isBuyer: true,
		product_id: 715, // 상품의 아이디
		product_name: '바오바오 (링숄더백)', // 상품의 이름
		product_price: 115000, // 상품의 가격
		product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
		product_coordinate: [37.50011480738251, 127.03674852807775], // 상품의 위도 경도
		product_imgs: [
			'https://media.bunjang.co.kr/product/215187391_2_1676610122_w856.jpg',
			'https://media.bunjang.co.kr/product/215187391_3_1676610122_w856.jpg',
			'https://media.bunjang.co.kr/product/215187391_4_1676610122_w856.jpg',
			'https://media.bunjang.co.kr/product/215187391_5_1676610122_w856.jpg',
		],
		product_content:
			'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
		product_create_at: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
		product_update_at: '2023-04-14T13:59:49.690Z', // 상품을 업데이트한 시간
		product_like: '2', // 상품의 좋아요 갯수
		product_chat_count: '5', // 상품의 채팅 갯수
		seller_info: {
			user_id: 'nature', // 상품을 게시한 사람의 아이디
			user_nick_name: '네이쳐', // 판매자의 닉네임
			user_profile_url:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbrvjmx%2FbtrQfeNBD8C%2FPulqvzCWn30z0ssA5CL0vk%2Fimg.jpg', // 판매자의 프로필 이미지
			user_temperature: '39.8', // 판매자의 매너온도
			user_product_count: 47, // 판매자가 올린 게시물수
			user_product_list: [
				// 판매자가 올린 상품들에 대한 정보
				{
					product_id: '120', // 상품의 아이디
					product_main_img_url:
						'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbrvjmx%2FbtrQfeNBD8C%2FPulqvzCWn30z0ssA5CL0vk%2Fimg.jpg', // 상품의 대표 이미지 주소
				},
				{
					product_id: '50', // 상품의 아이디
					product_main_img_url:
						'https://media.bunjang.co.kr/product/229927983_1_1689321636_w292.jpg', // 상품의 대표 이미지 주소
				},
				{
					product_id: '44', // 상품의 아이디
					product_main_img_url:
						'https://media.bunjang.co.kr/product/229927983_1_1689321636_w292.jpg', // 상품의 대표 이미지 주소
				},
				{
					product_id: '145', // 상품의 아이디
					product_main_img_url:
						'https://media.bunjang.co.kr/product/192869261_1_1685019943_w292.jpg', // 상품의 대표 이미지 주소
				},
				{
					product_id: '5124', // 상품의 아이디
					product_main_img_url:
						'https://media.bunjang.co.kr/product/226840555_1_1686560346_w292.jpg', // 상품의 대표 이미지 주소
				},
				{
					product_id: '2231', // 상품의 아이디
					product_main_img_url:
						'https://media.bunjang.co.kr/product/226840555_1_1686560346_w292.jpg', // 상품의 대표 이미지 주소
				},
			],
		},
		chart_data: {
			// 차트의 데이터
			product_tag: '의류 / 신발', // 차트를 조회할 때 사용한 카테고리
			data: [
				{
					x: '4월',
					y: 100000,
				},
				{
					x: '5월',
					y: 120000,
				},
				{
					x: '6월',
					y: 400000,
				},
				{
					x: '7월',
					y: 300000,
				},
				{
					x: '최근',
					y: 250000,
				},
			],
		},
		recommended_product: [
			// 추천 상품 혹은 연관된 상품들
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
			{
				product_id: 20,
				product_name: '스타벅스 아메리카노 기프티콘',
				product_price: 15000,
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
			},
		],
	},
}

export default detailPageMock
