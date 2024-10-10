const api = {
    //获取搜索建议
    GET_SUGGEST_SEARCH:"/search/suggest",
    //获取歌曲详细信息
    GET_SONG_DETAIL:"/song/detail",
    //获取歌曲Url
    GET_SONG_URL:"/song/url",
    //获取歌词
    GET_LYRIC:"/lyric",
    //注销
    LOGOUT:"/logout",
    //获取歌曲评论
    GET_SONG_COMMENT:"/comment/music",
    //点赞或取消点赞歌曲评论1
    LIKE_COMMENT:"/comment/like",
    //评论歌曲
    COMMENT_SONG:"/comment",
    //每日签到
    DAILY_SIGNIN:"/daily_signin",
    //获取登陆二维码Unikey
    GET_LOGIN_QR_UNIKEY:"/login/qr/key",
    //获取登陆二维码base64编码
    GET_LOGIN_QR_BASE64:"/login/qr/create",
    //轮询登录二维码状态
    POLLING_LOGIN_QR_STATUS:"/login/qr/check",
    //获取账户信息
    GET_ACCOUNT_INFO:"/user/account",
    //获取用户详情
    GET_USER_DETAIL:"/user/detail",
    //获取歌单详情
    GET_PLAYLIST_DETAIL:"/playlist/detail",
    //收藏歌单
    COLLECT_PLAYLIST:"/playlist/subscribe",
    //收藏专辑
    SUB_ALBUM:"/album/sub",
    //获取手机验证码
    GET_CAPTCHA:"/captcha/sent",
    //验证手机验证码
    VERIFY_CAPTCHA:"/captcha/verify",
    //换绑手机
    REBIND_PHONE:"/rebind",
    //获取搜索结果
    SEARCH:"/cloudsearch",
    //获取FM
    GET_FM:"/personal_fm",
    //音乐垃圾桶
    MUSIC_TRASH:"/fm_trash",
    //喜欢歌曲
    LIKE_SONG:"/like",
    //获取首页轮播图
    GET_BANNER:"/banner",
    //获取日推歌单
    GET_DAILY_RECOMMEND_LIST:"/recommend/resource",
    //获取日推歌曲
    GET_DAILY_RECOMMEND_SONGS:"/recommend/songs",
    //获取登陆状态
    GET_LOGIN_STATUS:"/login/status",
    //获取动态
    GET_EVENT:"/event",
    //点赞资源  params:type 0: 歌曲  1: mv 2: 歌单 3: 专辑 4: 电台节目 5: 视频 6: 动态 7: 电台
    LIKE_RESOURCE:"/resource/like",
    //更新用户信息
    UPDATE_USER_INFO:"/user/update",
    //修改歌单信息
    UPDATE_PLAYLIST_INFO:"/playlist/update",
    //获取歌手部分信息
    GET_ARTIST_DETAIL:"/artists",
    //获取专辑
    GET_ALBUM:"/album",
    //获取用户歌单
    GET_USER_PLAYLIST:"/user/playlist",
    //获取歌手专辑
    GET_ARTIST_ALBUM:"/artist/album",
    //获取歌手的50首热门歌曲
    GET_ARTIST_TOP50_SONGS:"/artist/top/song",
    //获取相似歌手
    GET_SIMILAR_ARTIST:"/simi/artist",
    //新版评论接口
    GET_COMMENT_NEW:"/comment/new",
    //收藏的歌手
    SUBSCRIBED_ARTIST: "/artist/sublist",
}

export default api