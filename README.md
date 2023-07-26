# project
# DB

### **User (회원가입 및 로그인 수집데이터)**

- user_email (이메일)
- user_password (비밀번호)
- user_nickname (닉네임)
- user_phone_number (폰번호)
- user_profile (프로필)

```sql
create table user_db (
user_email VARCHAR(50) PRIMARY KEY,
user_password VARCHAR(20) NOT NULL,
user_nickname VARCHAR(30) NOT NULL,
user_phone_number VARCHAR(15) NOT NULL,
user_profile TEXT
);
```

### **Board(게시판 수집 데이터)**

- board_id (번호) → id
- board_title (게시판 제목) → board_title
- board_content (게시판 내용) → board_contents
- ~~board_image (게시판 이미지)~~
- ~~board_video (게시판 비디오)~~
- ~~board_file (게시판 파일)~~
- ~~board_write_email (작성자 이메일)~~
- (비밀번호) → board_password `미반영`
- board_profile (작성자 프로필) `미반영`
- board_write_nickname (작성자 닉네임) → board_writer = `로그인한 회원`
- board_write_date (작성일) → write_date
- (수정일) → update_date `추가`
- board_click_count (조회수) → board_click_count
- (파일여부) → file_attached `추가`
- board_like_count (좋아요수) `미반영`

```sql
CREATE TABLE board_db (
id BIGINT PRIMARY KEY AUTO_INCREMENT,
board_title VARCHAR(255) NOT NULL,
board_contents VARCHAR(1000) NOT NULL,
// board_password VARCHAR(255) NULL,
// board_profile TEXT,
board_writer VARCHAR(30) NOT NULL,
write_date DATETIME NULL,
update_date DATETIME  NULL,
board_click_count INT DEFAULT 0,
file_attached INT NULL
);
```

### **Board_file(게시판 파일 데이터)**

- id (번호)
- write_date(업로드일)
- update_date(수정일)
- file_original_name (원본파일명)
- file_stored_name (서버파일명)
- board_id (게시판번호)

```sql
create table board_file_db (
id BIGINT PRIMARY KEY AUTO_INCREMENT,
write_date DATETIME null,
update_date DATETIME null,
file_original_name VARCHAR(255) null,
file_stored_name VARCHAR(255) null,
board_id BIGINT null,
constraint FKcfxqly70ddd02xbou0jxgh4o3
	foreign key (board_id) references board_db (id) on delete cascade
);
```

### **Comments (댓글 수집 데이터)**

- id (번호)
- write_date(업로드일)
- update_date(수정일)
- comment_writer(댓글자) = `로그인한 회원`
- comment_contents(댓글내용)
- board_id (게시판번호)

```sql
CREATE TABLE comments_db (
id INT AUTO_INCREMENT PRIMARY KEY,
write_date DATETIME null,
update_date DATETIME null,
comment_writer VARCHAR(30) NOT NULL,
comment_contents VARCHAR(255) NOT NULL,
board_id BIGINT null,
constraint FKm7k9gfd0qd67y0yf4wft2p2pu 
	foreign key (board_id) references board_db (id) on delete cascade
);
```

## 유저 프로세스

1. 비회원 사용자는 서비스소개페이지에서 **회원가입**을 진행합니다.
2. 회원가입을 위해 **이메일 주소, 비밀번호, 비밀번호 확인, 닉네임, 핸드폰 번호**를 입력합니다.
3. 회원가입이 성공적으로 이루어지면 로그인을 진행합니다.
4. 로그인은 **이메일과 비밀번호**로 이루어집니다.
5. 로그인에 성공하면 메인화면으로 이동합니다.
6. 메인화면에는 Top4 게시글이 좋아요 순으로 정렬되어 보여집니다.
7. 최신 게시물은 썸네일 형식으로 출력되며 한 페이지에는 **최대 4개의 게시물**이 보여집니다.
8. 페이지 처리가 가능하며 최대 10페이지까지 이동할 수 있고 **이전 섹션과 다음 섹션**으로 이동하는 버튼이 제공됩니다.
9. 상단 네비게이션 바에서는 **검색 기능**을 제공하며 마이페이지로 이동할 수 있습니다.
10. 마이페이지에서는 **~~프로필 사진~~과 닉네임**을 수정할 수 있습니다.
11. 또한, 마이페이지에서 게시물을 등록할 수 있으며 **제목, 내용, 파일(사진, 동영상)**을 업로드합니다.
12. 게시물 (썸네일)리스트에서는 **~~프로필 사진~~, 작성자, 게시물의 제목, 좋아요 수, 조회 수**가 보여집니다.
13. 게시물을 선택하면 해당 **게시물의 제목, 작성자, ~~프로필 사진~~, 작성일, 내용, 파일(사진, 동영상), 좋아요 수, 조회수**가 노출됩니다.
14. 본인 게시물이라면 게시물을 수정하거나 삭제할 수 있습니다.
15. 본인 게시물이 아니라면 좋아요를 할 수 있으며, 좋아요를 누른 유저의 **프로필 사진과 닉네임**이 표시됩니다.
16. 모든 게시물에는 댓글을 작성할 수 있으며, 댓글 **작성자, ~~프로필 사진~~, 작성일, 내용**이 출력됩니다.
17. ~~댓글은 한 번에 3개씩 출력되며 페이징이 가능하며 **최대 10페이지**까지 이동할 수 있습니다.~~
